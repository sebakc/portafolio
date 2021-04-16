<template>
  <div class="content">
    <app-header />
    <router-view />

    <div class="cursor-dot-outline"></div>
    <div class="cursor-dot"></div>
  </div>
</template>
<script>
import AppHeader from './components/partials/AppHeader.vue'

export default {
  components: {
    AppHeader
  },
  watch: {
    '$route.name' () {
      //this.switchView()
    }
  },
  mounted() {

    this.switchView()
    this.mouse()
  },
  updated() {
    this.switchView()
  },
  methods: {
    mouse () {
      const cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init() {
          // Set up element sizes
          this.dotSize = this.$dot.offsetWidth;
          this.outlineSize = this.$outline.offsetWidth;
          
          this.setupEventListeners();
          this.animateDotOutline();
        },
        
        setupEventListeners() {
          var self = this;
          
          // Anchor hovering
          document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });
          
          // Click events
          document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
    
    
          document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
          });
          
          // Hide/show cursor
          document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.display = 'block';
            self.$outline.style.display = 'block';
          });
          
          document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.display = 'none';
            self.$outline.style.display = 'none';
          });
        },
        
        animateDotOutline() {
          var self = this;
          
          self._x += (self.endX - self._x) / self.delay;
          self._y += (self.endY - self._y) / self.delay;
          self.$outline.style.top = self._y + 'px';
          self.$outline.style.left = self._x + 'px';
          
          requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        
        toggleCursorSize() {
          var self = this;
          
          if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
          } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
          }
        },
        
        toggleCursorVisibility() {
          var self = this;
          
          if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
          } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
          }
        }
      }

      cursor.init();
    },
    switchView () {
      setTimeout(_ => {
        document.body.classList.add('white-in')
        document.body.classList.remove('done')
      }, 500)

      setTimeout(_ => {
        document.body.classList.remove('zero')
        document.body.classList.add('black-in')
      }, 1500)

      setTimeout(_ => {
        document.body.classList.add('done')
      }, 2500)

      setTimeout(_ => {
        document.body.classList.remove('white-in')
        document.body.classList.remove('black-in')
      }, 3000)

    }
  }
}
</script>

<style lang="scss">

$primary: #333333;
$primary-light: mix(white, $primary, 25%);



html,
body {
    &,
    * {
        cursor: none;        
    }
}

.cursor-dot,
.cursor-dot-outline {
  z-index: 999;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out,
              transform 0.3s ease-in-out;
}

.cursor-dot {
  $size: 8px;
  width: $size;
  height: $size;
  background-color: $primary;
}

.cursor-dot-outline {
  $size: 40px;
  width: $size;
  height: $size;
  background-color: red;
  mix-blend-mode: multiply;
}






.content {
  display: flex;
  flex-direction: column;
}

a {
  color: var(--primary);
  text-decoration: none;
  display: inline-block;
}
.limit {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
#app {
  font-family: 'Syne', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary);
  min-height: 100vh;
}

body {
  background: var(--white);
  text-transform: uppercase;
  &.zero {
    opacity: 0;
  }
  &::before {
    top: -100%;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: cubic-bezier(.8,.4,.23,.63) all .5s;
    z-index: 999;
  }
  &::after {
    top: 100%;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: var(--primary);
    transition: cubic-bezier(.8,.4,.23,.63) all .5s;
    z-index: 999;
  }
  &.white-in {
    &::before {
      transition: cubic-bezier(.8,.4,.23,.63) all .5s;
      top: 0;
    }
  }
  &.black-in {
    opacity: 1;
    color: #2c3e50;
    &::after {
      top: 0%;
    }
    &::before {
      top: -100%;
    }
  }
  &.done {
    &.black-in {
      &::after {
        top: -100%;
      }
    }
    &:not(.black-in) {
      &::after {
        display: none;
      }
    }
  }
}
</style>
