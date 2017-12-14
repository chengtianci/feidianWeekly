
const routes = [
	{
		path: '/', redirect: '/home'
	},
	{
		path: '/home', 
		component: (resolve) => require(['./views/home.vue'], resolve) 
	}
]

export default routes;