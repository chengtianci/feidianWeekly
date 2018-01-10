<style>
    .blog {
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        .blog-container {
            width: 75%;
            height: 1000px;
            background: #fff;
            padding: 20px;
            box-sizing: border-box;

            .blog-title {
                line-height: 80px;
                height: 80px;
                font-size: 2.2rem;
                font-weight: 400;
                text-align: center;
                color: #333;
            }
            .blog-info {
                font-size: 0.85rem;
                text-align: center;
                color: #666;
            }
            .blog-content {
                width: 100%;
                height: auto;
                margin-top: 20px;
                color: #666;
                background: wheat;
            }

        }

    }
</style>

<template>
    <wrapper>
        <div class="blog">
            <div class="blog-container">
                <h1 class="blog-title">标题</h1>
                <p class="blog-info">作者 2017年12月12日</p>
                <div class="blog-content">
                    内容 markdown
                </div>
            </div>
            <weeklyList></weeklyList>
        </div>
    </wrapper>
</template>

<script>
import wrapper from '../components/wrapper.vue';
import weeklyList from '../components/weeklyList.vue';

export default {
    components: {
        wrapper,
        weeklyList
    },
    data() {
        return {
            
        }
    }
}
</script>
