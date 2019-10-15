import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '../api'
import toast from './tools/toast/toast.js'

// Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$toast = toast

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
