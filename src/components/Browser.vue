<template>
  <article class="browser">
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
        <div class="navigation">
          <div class="lock"></div>
          <div class="star"></div>
        </div>
      </div>
      <div class="right">
        <div class="logo"></div>
        <div class="avatar"></div>
        <div class="config"></div>
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
    </div>
    <div class="screen">
      <slot />
    </div>
  </article>
</template>
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
      }
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .screen {
    img {
      width: 100%;
    }
    height: 0;
    padding-bottom: 55%;
    overflow-y: scroll;
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
