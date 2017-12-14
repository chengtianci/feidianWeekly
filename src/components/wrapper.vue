<template>
    <div class="wrapper">
        <div class="wrapper-header">
            <fd-header></fd-header>
        </div>
        <div class="wrapper-container">
            <slot></slot>  
        </div>
        <div class="wrapper-footer">
            <fd-footer></fd-footer>
        </div>
    </div>
</template>
<script>
import fdHeader from './header.vue';
import fdFooter from './footer.vue';
import '../styles/base.scss';
import '../styles/iconfont.css';

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
