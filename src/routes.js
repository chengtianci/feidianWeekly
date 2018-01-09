
const routes = [
	{
		path: '/', redirect: '/home'
	},
	{
		path: '/home', name: 'home', title: '首页',
		component: (resolve) => require(['./views/home.vue'], resolve) 
	},
	{
		path: '/category', name: 'category', title: '目录',
		component: (resolve) => require(['./views/category.vue'], resolve) 
	},
	{
		path: '/weekly', name: 'weekly', title: '周刊',
		component: (resolve) => require(['./views/weekly.vue'], resolve) 
	},
	{
		path: '/blog', name: 'blog', title: '博客',
		component: (resolve) => require(['./views/blog.vue'], resolve) 
	},
	{
		path: '/admin', name: 'admin', title: '管理系统', redirect: '/admin/home',
		meta: { title: '管理系统' }, 
		component: (resolve) => require(['./views/admin/admin.vue'], resolve),
		children: [
			{
				path: 'home', name: 'admin-home', 
				component: (resolve) => require(['./views/admin/home/home.vue'], resolve)
			}
		]
	}
]

export default routes;