//引入VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入路由组件

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Homepage from '../pages/Homepage.vue'
import Manage from '../pages/Manage.vue'
import Details from '../pages/Details.vue'


//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
	//👇注意这是routes!!不是routers!!
    routes:[
		{
			path:'/', redirect: '/login'
		},
		{
			path:'/login',
			component:Login,
			meta: {
				"title":"登录页面"
			}
		},
		{
			path:'/home', redirect: '/home/homepage',
			component:Home,
			meta: {
				"title":"首页"
			},
			children: [
				{
					path:'homepage',
					component:Homepage,
					meta: {
						"title":"首页"
					},
				},
				{
					path:'manage',
					component:Manage,
					meta: {
						"title":"首页"
					},
				},
				{	
					name:'details',
					path:'details',
					component:Details,
					meta: {
						"title":"日记内容"
					}
				}
				
			]
		},
	],
})

router.beforeEach( (to,from,next) => {
	if(to.meta.title){
		document.title = to.meta.title
	}
	next()
})

//暴露router
export default router