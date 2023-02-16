//引入VueRouter
import VueRouter from 'vue-router'
//引入路由组件
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Homepage from '../pages/Homepage.vue'
import Manage from '../pages/Manage.vue'


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
			path:'/home',
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