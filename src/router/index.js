import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue"
import Works from "../views/Works.vue"
import About from "../views/About.vue"

const routes = [
  {
    path: "/portafolio",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/works",
    name: "Works",
    component: Works
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router