<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},

		created() {
			console.log("666")
		}
	}
</script>

<style>
html, body {
	width: 100%;
	height: 100%;
}
.app {
	height: 100%;
	width: 100%;
}
</style>
