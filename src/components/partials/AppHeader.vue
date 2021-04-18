<template>
  <header>
    <div class="limit">
      <div class="flex">
        <span @click='goTo("/")'>
          <div class="self">
            <a class="self-name grow-x">
              Sebastian Vega
            </a>
            <div class="self-self">
              Full stack developer,
              <br>
              based in Chile
            </div>
          </div>
        </span>
        <nav>
          <ul>
            <li>
              <a class="nav-link" @click='goTo("/works")'>Works</a>
            </li>
            <li>
              <a class="nav-link" @click='goTo("/about")'>About</a>
            </li>
            <li>
              <a class="nav-link" @click='goTo("/contact")'>Contact</a>
            </li>
            <li>
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
    padding-top: 10px;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        li {
          &:last-child {
            a {
              height: 15px;
              width: 15px;
              padding-right: 0;
              img {
                object-fit: cover;
              }
            }
          }
          a {
            padding: 10px;
            transition: ease-in-out all .2s;
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