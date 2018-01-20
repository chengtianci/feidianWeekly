<style scoped>
    @import "../../styles/admin/admin-common.css";
    @import "../../styles/admin/admin.css";
</style>

<template>
    <Layout id="admin">
        <Sider ref="side1" class="sidebar-menu" hide-trigger collapsible
         :collapsed-width="0" v-model="isCollapsed">
            <div class="logo-con">
                <img src="https://iview.github.io/iview-admin/dist/9f35d093728efc834cf6f8b15fd17eea.jpg" style="">
            </div>
            <adminMenu></adminMenu>
        </Sider>
        <Layout :class="adminmainClassed">
            <adminHeader :toggle="toggleSider"></adminHeader>
            <Content class="single-page">
                <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
import adminMenu from '@/components/admin/adminMenu.vue';
import adminHeader from '@/components/admin/adminHeader.vue';

export default {
    components: {
        adminMenu,
        adminHeader
    },
    data () {
        return {
            isCollapsed: false
        }
    },
    computed: {
        adminmainClassed() {
            return [
                'admin-main',
                this.isCollapsed ? 'expend-main' : ''
            ]
        }
    },
    methods: {
        toggleSider () {
            this.$refs.side1.toggleCollapse();
        }
    }
}
</script>


