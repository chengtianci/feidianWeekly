<style scoped>
    .admin-header{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        padding: 0;
        position: relative;

        .menu-icon{
            margin: 20px 20px 0;
            transition: all .3s;
        }
        
        .header-crumb {
            position: absolute;
            left: 60px;
            top: 0;
            
        }

        .top-menu {
            width: 150px;
            height: 64px;
            float: right;
        }
        .top-menu:after {
            height: 0;
            background: #fff;
        }
    }
</style>


<template>
    <Header class="admin-header">
        <Icon class="menu-icon" type="navicon-round" size="24"
                @click.native="toggle"></Icon>
        <div class="header-crumb">
            <Breadcrumb>
                <BreadcrumbItem to="/">
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Breadcrumb
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        <Menu class="top-menu" mode="horizontal" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    个人中心
                </template>
                <MenuItem name="1-1">个人中心</MenuItem>
                <MenuItem name="1-2">退出登录</MenuItem>
            </Submenu>
        </Menu>
    </Header>
</template>

<script>
export default {
    props: {
        toggle: Function
    },
    methods: {
        
    }
}
</script>
