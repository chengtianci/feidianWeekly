import errorRouter from './error_routes';

const clientRouter = [
    {
        path: '/', redirect: '/home'
    },
    {
        path: '/home', name: 'home', title: '首页',
        meta: { title: '首页' },
        component: (resolve) => require(['../views/client/home.vue'], resolve)
    },
    {
        path: '/category',
        component: (resolve) => require(['../views/client/category.vue'], resolve)
    },
    {
        path: '/weekly',
        component: (resolve) => require(['../views/client/weekly.vue'], resolve)
    },
    {
        path: '/blog',
        component: (resolve) => require(['../views/client/blog.vue'], resolve)
    }
];

const routers = [
    ...clientRouter,
    ...errorRouter
]

export default routers;