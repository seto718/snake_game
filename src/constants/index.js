// 定数定義群
import {getSnakePosition,initFields} from '../utils';
import {Howl} from 'howler';
import grume_sound from '../music/grume.mp3';
import retoro_sound from '../music/retoro.mp3';
import gameover_sound from '../music/gameover.mp3';


export const fieldSize = 35
export const initialPosition = getSnakePosition(fieldSize)
export const initialValues = initFields(fieldSize, initialPosition)
export const defaultInterval = 100
export const defaultdifficulty = 3
export const Difficulty=[ 1000, 500, 100, 50, 10]

export const endsound = new Howl({
  src: gameover_sound,
  loop: true,
  volume: 0.6,
  sprite: {
      beginning: [0, 30000]
  }
});
export const id1 = endsound.play('beginning')
endsound.stop(id1)

export const music = new Howl({
  src: grume_sound,
  loop: true,
  volume: 0.4,
  sprite: {
      between: [0, 70000]
  }
});
export const id2 = music.play('between')
music.stop(id2)

export const effect = new Howl({
  src: retoro_sound,
  loop: false,
  volume: 0.4,
});
export const id3 = effect.play()
effect.stop(id3)


export const GameStatus = Object.freeze({
  init: 'init',
  playing: 'playing',
  suspended: 'suspended',
  gameover: 'gameover'
})

export const Direction = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

export const OppositeDirection = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

export const Delta = Object.freeze({
  up:{x: 0, y: -1},
  right:{x: 1, y: 0},
  left:{x: -1, y: 0},
  down:{x: 0, y: 1}
})

export const DirectionKeyCodeMap = Object.freeze({
  37: Direction.left,
  38: Direction.up,
  39: Direction.right,
  40: Direction.down
})

export const SoundStatus = Object.freeze({
  on: 'on',
  off: 'off'
})