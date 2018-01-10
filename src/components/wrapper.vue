<template>
    <div class="wrapper">
        <div class="wrapper-header">
            <fd-header></fd-header>
        </div>
        <div class="wrapper-container">
            <div class="container">
                <slot></slot>  
            </div>
        </div>
        <div class="wrapper-footer">
            <fd-footer></fd-footer>
        </div>
    </div>
</template>
<script>
import fdHeader from './header.vue';
import fdFooter from './footer.vue';

export default {
    components: {
        fdHeader,
        fdFooter
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import '../styles/base.css';
@import '../styles/iconfont.css';

.wrapper {
    .wrapper-container {
        width: 100%;
        
        .container {
            width: 65%;
            margin: 0 auto;
            padding-top: 40px;
            box-sizing: border-box;

        }
    }
}
</style>

