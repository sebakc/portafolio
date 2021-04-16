<template>
  <section id="works" class="section section-left">
    <div class="limit">
      <h2 class="title">Works</h2>
      <article class="work">
        <div class="work-image">
          <img src="https://ryota-sato.com/images/livesimple.jpg" alt="project ej" />
        </div>
        <div class="work-body">
          <div class="content content-normal">
            <div class="work-item">
              <label for="year">Year</label>
              <div class="detail" id="year">.</div>
            </div>
            <div class="work-item">
              <label for="role">Role</label>
              <div class="detail" id="role">.</div>
            </div>
            <div class="work-item">
              <label for="Technologies">Technologies</label>
              <div class="detail" id="Technologies">.</div>
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
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return  {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0
    }
  },
  mounted () {
    const left = document.querySelector('.work-image').offsetWidth + 20
    const top = document.querySelector('header').offsetHeight + document.querySelector('.title').offsetHeight + 40
    document.querySelector('.content-normal').onmousemove = (e) => {
      this.x = e.clientX - left
      this.y = e.clientY - top
    }
    document.querySelector('.content-normal').onmouseenter = (e) => {
      document.querySelector('.content-masked').classList.add('in')
    }
    document.querySelector('.content-normal').onmouseleave = (e) => {
      document.querySelector('.content-masked').classList.remove('in')
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
    .work-image {
      width: 60%;
      img {
        width: 100%;
      }
    }
    .work-body {
      position: relative;
      width: 40%;
      .content {
        width: 100%;
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
        background: red;
        position: absolute;
        clip-path: circle(31.4% at 50% 50%);
        opacity: 0;
        transition: ease-in-out opacity .2s;
        &.in {
          opacity: 1;
        }
        label {
          opacity: 0;
        }
      }
      .work-item {
        margin-bottom: 2rem;
        padding: 0 20px;
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
