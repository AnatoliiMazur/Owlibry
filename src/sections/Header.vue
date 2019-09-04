<template lang='pug'>
	// App Header
	header.border-bottom.shadow-sm
		nav.navbar.navbar-expand-lg.bg-light
			.container
				router-link.navbar-brand( to='/' ) Owlibry
				button.navbar-toggler( @click="menuShow = !menuShow" )
					svg(version='1.1' xmlns='http://www.w3.org/2000/svg' width='30' height='30' )
						g: path(d='M28.8,13.8H1.2C0.5,13.8,0,14.3,0,15c0,0.7,0.5,1.2,1.2,1.2h27.6c0.7,0,1.2-0.5,1.2-1.2C30,14.3,29.5,13.8,28.8,13.8z')
						g: path(d='M28.8,4.6H1.2C0.5,4.6,0,5.1,0,5.8S0.5,7,1.2,7h27.6C29.5,7,30,6.5,30,5.8S29.5,4.6,28.8,4.6z')
						g: path(d='M28.8,23H1.2C0.5,23,0,23.5,0,24.2c0,0.7,0.5,1.2,1.2,1.2h27.6c0.7,0,1.2-0.5,1.2-1.2C30,23.5,29.5,23,28.8,23z')
				.navbar-collapse.collapse( :class="{show: menuShow}" )
					ul.navbar-nav.mr-auto
						li(
							@click="menuShow = false",
							v-for="link in linkMenu",
							:key="linkMenu.title"
						).nav-item
							router-link.nav-link( :to='`${link.url}`' ) {{ link.title }}
					.group
						router-link.button.button-primary( to='/login' ) Login
						router-link.button.button-outline-primary( to='/registration' ) Registration
</template>

<script>
	export default {
		name: "Header",

		data() {
			return {
				menuShow: false,
				linkMenu: [
					{ title: 'Home', url: '/' },
					{ title: 'About', url: '/about' },
					{ title: 'Privacy-Police', url: '/privacy-police' }
				]
			}
		}
	}
</script>
