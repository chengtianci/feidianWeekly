export const adminRoutes = [
	{
		path: 'home', name: 'adminHome', 
		title: '后台首页', icon: 'ios-home',
		component: (resolve) => require(['./views/admin/home/home.vue'], resolve)
	},
	{
		path: 'classifyManager', name: 'classifyManager',
		title: '分类管理', icon: 'pricetags',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'navList', name: 'navList',
				title: '导航管理',
				component: (resolve) => require(['./views/admin/classifyManager/navList.vue'], resolve)
			},
			{
				path: 'tagList', name: 'tagList',
				title: '标签管理',
				component: (resolve) => require(['./views/admin/classifyManager/tagList.vue'], resolve)
			},
			{
				path: 'contentList', name: 'contentList',
				title: '目录管理',
				component: (resolve) => require(['./views/admin/classifyManager/contentList.vue'], resolve)
			}
		]
	},
	{
		path: 'blogManager', name: 'blogManager',
		title: '博客管理', icon: 'ios-paper',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'blogList', name: 'blogList',
				title: '博客列表',
				component: (resolve) => require(['./views/admin/blogManager/blogList.vue'], resolve)
			},
			{
				path: 'newBlog', name: 'newBlog',
				title: '发布博客',
				component: (resolve) => require(['./views/admin/blogManager/newBlog.vue'], resolve)
			}
		]
	},
	{
		path: 'weeklyManager', name: 'weeklyManager',
		title: '周刊管理', icon: 'ios-book',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'weeklyList', name: 'weeklyList',
				title: '周刊列表', 
				component: (resolve) => require(['./views/admin/weeklyManager/weeklyList.vue'], resolve)
			},
			{
				path: 'newWeekly', name: 'newWeekly',
				title: '发布周刊',
				component: (resolve) => require(['./views/admin/weeklyManager/newWeekly.vue'], resolve)
			},
			{
				path: 'subscribeList', name: 'subscribeList',
				title: '订阅列表',
				component: (resolve) => require(['./views/admin/weeklyManager/subscribeList.vue'], resolve)
			}
		]
	},
	{
		path: 'systemAnalysis', name: 'systemAnalysis',
		title: '系统分析', icon: 'ios-pulse-strong',
		component: (resolve) => require(['./views/admin/manager.vue'], resolve),
		children: [
			{
				path: 'logList', name: 'logList',
				title: '系统日志',
				component: (resolve) => require(['./views/admin/systemAnalysis/logList.vue'], resolve)
			},
			{
				path: 'memberList', name: 'memberList',
				title: '人员分析',
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