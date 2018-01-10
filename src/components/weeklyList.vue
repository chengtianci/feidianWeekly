<template>
    <div class="weekly-list-nav">
        <h2 class="title">周刊列表</h2>
        <ul>
            <li v-for="i in [1,2,3,4,5,6,7,8,9]" class="weekly-item" :key="i">
                <router-link to="/weekly">
                    <span class="weekly-item-name">沸点周刊第1期</span>
                    <span class="weekly-item-date">2017-12-12</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.weekly-list-nav {
    width: 20%;
    height: 500px;
    background-color: #ffffff;
    float: left;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 30px;

    .title {
        display: flex;
        flex: column;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 10px;
        color: #333;
        font-weight: 400;
        padding-bottom: 10px;
        border-bottom: 1px solid #999;
    }

    ul {
        display: flex;
        flex-direction: column;
    }

    ul li {
        width: 100%;
        margin-top: 15px;
        
        a {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .weekly-item-name {
            font-size: 0.95rem;
            color: #333;
        }
        .weekly-item-date {
            font-size: 0.9rem;
            color: #666;
        }
    }

}
</style>


