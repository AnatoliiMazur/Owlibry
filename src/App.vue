<template lang="pug">
	#app
		//- Footer Component
		Header

		//- Router View
		router-view

		//- Footer Component
		Footer
</template>

<script>
	import Header from "./sections/Header";
	import Footer from "./sections/Footer";

	export default {
		components: { Header, Footer }
	}
</script>
