import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';

import routes from './router/admin_routes.js';
import Admin from './admin.vue';

// import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(iView);

const RouterConfig = {
    // mode: 'history',
    routes: routes
}
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#admin',
    router: router,
    render: h => h(Admin)
})

