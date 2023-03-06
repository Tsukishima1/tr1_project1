import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

import moment from 'moment';
import http from './http';

import 'element-ui/lib/theme-chalk/display.css';
import { PageHeader,Tooltip,Backtop,Icon,Row,Col,Button,DatePicker,Input,Message,Menu,MenuItem,MenuItemGroup,Submenu,Alert, MessageBox, Notification, Form, FormItem, Select, Option, Empty,  } from "element-ui";
Vue.component(Empty.name, Empty)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(PageHeader.name, PageHeader)
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
Vue.component(Icon.name, Icon)
Vue.component(Backtop.name, Backtop)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Notification.name, Notification )

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$message = Message;
    Vue.prototype.$moment = moment;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$http = http;
  },
}).$mount('#app')