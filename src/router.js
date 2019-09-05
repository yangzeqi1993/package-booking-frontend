import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Package from './views/Package.vue'
import Appointment from './views/Appointment.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/package',
      name: 'package',
      component: Package
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment
    }
  ]
})
