export const adminRoutes = [
	{
		path: 'home', name: 'adminHome', 
		title: '后台首页', icon: '',
		component: (resolve) => require(['./views/admin/home/home.vue'], resolve)
	},
	{
		path: 'classifyManager', name: 'classifyManager',
		title: '分类管理', icon: '',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'navList', name: 'navList',
				component: (resolve) => require(['./views/admin/classifyManager/navList.vue'], resolve)
			},
			{
				path: 'tagList', name: 'tagList',
				component: (resolve) => require(['./views/admin/classifyManager/tagList.vue'], resolve)
			},
			{
				path: 'contentList', name: 'contentList',
				component: (resolve) => require(['./views/admin/classifyManager/contentList.vue'], resolve)
			}
		]
	},
	{
		path: 'blogManager', name: 'blogManager',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'blogList', name: 'blogList',
				component: (resolve) => require(['./views/admin/blogManager/blogList.vue'], resolve)
			},
			{
				path: 'newBlog', name: 'newBlog',
				component: (resolve) => require(['./views/admin/blogManager/newBlog.vue'], resolve)
			}
		]
	},
	{
		path: 'weeklyManager', name: 'weeklyManager',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'weeklyList', name: 'weeklyList',
				component: (resolve) => require(['./views/admin/weeklyManager/weeklyList.vue'], resolve)
			},
			{
				path: 'newWeekly', name: 'newWeekly',
				component: (resolve) => require(['./views/admin/weeklyManager/newWeekly.vue'], resolve)
			},
			{
				path: 'subscribeList', name: 'subscribeList',
				component: (resolve) => require(['./views/admin/weeklyManager/subscribeList.vue'], resolve)
			}
		]
	},
	{
		path: 'systemAnalysis', name: 'systemAnalysis',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'blogList', name: 'blogList',
				component: (resolve) => require(['./views/admin/systemAnalysis/logList.vue'], resolve)
			},
			{
				path: 'newBlog', name: 'newBlog',
				component: (resolve) => require(['./views/admin/systemAnalysis/memberList.vue'], resolve)
			}
		]
	}
];


export const routes = [
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
		children: [...adminRoutes]
	}
];