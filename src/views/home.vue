<template>
    <wrapper>
		<div id="main">
			<div id="content">
				<ul>
					<li>
						<router-link to="">文章1</router-link>
						<div class="article_author">
							<img src="../../static/images/20160921_IMG_2989.jpg">
							<span>作者1</span>
							<span class="article_date">2017-10-20</span>
						</div>
						<p>世事茫茫，光阴有限，算来何必奔忙？人生碌碌，竞短论长，却不道荣枯有数，得失难量。看那秋风金谷，夜月乌江，阿房宫冷，铜雀台荒，荣华花上露，富贵草头霜。机关参透，万虑皆忘，夸什么龙楼凤阁，说什么利锁名僵。闲来静处，且将诗酒猖狂，唱一曲归来未晚，歌一调湖海茫茫。逢时遇景，拾翠寻芳。约几个知心密友，到野外溪旁，或琴棋适性，或曲水流觞；或说些善因果报，或论些今古兴亡；看花枝堆锦绣，听鸟语弄笙簧。</p>
					</li>
					<li>
						<router-link to="">文章2</router-link>
						<div class="article_author">
							<img src="../../static/images/20160921_IMG_2989.jpg">
							<span>作者2</span>
							<span class="article_date">日期2</span>
						</div>
						<p>文章摘要2</p>
					</li>
				</ul>
			</div>

			<div id="index">
				<h2 class="index">按日期分类</h2>
				<ul>
					<li  class="index"><router-link to=""><i>　2017　</i>年<i>　10　</i>月</router-link></li>
					<li  class="index"><router-link to=""><i>　2017　</i>年<i>　９　</i>月</router-link></li>
					<li  class="index"><router-link to=""><i>　2017　</i>年<i>　８　</i>月</router-link></li>
					<li  class="index"><router-link to=""><i>　2017　</i>年<i>　７　</i>月</router-link></li>
					<li  class="index"><router-link to=""><i>　2017　</i>年<i>　６　</i>月</router-link></li>
					<li  class="index"><router-link to=""><i>　2017　</i>年<i>　５　</i>月</router-link></li>
				</ul>
			</div>
		</div>
	</wrapper>
</template>

<script>
import '../styles/home.scss';
import wrapper from '../components/wrapper.vue';

export default {
	components: {
		wrapper
	},
    data() {
        return {

        }
    }
}
</script>

