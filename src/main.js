import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'

import { routes } from './routes.js';
import App from './app';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const RouterConfig = {
	// mode: 'history',
	routes: routes
}
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	// console.log("to")
	// console.log(to)
	// console.log("from")
	// console.log(from)
	next()
})

new Vue({
	el: '#root',
	router: router,
	render: h => h(App)
})

