import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes.js';
import App from './app';

Vue.use(VueRouter);

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

