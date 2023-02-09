import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// Vue.use(axios)
import Vuex from 'vuex'
Vue.use(Vuex)
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// import router from './router'
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col,Button,DatePicker,Input,Message } from "element-ui";
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Message.name, Message)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$message = Message;
  },
}).$mount('#app')
