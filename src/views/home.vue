<style scoped>
	@import '../styles/home.css';
</style>


<template>
	<wrapper>
		<div class="home">
			<div class="content">
				<ul>
					<blogItem></blogItem>
					<blogItem></blogItem>
					<blogItem></blogItem>
					<blogItem></blogItem>
				</ul>
			</div>

			<weeklyList></weeklyList>
		</div>
	</wrapper>
</template>

<script>
import wrapper from '../components/wrapper.vue';
import blogItem from '../components/blogItem.vue';
import weeklyList from '../components/weeklyList.vue';

export default {
	components: {
		wrapper,
		blogItem,
		weeklyList
	},
	data() {
		return {

		}
	}
}
</script>

