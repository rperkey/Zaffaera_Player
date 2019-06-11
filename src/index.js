import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import VueMaterial from 'vue-material'
import '~/vue-material/dist/vue-material.min.css'
import '~/vue-material/dist/theme/default.css'

import App from '@/App'
import Home from '@/pages/Home'
import Attacks from '@/pages/Attacks'
import Spells from '@/pages/Spells'

Vue.use(VueRouter)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(VueMaterial)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/attacks',
      name: 'Attacks',
      component: Attacks
    },
    {
      path: '/spells',
      name: 'Spells',
      component: Spells
    }
  ]
})

const app = new Vue({
  router,
  components: { App },
  template: '<App/>'
})

app.$mount('#app')
