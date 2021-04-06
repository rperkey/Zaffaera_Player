import Vue from 'vue'
import App from '@/App'
import Vuetify from 'vuetify/lib/framework'

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetify = new Vuetify()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
