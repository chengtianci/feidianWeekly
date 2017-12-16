import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'

import routes from './routes.js';
import App from './app';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const RouterConfig = {
	// mode: 'history',
	routes: routes
}
const router = new VueRouter(RouterConfig);

new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})

