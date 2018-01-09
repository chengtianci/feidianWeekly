<template>
	<div id="admin">
        <left_menu></left_menu>
        <top_menu></top_menu>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


import left_menu from '@/components/admin/left_menu.vue';
import top_menu from '@/components/admin/top_menu.vue';

export default {
    components: {
        left_menu,
        top_menu
    },
    data() {
        return {

        }
    }
}
</script>

<style>
#admin {
    width: 100%;
    height: 100%;
}
</style>

