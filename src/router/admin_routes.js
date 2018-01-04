import errorRouter from './error_routes';

const adminRouter = [
    {
        path: '/', redirect: '/home'
    },
    {
        path: '/home',
        component: (resolve) => require(['../views/admin/home/home.vue'], resolve)
    }
];


const routers = [
    ...adminRouter,
    ...errorRouter
];

export default routers;