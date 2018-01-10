<style scoped>
	@import '../styles/nav.css';
	@import '../styles/header.css';
</style>

<template>
	<div>
		<nav class="nav">
			<div class="logo">
				<router-link to="/">沸点周刊</router-link>
			</div>
			<div class="items">
				<ul>
					<li id="navOne"><router-link to="/category">web<em></em></router-link></li>
					<li><router-link to="/category">Java<em></em></router-link></li>
					<li><router-link to="/category">ios<em></em></router-link></li>
					<li><router-link to="/category">信息安全<em></em></router-link></li>
					<li><router-link to="/category">成员日志<em></em></router-link></li>
					<li><router-link to="/category">推荐<em></em></router-link></li>
					<li><router-link to="/category">翻译<em></em></router-link></li>
					<li><router-link to="/category">其他<em></em></router-link></li>
				</ul>
				<div class="search_bar">
					<i class="iconfont icon-search"></i>
					<input class="search_input" placeholder="搜索" />
				</div>
			</div>
		</nav>
		<header class="header" @mousemove="activeMove($event)" @mouseleave="activeClear()" @mouseenter="activeInit()">
			<div class="header-wrapper" ref="header-wrapper">
				<div class="logo"><img src="../static/images/logo.png"></div>
				<p>沸腾的心，飞扬的梦；点滴积累，共码未来</p>
				<p>WRITE THE CODE,CHANGE THE WORLD</p>
			</div>
		</header>

	</div>	
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
	methods: {
		activeInit() {
			this.$refs["header-wrapper"].style.transition= "transform 0s";
		},
		activeMove(e) {
			const middle = {
				x: this.$refs["header-wrapper"].offsetWidth / 2,
				y: this.$refs["header-wrapper"].offsetHeight / 2
			}
			const distance = {
				x: (middle.x - e.offsetX) / 10,
				y: (middle.y - e.offsetY) / 20,
			}
			this.$refs["header-wrapper"].style.transform = `translate3d(${distance.x}px, ${distance.y}px, 0px)`; 
		},
		activeClear() {
			this.$refs["header-wrapper"].style.transition= "transform 1s";
			this.$refs["header-wrapper"].style.transform = "translate3d(0px, 0px, 0px)"; 
		}
	}
}
</script>