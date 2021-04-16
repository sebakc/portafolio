<template>
  <header>
    <div class="limit">
      <div class="flex">
        <span @click='goTo("/portafolio")'>
          <div class="self">
            <div class="self-name">
              Sebastian Vega
            </div>
            <div class="self-self">
              Full stack developer, based in Chile
            </div>
          </div>
        </span>
        <nav>
          <ul>
            <li>
              <a class="nav-link" @click='goTo("/portafolio/works")'>Works</a>
              <a class="nav-link" @click='goTo("/portafolio/about")'>About</a>
              <a class="nav-link" @click='goTo("/portafolio/contact")'>Contact</a>
              <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/sebastian-vega-pena">
                <img src="../../assets/linkedin.svg" alt="linkedin">
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    goTo(link){
      this.$parent.switchView()
      setTimeout(_ => {
        this.$router.push({ path: link })
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
.self {
  text-align: left;
  .self-name {
    font-weight: 700;
    font-size: 25px;
  }
}
header {
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          a {
            padding: 10px;
            transition: ease-in-out all .2s;
            &:last-child {
              height: 15px;
              width: 15px;
              padding-right: 0;
              img {
                object-fit: cover;
              }
            }
            &:hover {
              letter-spacing: 5px;
            }
          }
        }
      }  
    }
  }
}
</style>