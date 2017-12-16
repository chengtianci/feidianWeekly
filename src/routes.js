
const routes = [
	{
		path: '/', redirect: '/home'
	},
	{
		path: '/home', 
		component: (resolve) => require(['./views/home.vue'], resolve) 
	},
	{
		path: '/category', 
		component: (resolve) => require(['./views/category.vue'], resolve) 
	},
	{
		path: '/weekly', 
		component: (resolve) => require(['./views/weekly.vue'], resolve) 
	},
	{
		path: '/blog', 
		component: (resolve) => require(['./views/blog.vue'], resolve) 
	},
]

export default routes;