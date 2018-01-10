<template>
    <Menu active-name="1" :open-names="['1']" :theme="theme" width="auto" class="menu-item">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            后台首页
        </MenuItem>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                分类管理
            </template>
            <MenuItem name="2-1">导航管理</MenuItem>
            <MenuItem name="2-2">标签管理</MenuItem>
            <MenuItem name="2-3">目录管理</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                博客管理
            </template>
            <MenuItem name="3-1">博客列表</MenuItem>
            <MenuItem name="3-2">发布博客</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                周刊管理
            </template>
            <MenuItem name="4-1">周刊列表</MenuItem>
            <MenuItem name="4-2">发布周刊</MenuItem>
            <MenuItem name="4-3">订阅列表</MenuItem>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                系统分析
            </template>
            <MenuItem name="5-1">系统日志</MenuItem>
            <MenuItem name="5-2">人员分析</MenuItem>
            
        </Submenu>
    </Menu>
</template>

<script>
    export default {
        data () {
            return {
                theme: 'dark'
            }
        }
    }
</script>
