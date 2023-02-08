import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// Vue.use(axios)
// import Vuex from 'vuex'
// Vue.use(Vuex)
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
