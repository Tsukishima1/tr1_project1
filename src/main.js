import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// Vue.use(axios)
import Vuex from 'vuex'
Vue.use(Vuex)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

import moment from 'moment';
import 'element-ui/lib/theme-chalk/display.css';
import { Row,Col,Button,DatePicker,Input,Message,Menu,MenuItem,MenuItemGroup,Submenu,Alert, MessageBox } from "element-ui";
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Message.name, Message)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Submenu.name, Submenu)
Vue.component(Alert.name, Alert)
Vue.component(MessageBox.name, MessageBox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$message = Message;
    Vue.prototype.$moment = moment;
    Vue.prototype.$confirm = MessageBox.confirm;
  },
}).$mount('#app')
