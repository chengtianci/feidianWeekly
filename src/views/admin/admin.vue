<style scoped>
    #admin {
        width: 100%;
        height: 100%;
        background: #f5f7f9;
        position: relative;
        overflow: auto;
    }

    .sidebar-menu {
        height: 100%;
        background: rgb(73, 80, 96);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;

        .menu-item span{
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i{
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }

        .collapsed-menu span{
            width: 0px;
            transition: width .2s ease;
        }
        .collapsed-menu i{
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }
    }
    
    .admin-main {
        position: relative;
        left: 0px;
        top: 0;
        padding-left: 200px;
        transition: padding .2s;

        .admin-header{
            background: #fff;
            box-shadow: 0 1px 1px rgba(0,0,0,.1);
            padding: 0;

            .menu-icon{
                margin: 20px 20px 0;
                transition: all .3s;
            }
            .rotate-icon{
                transform: rotate(-90deg);
            }
        }
        .single-page {
            margin: 20px;
            background: #fff;
            height: calc(100% - 64px);
            overflow: auto;
        }
    }
    .expend-main {
        padding-left: 78px;
    }

    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    } 
</style>


<template>
    <Layout id="admin">
        <Sider ref="side1" class="sidebar-menu" hide-trigger collapsible
         :collapsed-width="78" v-model="isCollapsed">
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                <MenuItem name="1-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>Option 1</span>
                </MenuItem>
                <MenuItem name="1-2">
                    <Icon type="search"></Icon>
                    <span>Option 2</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="settings"></Icon>
                    <span>Option 3</span>
                </MenuItem>
            </Menu>
        </Sider>
        <Layout :class="adminmainClassed">
            <Header class="admin-header">
                <Icon :class="rotateIcon" type="navicon-round" size="24"
                        @click.native="collapsedSider"></Icon>
            </Header>
            <Content class="single-page">
                <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
</template>

<script>


import leftMenu from '@/components/admin/leftMenu.vue';
import topMenu from '@/components/admin/topMenu.vue';

export default {
    components: {
        leftMenu,
        topMenu
    },
    data () {
        return {
            isCollapsed: false
        }
    },
    computed: {
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        },
        adminmainClassed() {
            return [
                'admin-main',
                this.isCollapsed ? 'expend-main' : ''
            ]
        }
    },
    methods: {
        collapsedSider () {
            this.$refs.side1.toggleCollapse();
        }
    }
}
</script>


