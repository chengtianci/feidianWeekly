<template>
	<div>
		<nav>
			<div class="logo">沸点周刊</div>
			<div class="items">
				<ul>
					<li id="navOne"><router-link to="">web<em></em></router-link></li>
					<li><router-link to="">Java<em></em></router-link></li>
					<li><router-link to="">ios<em></em></router-link></li>
					<li><router-link to="">信息安全<em></em></router-link></li>
					<li><router-link to="">成员日志<em></em></router-link></li>
					<li><router-link to="">推荐<em></em></router-link></li>
					<li><router-link to="">翻译<em></em></router-link></li>
					<li><router-link to="">其他<em></em></router-link></li>
				</ul>
				<div class="search_bar">
					<i class="iconfont icon-search"></i>
					<input class="search_input" placeholder="搜索" />
				</div>
			</div>
		</nav>
		<header>
			<div class="logo"><img src="../../static/images/logo.png"></div>
			<p>沸腾的心，飞扬的梦；点滴积累，共码未来</p>
			<p>WRITE THE CODE,CHANGE THE WORLD</p>
			<!-- <div id="other">
				<router-link class="icon" to="" title="沸点github"><img src="public/images/github.png"></router-link>
				<router-link class="icon" to="" title="沸点官网"><img src="public/images/home.png"></router-link>
			</div>  -->
		</header>

	</div>	
</template>

<script>
import '../styles/nav.scss';
import '../styles/header.scss';

export default {
    data() {
        return {
            
        }
    }
}
</script>
