<template>
  <section id="works" class="section section-left">
    <div class="limit">
      <h2 class="title">Works</h2>
      <ul class="blank-list project-list">
        <li 
          v-for="(item, index) in projects"
          :key="index + '-list-item'"
          @click="goto(item)"
        >
          <a>
            <small>{{ index + 1 }}</small>
            <span class="project">
              {{ item.project }}
            </span>
          </a>
        </li>
      </ul>
      <article class="work">
        <div class="work-image">
          <Browser :project="current" :history="history">
            <img :src="`/portafolio/src/assets/screenshots/${current.img}`" :alt="current.project" />
          </Browser>
        </div>
        <div class="work-body">
          <div class="content content-normal">
            <div class="work-item">
              <label for="year">Year</label>
              <div id="year">{{ current.year }}</div>
            </div>
            <div class="work-item">
              <label for="role">Role</label>
              <div id="role">{{ current.role }}</div>
            </div>
            <div class="work-item">
              <label for="Technologies">Technologies</label>
              <div id="Technologies">{{ current.technologies }}</div>
            </div>
            <div class="work-item show-mobile">
              <img
                v-for="(icon, i) in current.icons"
                :key="`icon-${i}`"
                :class="['icon', icon.size]"
                :src="`/portafolio/src/assets/${icon.name}.svg`"
                :alt="icon.name"
              />
            </div>
          </div>
          <div ref="mask" class="content content-masked" :style="'clip-path: circle(60px at '+x+'px '+y+'px)'">
            <div class="work-item">
              <label for="year">.</label>
              <div class="detail op-0" id="year">.</div>
            </div>
            <div class="work-item">
              <label for="role">.</label>
              <div class="detail op-0" id="role">.</div>
            </div>
            <div class="work-item">
              <label for="Technologies">.</label>
              <div class="detail op-0" id="Technologies">.</div>
            </div>
            <div class="work-item">
              <img
                v-for="(icon, i) in current.icons"
                :key="`icon-${i}`"
                :class="['icon', icon.size]"
                :src="`/portafolio/src/assets/${icon.name}.svg`"
                :alt="icon.name"
              />
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
      startY: 0,
      current: {},
      history: [],
      projects: [
        {
          project: 'Observatorio nacional',
          web: 'https://observatorionacional.cl/',
          img: 'ol.png',
          year: '2020',
          role: 'Main developer (Full stack)',
          technologies: 'AdonisJs - VueJs',
          icons: [
            {
              name: 'd3',
              size: ''
            },
            {
              name: 'adonisjs',
              size: 'x2'
            },
            {
              name: 'vue',
              size: ''
            },
            {
              name: 'sass',
              size: ''
            },
            {
              name: 'apache',
              size: 'x2'
            },
            {
              name: 'pm2',
              size: 'x2'
            },
            {
              name: 'mysql',
              size: 'x2'
            }
          ]
        },
        {
          project: 'Simef',
          web: 'http://simef.minagri.gob.cl/',
          img: 'simef.png',
          year: '2020',
          role: 'Full stack developer',
          technologies: 'Laravel - VueJs',
          icons: [
            {
              name: 'laravel',
              size: ''
            },
            {
              name: 'vue',
              size: ''
            },
            {
              name: 'sass',
              size: ''
            },
            {
              name: 'apache',
              size: 'x2'
            },
            {
              name: 'pm2',
              size: 'x2'
            },
            {
              name: 'postgresql',
              size: ''
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.current = this.projects[0]
    this.history.push(this.projects[0])
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
    goto (item) {
      this.current = item
      this.history.push(item)
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
.project-list {
  display: flex;
  li {
    margin-right: 20px;
    span {
      font-size: var(--main-size);
      font-weight: bold;
    }
    * {
      vertical-align: text-top;
    }
  }
}
</style>
