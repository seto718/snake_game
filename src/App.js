import React, { useCallback, useEffect, useState} from 'react';
import Navigation from './conponents/Navigation';
import Field from './conponents/Field';
import Button from './conponents/Button';
import ManipulationPanel from './conponents/ManipulationPanel';
import {initFields, getFoodPosition,getSnakePosition } from './utils';

const initialPosition = getSnakePosition(35)
const initialValues = initFields(35, initialPosition)
const defaultInterval = 100
const defaultdifficulty = 3
const Difficulty=[ 1000, 500, 100, 50, 10]


const GameStatus = Object.freeze({
  init: 'init',
  playing: 'playing',
  suspended: 'suspended',
  gameover: 'gameover'
})

const Direction = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

const OppositeDirection = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

const Delta = Object.freeze({
  up:{x: 0, y: -1},
  right:{x: 1, y: 0},
  left:{x: -1, y: 0},
  down:{x: 0, y: 1}
})

const DirectionKeyCodeMap = Object.freeze({
  37: Direction.left,
  38: Direction.up,
  39: Direction.right,
  40: Direction.down
})


let timer = undefined

//タイマーが必要なくなったら削除するための関数
const unsubscribe = () => {
  if(!timer) {
    return
  }
  clearInterval(timer)
}

//壁にぶち当たったらfalseを返す関数
const isCollision = (fieldSize,position) => {
  if(position.y < 0 || position.x < 0){
    return true;
  }

  if(position.y > fieldSize - 1 || position.x > fieldSize -1 ){
    return true;
  }
  return false;
};

const isEatingMyself = (fields, position) => {
  return fields[position.y][position.x] === 'snake'
}




function App() {

  const [fields, setFields] = useState(initialValues)
  const [body, setBody] = useState([])
  const [status, setStatus] = useState(GameStatus.init)
  const [tick, setTick] = useState(0)
  const [direction, setDirection] = useState(Direction.up)
  const [difficulty, setDifficulty] = useState(defaultdifficulty)
  const [snakePosition, setSnakePosition] = useState(initialPosition)

  const onStart = () => setStatus(GameStatus.playing)
  const onStop = () => setStatus(GameStatus.suspended)

  const onRestart = () => {
    timer = setInterval(() => {
      setTick(tick => tick + 1)
    }, defaultInterval)

    setStatus(GameStatus.init)
    const snakePosition = getSnakePosition(fields.length)
    setSnakePosition(snakePosition)
    setDirection(Direction.up)
    setFields(initFields(fields.length,snakePosition))
    setBody([snakePosition])
    setDifficulty(defaultdifficulty)
  }

  useEffect(() => {
    if(status === GameStatus.init){
        setBody([snakePosition])
      
      //テスト用ヘビの初期の長さ調整
      // setBody(
      //   new Array(15).fill('').map((_item,index) => ({x:17,y:17 + index})),
      // )
      const interval = Difficulty[difficulty - 1]
      timer = setInterval(() => {
        setTick(tick => tick + 1)
      }, interval)
      return unsubscribe
    }else if(status === GameStatus.suspended){

      const interval = Difficulty[difficulty - 1]
      timer = setInterval(() => {
        setTick(tick => tick + 1)
      }, interval)
      return unsubscribe
    }
    
  },[difficulty],status,snakePosition)

  useEffect(() => {
    if(!body.length === 0 || status !== GameStatus.playing){
      return
    }
    const canContinue = handleMoving()

    if (!canContinue){
      unsubscribe()
      setStatus(GameStatus.gameover)
    }
  },[tick])

  //ヘビが進行する関数
  const handleMoving = () => {
    const {x, y} = body[0]
    const delta = Delta[direction]
    const newPosition = {
      x: x+delta.x,
      y: y+delta.y
    }

    if(isCollision(fields.length, newPosition) || isEatingMyself(fields, newPosition)){
      unsubscribe()
      return false
    }
    const newBody =[...body]
    if(fields[newPosition.y][newPosition.x] !== 'food'){
      const removingTrack = newBody.pop()
      fields[removingTrack.y][removingTrack.x] = ''
    } else{
      const food = getFoodPosition(fields.length, [...newBody, newPosition])
      fields[food.y][food.x] = 'food'
    }
    
    fields[newPosition.y][newPosition.x] = 'snake'
    newBody.unshift(newPosition)
    setBody(newBody)

    setFields(fields)
    return true
  }

  //キー操作で方向転換
  const onChangeDirection = useCallback((newDirection) =>{
      if(status !== GameStatus.playing) {
        return direction
      }

      // ここから自分実装
      if((OppositeDirection[direction] === 'up' && newDirection === 'down')||(OppositeDirection[direction] === 'down' && newDirection === 'up')){
        return direction
      }else if((OppositeDirection[direction] === 'left' && newDirection === 'right')||(OppositeDirection[direction] === 'right' && newDirection === 'left')){
        return direction
      }
      //


      if(OppositeDirection[direction] === newDirection){
        return
      }
      setDirection(newDirection)
    },[direction,status]
  )

  const onChangeDifficulty = useCallback((difficulty) => {
    
    if(status === GameStatus.suspended){
      if(difficulty < 1 || difficulty > difficulty.length){
        return
      }
      setDifficulty(difficulty)
    }

    //なぜかここにsuspendedの場合も追加しようとしても通ってしまう
    if(status !== GameStatus.init){
      // console.log('aaa')
      return
    }
    if(difficulty < 1 || difficulty > difficulty.length){
      return
    }
    setDifficulty(difficulty)
  },[status, difficulty])

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = DirectionKeyCodeMap[e.keyCode];
      if(!newDirection){
        return;
      }
      onChangeDirection(newDirection);
    };
    document.addEventListener('keydown',handleKeyDown);
    return () => document.removeEventListener('keydown',handleKeyDown)
  },[onChangeDirection])


  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation
        length={body.length}
        difficulty={difficulty}
        onChangeDifficulty={onChangeDifficulty}
        />
      </header>
      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button
          status={status}
          onStop={onStop}
          onStart={onStart}
          onRestart={onRestart}
         />
        <ManipulationPanel onChange={onChangeDirection} />
      </footer>
    </div>
  );
}

export default App;
