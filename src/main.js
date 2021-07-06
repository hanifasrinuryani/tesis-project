import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '../src/routes'
import VueAnime from 'vue-animejs';

import './assets/css/style.css'

Vue.use(VueAnime)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
