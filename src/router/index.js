import Vue from 'vue'
import Router from 'vue-router'
import SchoolPage from '@/components/HelloWorld'
import Landing from '@/components/landing'
import Tests from '@/components/tests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/schools',
      name: 'SchoolPage',
      component: SchoolPage
    },
    {
      path: '/tests',
      name: 'Tests',
      component: Tests
    }
  ]
})
