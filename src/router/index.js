import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/layout.css'
import '../assets/css/design.css'
import Hello from '@/components/Hello/Hello.vue'
import Home from '@/components/Home/Home.vue'
import NameGenerator from '@/components/NameGenerator/NameGenerator.vue'
import HallOfHeroes from '@/components/HallOfHeroes/HallOfHeroes.vue'
import DiceRoller from '@/components/DiceRoller/DiceRoller.vue'
import Callback from '@/components/callback.vue'
import { requireAuth } from '../utils/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/NameGenerator',
      name: 'NameGenerator',
      component: NameGenerator
    },
    {
      path: '/HallOfHeroes',
      name: 'HallOfHeroes',
      beforeEnter: requireAuth,
      component: HallOfHeroes
    },
    {
      path: '/DiceRoller',
      name: 'DiceRoller',
      component: DiceRoller
    },
    {
      path: '/callback',
      component: Callback
    }
  ]
})
