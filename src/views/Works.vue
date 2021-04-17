<template>
  <section id="works" class="section section-left">
    <div class="limit">
      <h2 class="title">Works</h2>
      <article class="work">
        <div class="work-image">
          <Browser>
            <img src="../assets/screenshots/ol.png" alt="project ej" />
          </Browser>
        </div>
        <div class="work-body">
          <div class="content content-normal">
            <div class="work-item">
              <label for="year">Year</label>
              <div id="year">2020</div>
            </div>
            <div class="work-item">
              <label for="role">Role</label>
              <div id="role">Main developer (fullstack)</div>
            </div>
            <div class="work-item">
              <label for="Technologies">Technologies</label>
              <div id="Technologies">Laravel - Vue</div>
            </div>
            <div class="work-item show-mobile">
              <img class="icon x2" src="../assets/adonisjs.svg" alt="adonisjs">
              <img class="icon" src="../assets/vue.svg" alt="vuejs">
              <img class="icon" src="../assets/sass.svg" alt="sass">
              <img class="icon x2" src="../assets/apache.svg" alt="apache">
              <img class="icon x2" src="../assets/pm2.svg" alt="pm2">
            </div>
          </div>
          <div ref="mask" class="content content-masked" :style="'clip-path: circle(60px at '+x+'px '+y+'px)'">
            <div class="work-item">
              <label for="year">.</label>
              <div class="detail" id="year">2020</div>
            </div>
            <div class="work-item">
              <label for="role">.</label>
              <div class="detail" id="role">Main developer (fullstack)</div>
            </div>
            <div class="work-item">
              <label for="Technologies">.</label>
              <div class="detail" id="Technologies">Laravel - Vue</div>
            </div>
            <div class="work-item">
              <img class="icon" src="../assets/d3.svg" alt="d3js">
              <img class="icon x2" src="../assets/adonisjs.svg" alt="adonisjs">
              <img class="icon" src="../assets/vue.svg" alt="vuejs">
              <img class="icon" src="../assets/sass.svg" alt="sass">
              <img class="icon x2" src="../assets/apache.svg" alt="apache">
              <img class="icon x2" src="../assets/pm2.svg" alt="pm2">
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import Browser from '../components/Browser.vue'

export default {
  components: {
    Browser
  },
  data () {
    return  {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0
    }
  },
  mounted () {
    let left = document.querySelector('.work-image').offsetWidth + 20
    let top = document.querySelector('header').offsetHeight + document.querySelector('.title').offsetHeight

    if (document.body.offsetWidth < 550) {
      top += document.querySelector('.work-image').offsetHeight + 40
      left = 20
    }
    console.log(top);

    document.querySelector('.content-normal').onmousemove = (e) => {
      this.x = e.clientX - left
      this.y = e.clientY - top
    }
    document.querySelector('.content-normal').onmouseenter = (e) => {
      document.querySelector('.content-masked').classList.add('in')
      document.body.classList.add('hide-mouse')
    }
    document.querySelector('.content-normal').onmouseleave = (e) => {
      document.querySelector('.content-masked').classList.remove('in')
      document.body.classList.remove('hide-mouse')
    }
  },
  methods: {
    move (e) {
      console.log(e);
    }
  }
}
</script>
<style lang="scss" scoped>
#works {
  .work {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 550px) {
      flex-direction: row;
      .work-image {
        width: 60%;
      }
      .work-body {
        width: 40%;
      }
    }
    .work-image {
      width: 100%;
    }
    .work-body {
      position: relative;
      width: 100%;
      .content {
        width: 100%;
        height: 100%;
      }
      .content-normal {
        position: relative;
        z-index: 99;
        .detail {
          opacity: 0;
        }
      }
      .content-masked {
        top: 0;
        left: 0;
        z-index: 9;
        background: cyan;
        position: absolute;
        clip-path: circle(31.4% at 50% 50%);
        opacity: 0;
        transition: ease-in-out opacity .2s;
        display: none;
        @media screen and (min-width: 550px) {
          display: block;
        }
        &.in {
          opacity: 1;
        }
        label {
          opacity: 0;
        }
      }
      .work-item {
        padding-top: 2rem;
        @media screen and (min-width: 550px) {
          padding: 0 20px;
          padding-top: 2rem;
        }
        .icon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          &.x2 {
            width: 80px;
          }
        }
        div {
          position: relative;
        }
      }
    }
  }
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: var(--white);
  clip-path: circle(31.4% at 50% 50%);
}
</style>
