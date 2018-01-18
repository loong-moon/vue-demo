import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import DashPlayer from '@/components/DashPlayer'
import HlsPlayer from '@/components/HlsPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    {
      path: '/dash',
      name: 'Dash',
      component: DashPlayer
    },
    {
      path: '/hls',
      name: 'Hls',
      component: HlsPlayer
    }
  ]
})
