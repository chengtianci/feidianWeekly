const errorRouter = [
    {
        path: '/error', name: 'error', title: '错误',
        component: (resolve) => require(['../views/error/error.vue'], resolve)
    },
    {
        path: '/page404', name: 'page404', title: '404',
        component: (resolve) => require(['../views/error/page404.vue'], resolve)
    }
];

export default errorRouter;