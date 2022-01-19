import React, { useCallback, useEffect, useState } from 'react';
import { initFields, getFoodPosition, getSnakePosition, isCollision, isEatingMyself } from '../utils';
import {
    initialPosition,
    defaultInterval,
    defaultdifficulty,
    initialValues,
    Difficulty,
    GameStatus,
    Direction,
    OppositeDirection,
    Delta,
    DirectionKeyCodeMap,
    SoundStatus,
    endsound,
    music,
    effect,
    id1,
    id2,
    id3
} from '../constants';


let timer = undefined

//タイマーが必要なくなったら削除するための関数
const unsubscribe = () => {
    if (!timer) {
        return
    }
    clearInterval(timer)
}

const useSnakeGame = () => {

    const [fields, setFields] = useState(initialValues)
    const [body, setBody] = useState([])
    const [status, setStatus] = useState(GameStatus.init)
    const [tick, setTick] = useState(0)
    const [direction, setDirection] = useState(Direction.up)
    const [difficulty, setDifficulty] = useState(defaultdifficulty)
    const [snakePosition, setSnakePosition] = useState(initialPosition)
    const [soundstatus, setSoundStatus] = useState('on')
    const [gameoverstatus, setGameoverStatus] = useState(0)
    const [imgstatus, setImgStatus] = useState('')

    const start = () => {
        setStatus(GameStatus.playing)
        if (soundstatus !== SoundStatus.off) {
            if (music.playing(id2) === false) {
                music.play(id2)
            }
        }
    }
    const stop = () => { setStatus(GameStatus.suspended) }

    const reload = () => {
        timer = setInterval(() => {
            setTick(tick => tick + 1)
        }, defaultInterval)

        setStatus(GameStatus.init)
        const snakePosition = getSnakePosition(fields.length)
        setSnakePosition(snakePosition)
        setDirection(Direction.up)
        setFields(initFields(fields.length, snakePosition))
        setBody([snakePosition])
        setDifficulty(defaultdifficulty)
        endsound.stop(id1)

    }



    useEffect(() => {
        if (status === GameStatus.init) {
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
        } else if (status === GameStatus.suspended) {

            const interval = Difficulty[difficulty - 1]
            timer = setInterval(() => {
                setTick(tick => tick + 1)
            }, interval)
            return unsubscribe
        }
    }, [difficulty], status, snakePosition)

    useEffect(() => {
        if (!body.length === 0 || status !== GameStatus.playing) {
            return
        }
        const canContinue = handleMoving()

        if (!canContinue) {
            unsubscribe()
            if (soundstatus !== SoundStatus.off) {
                effect.play(id3)
                if (music.playing(id2) == true) {
                    music.stop(id2)
                }
                endsound.play(id1)
            }
            setStatus(GameStatus.gameover)
            const gameoverlevel = () => {
                return body.length > 60 ? 4
                    : body.length <= 60 && body.length > 40 ? 3
                        : body.length <= 40 && body.length > 20 ? 2
                            : body.length <= 20 && body.length >= 1 ? 1
                                : 0;
            }
            setGameoverStatus(gameoverlevel())
            setImgStatus(0)

        }
    }, [tick])

    //ヘビが進行する関数
    const handleMoving = () => {
        const { x, y } = body[0]
        const delta = Delta[direction]
        const newPosition = {
            x: x + delta.x,
            y: y + delta.y
        }

        if (isCollision(fields.length, newPosition) || isEatingMyself(fields, newPosition)) {
            unsubscribe()
            return false
        }
        const newBody = [...body]
        if (fields[newPosition.y][newPosition.x] !== 'food') {
            const removingTrack = newBody.pop()
            fields[removingTrack.y][removingTrack.x] = ''
        } else {
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
    const updateDirection = useCallback((newDirection) => {
        if (status !== GameStatus.playing) {
            return direction
        }

        // ここから自分実装
        if ((OppositeDirection[direction] === 'up' && newDirection === 'down') || (OppositeDirection[direction] === 'down' && newDirection === 'up')) {
            return direction
        } else if ((OppositeDirection[direction] === 'left' && newDirection === 'right') || (OppositeDirection[direction] === 'right' && newDirection === 'left')) {
            return direction
        }
        //


        if (OppositeDirection[direction] === newDirection) {
            return
        }
        setDirection(newDirection)
    }, [direction, status]
    )

    const updateDifficulty = useCallback((difficulty) => {

        if (status === GameStatus.suspended) {
            if (difficulty < 1 || difficulty > difficulty.length) {
                return
            }
            setDifficulty(difficulty)
        }

        //なぜかここにsuspendedの場合も追加しようとしても通ってしまう
        if (status !== GameStatus.init) {
            return
        }
        if (difficulty < 1 || difficulty > difficulty.length) {
            return
        }
        setDifficulty(difficulty)
    }, [status, difficulty])

    useEffect(() => {
        const handleKeyDown = (e) => {
            const newDirection = DirectionKeyCodeMap[e.keyCode];
            if (!newDirection) {
                return;
            }
            updateDirection(newDirection);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [updateDirection])

    const changeSoundStatus = useCallback((soundstatus, id1, id2) => {

        if (soundstatus === SoundStatus.on) {
            soundstatus = SoundStatus.off
            setSoundStatus(soundstatus)
            if (music.playing(id2)) {
                return music.stop(id2);
            } else if (endsound.playing(id1)) {
                return endsound.stop(id1)
            } else { }
        } else {
            soundstatus = SoundStatus.on
            setSoundStatus(soundstatus)
            if ((music.playing(id2) === false) && (status !== GameStatus.gameover)) {
                return music.play(id2)
            }
            if (endsound.playing(id1) === false) {
                return endsound.play(id1);
            }
        }

    }, [soundstatus])

    //gameover後のpopup閉める処理
    const close_popup2 = useCallback((imgstatus) => {
        if (gameoverstatus !== 0) {
            imgstatus = 1
            setImgStatus(imgstatus)
            endsound.stop(id1)
            return imgstatus
        }
    }, [gameoverstatus])


    return {
        body,
        difficulty,
        fields,
        status,
        start,
        stop,
        reload,
        updateDirection,
        updateDifficulty,
        soundstatus,
        changeSoundStatus,
        id1,
        id2,
        gameoverstatus,
        close_popup2,
        imgstatus
    };
}

export default useSnakeGame;
