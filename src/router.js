import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import PrivacyPolice from './views/PrivacyPolice.vue'

Vue.use( Router )

export default new Router( {
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component() {
				return import( './views/About.vue' )
			}
		},
		{
			path: '/privacy-police',
			name: 'privacy-police',
			component: PrivacyPolice
		},
		{
			path: '/login',
			name: 'login',
			component() {
				return import( './views/Login.vue' )
			}
		},
		{
			path: '/registration',
			name: 'registration',
			component() {
				return import( './views/Registration.vue' )
			}
		}
	]
} )
