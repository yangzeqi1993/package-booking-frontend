import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Send from './views/Send.vue'
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
      path: '/send',
      name: 'Send',
      component: Send
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment
    }
  ]
})
