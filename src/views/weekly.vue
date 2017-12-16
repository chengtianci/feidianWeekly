<template>
    <wrapper>
        <div class="weekly">
            <div class="weekly-list">
                <div class="weekly-section">
                    <h2 class="weekly-section-title">信息安全</h2>
                    <ul class="weekly-section-list">
                        <blogItem></blogItem>
                    </ul>
                </div>
                <div class="weekly-section">
                    <h2 class="weekly-section-title">推荐</h2>
                    <ul class="weekly-section-list">
                        <blogItem></blogItem>
                        <blogItem></blogItem>
                    </ul>
                </div>
                <div class="weekly-section">
                    <h2 class="weekly-section-title">前端开发</h2>
                    <ul class="weekly-section-list">
                        <blogItem></blogItem>
                        <blogItem></blogItem>
                    </ul>
                </div>
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
<style>
.weekly {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .weekly-list {
        width: 75%;
    }

    .weekly-section {
        width: 100%;
        margin-bottom: 50px;

        .weekly-section-title {
            height: 50px;
            line-height: 50px;
            font-size: #333;
            font-weight: 400;
            border-bottom: 1px dashed #666;
        }

    }
}
</style>

