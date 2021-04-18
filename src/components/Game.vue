<template>
  <article id="shooter">
    <div class="game">
      <div v-if="!start" @click="startGame()" class="start">
        lets start!
      </div>
      <div class="game-container">
        <div v-if="game.pause && !game.stop" class="pause">
          <span @click="game.pause = false">
            Pause
          </span>
        </div>
        <div class="controls">
          <div class="play-pause">
            <img v-if="!game.pause" @click="game.pause = true" src="../assets/images/game/pause.svg" alt="pause">
            <img v-if="game.pause" @click="game.pause = false" src="../assets/images/game/play.svg" alt="play">
          </div>
          <div class="data">
            <div class="points">
              {{ game.points }}<small>pts</small>
            </div>
            <div class="speed">
              <div class="odometer">
                <div class="circle">
                  <div
                    class="needle"
                    :style="`transform: rotate(${getDeg()}deg);`"
                  >
                  </div>
                </div>
              </div>{{ parseInt(game.speed * 100) }}<small>px/s</small>
            </div>
          </div>
        </div>

        <div 
          id="duck-a"
          :style="`top: ${game.enemies['#duck-a'].position.y}; left: ${game.enemies['#duck-a'].position.x}`"
          :class="`duck bird white ${game.enemies['#duck-a'].direction.name}-${game.enemies['#duck-a'].index}`"
          @click="game.shoot('#duck-a')"
        ></div>

      </div>
    </div>
  </article>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
body.done {
  .game {
    display: block;
  }
}
.game {
  display: none;
  font-family: 'Press Start 2P', cursive;
  border-radius: 10px;
  width: 100%;
  border: 4px solid var(--primary);
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  position: relative;
  height: 300px;
  .bird {
    width: 32px;
    height: 30px;
    &.white {
      &.down-0 {
        background-position: 0 0;
      }
      &.down-1 {
        background-position-x: -31px;
        background-position-y: 0;
      }
      &.down-2 {
        background-position-x: -62px;
        background-position-y: 0;
      }

      &.left-0 {
        background-position-x: 0;
        background-position-y: -64px;
      }
      &.left-1 {
        background-position-x: -31px;
        background-position-y: -64px;
      }
      &.left-2 {
        background-position-x: -62px;
        background-position-y: -64px;
      }

      &.right-0 {
        background-position-x: 0;
        background-position-y: -126px;
      }
      &.right-1 {
        background-position-x: -31px;
        background-position-y: -126px;
      }
      &.right-2 {
        background-position-x: -62px;
        background-position-y: -126px;
      }

      &.up-0 {
        background-position-x: 0;
        background-position-y: -185px;
      }
      &.up-1 {
        background-position-x: -31px;
        background-position-y: -185px;
      }
      &.up-2 {
        background-position-x: -62px;
        background-position-y: -185px;
      }
    }
    background-image: url('../assets/images/game/birds.png');
  }
  .controls {
    z-index: 99;
    position: relative;
    display: flex;
    justify-content: space-between;
    img {
      width: 60px;
    }
    .data {
      text-align: right;
      .points {
        font-size: 50px;
        small {
          font-size: 20px;
        } 
      }
  
      .speed {
        font-size: 30px;
        small {
          font-size: 20px;
        } 
      }
    }
  }
  .start {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6vw;
  }
  .pause {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6vw;
  }
  .duck {
    position: absolute;
    z-index: 99;
    bottom: 20px;
    transform: scaleX(-1);
    transition: transform .2s, opacity 0s;
    transition-timing-function: linear;
  }
}
</style>
<style lang="scss">
.odometer {
  display: inline-block;
  .circle {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 3px solid var(--primary);
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--secondary);
      left: 0;
      top: 75%;
      position: absolute;
    }
    .needle {
      position: absolute;
      width: 2px;
      height: 35%;
      background: var(--primary);
      left: calc(50% - 1.5px);
      bottom: 25%;
      z-index: 99;
      transform-origin: bottom;
    }
  }
}
</style>>
<script>
class Game {
  pause = false
  stop = false

  points = 0
  
  frame = ''

  blankEnemy = {
    direction: {
      name: 'left',
      dx: 1,
      y: 1,
      dy: 0
    },
    position: {
      x: 0,
      y: 0
    },
    index: 0
  }

  speed = 1

  enemies = {}

  constructor (enemies = []) {
    this.frame = document.querySelector('.game')
    enemies.forEach((e) => {
      this.enemies[e] = {
        ...this.blankEnemy,
        query: e
      }
    })
  }

  start () {
    const duck = document.querySelector('.duck')

    this.updateSprite() 

    Object.keys(this.enemies).forEach((el, index) => {
      const enemy = document.querySelector(el)
      enemy.style.left = (-50*(index+1)) + 'px'
      enemy.style.top = 0
    })

    setInterval(_ => {
      if (!this.pause ) {
        Object.keys(this.enemies).forEach((el) => {
          const enemy = document.querySelector(el)
          this.x(enemy, el)

          this.y(enemy, el)
        })
      }
    }, 10)

    setInterval(_ => {
      if (!this.pause ) {
        Object.keys(this.enemies).forEach((el) => {
          const enemy = document.querySelector(el)
          
          if (parseInt(enemy.style.left) < this.frame.offsetWidth) {

          const dir = parseInt(Math.random() * (+10 - +0) + +0) % 2 == 0 ? 1 : -1

          this.enemies[el].direction.y = dir
        }
        })
      }
    }, 1000)
  }

  x (enemy, el) {
    this.frame = document.querySelector('.game')
    if (parseInt(enemy.style.left) < this.frame.offsetWidth) {
      enemy.style.display = 'block'
      this.enemies[el].position.x = parseInt(enemy.style.left) + this.enemies[el].direction.dx*this.speed + 'px'
      enemy.style.left = parseInt(enemy.style.left) + this.enemies[el].direction.dx*this.speed + 'px'
    } else {
      enemy.style.left = -100 + 'px'
      this.enemies[el].position.x = -100 + 'px'
      enemy.style.display = 'none'
    }
  }

  y (enemy, el) {
    if (this.enemies[el].direction.dy) {
      this.enemies[el].position.y = parseInt(enemy.style.top) + this.enemies[el].direction.dy + 'px'
    } else {
      this.enemies[el].position.y = parseInt(enemy.style.top) + this.enemies[el].direction.y + 'px'
    }

    if (parseInt(enemy.style.top) < 0) {
      this.enemies[el].direction.y = 1
    }
    if ((this.frame.offsetHeight - enemy.offsetHeight) < parseInt(enemy.style.top)) {
      this.enemies[el].direction.y = -1
    }
  }

  updateSprite () {
    setInterval(_ => {
      if (!this.pause ) {
        Object.keys(this.enemies).forEach((el) => {
          if (this.enemies[el].index == 2) {
            this.enemies[el].index = 0
          } else {
            this.enemies[el].index++
          }
        })
      }
    },100)
  }

  shoot (el) {
    this.enemies[el].direction.dx = 0
    this.enemies[el].direction.dy = 1
    this.enemies[el].direction.name = 'down'
    this.points += 10
    setTimeout(_ => {
      this.speed *= 1.5
      this.enemies[el].direction.dx = 1
      this.enemies[el].direction.dy = 0
      this.enemies[el].direction.name = 'left'
      
      this.enemies[el].direction.x = 0
      this.enemies[el].direction.y = 0
    }, 2000)
  }
}

export default {
  data () {
    return {
      start: false,
      game: {}
    }
  },
  created () {
    this.game = new Game([
      '#duck-a'
    ])
  },
  methods: {
    getDeg () {
      const speed = parseInt(-90 + this.game.speed * 50)
      return speed < 90 ? speed : 100
    },
    startGame () {
      this.start = true;
      this.game.start()
    }
  }
}
</script>