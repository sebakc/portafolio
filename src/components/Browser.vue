<template>
  <article class="browser" @click.stop="active = false">
    <div class="controls">
      <div class="left">
        <div class="button backward">
          <img class="arrow icon" src="../assets/left.svg" alt="backward">
        </div>
        <div class="button forward">
          <img class="arrow icon" src="../assets/right.svg" alt="forward">
        </div>
        <div class="button refresh">
          <img class="icon" src="../assets/refresh.svg" alt="refresh">
        </div>
      </div>
      <div class="center">
        <div :class="['navigation', {active: active}]">
          <div class="lock">
            <img class="icon" src="../assets/lock.svg" alt="lock">
          </div>
          <div class="web" @click.stop="active = !active">
            {{ project.web }}
          </div>
          <div class="star"></div>
          <div class="history">
            <ul class="blank-list">
              <li
                v-for="(item, index) in history"
                :key="index + '-history-item'"
              >
                {{ item.web }}

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="logo"></div>
        <div class="avatar"></div>
        <div class="config"></div>
        <div class="button">
          <img class="me icon" src="../assets/me.jpg" alt="me">
        </div>
        <div class="button refresh">
          <img class="icon dots" src="../assets/dots.svg" alt="dots">
        </div>
      </div>
    </div>
    <div class="screen">
      <slot />
    </div>
  </article>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    },
    history: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    current () {

    }
  }
}
</script>
<style lang="scss">
.browser {
  border: 2px solid #4c4c4c;
  border-radius: 4px;
  .controls {
    justify-content: space-between;
    background-color: #4c4c4c;
    height: 25px;
    display: flex;
    .left,
    .right {
      display: flex;
    }
    .center {
      width: 100%;
      padding: 4px;
      .navigation {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #373737;
        color: white;
        text-transform: none;
        display: flex;
        position: relative;
        overflow: hidden;
        .history {
          position: absolute;
          background: var(--white);
          color: var(--primary);
          padding: 10px;
          transform: translateY(-100%);
          opacity: 0;
          transition: ease-in-out all 0s;
        }
        &.active{
          overflow: visible;
          .history{
            opacity: 1;
            transform: translateY(0%);
            top: 20px;
          }
        }
        .lock {
          .icon {
            width: 10px;
            margin: 0 4px;
            margin: 0;
            top: -2px;
            position: relative;
          }
        }
      }
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      .me {
        height: 15px;
        border-radius: 50%;
      }
      .dots {
        height: 12px;
      }
    }
  }
  .screen {
    img {
      width: 100%;
    }
    overflow-y: scroll;
    height: 45vw;
    @media screen and (min-width: 550px) {
      height: 26vw;
    }
  }
  .icon {
    width: 15px;
    margin: 5px;
    img {
      width: 100%;
    }
  }
}
</style>
