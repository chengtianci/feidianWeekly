<template>
    <Menu active-name="home" :open-names="['']" :theme="theme" width="auto" class="menu-item" 
    @on-select="selectMenu" @on-open-change="changeOpen">
        <MenuItem name="home">
            <Icon type="ios-paper"></Icon>
            后台首页
        </MenuItem>
        <Submenu name="classifyManager">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                分类管理
            </template>
            <MenuItem name="navList">导航管理</MenuItem>
            <MenuItem name="tagList">标签管理</MenuItem>
            <MenuItem name="contentList">目录管理</MenuItem>
        </Submenu>
        <Submenu name="blogManager">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                博客管理
            </template>
            <MenuItem name="blogList">博客列表</MenuItem>
            <MenuItem name="newBlog">发布博客</MenuItem>
        </Submenu>
        <Submenu name="weeklyManager">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                周刊管理
            </template>
            <MenuItem name="weeklyList">周刊列表</MenuItem>
            <MenuItem name="newWeekly">发布周刊</MenuItem>
            <MenuItem name="subscribeList">订阅列表</MenuItem>
        </Submenu>
        <Submenu name="systemAnalysis">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                系统分析
            </template>
            <MenuItem name="logList">系统日志</MenuItem>
            <MenuItem name="memberList">人员分析</MenuItem>
            
        </Submenu>
    </Menu>
</template>

<script>
    import { adminRoutes } from '@/routes';
    export default {
        data () {
            return {
                theme: 'dark'
            }
        },
        methods: {
            changeOpen(name) {
                console.log(name)
            },
            selectMenu(name) {
                console.log(name)
                // this.$router.push({ path: name })
            }
        }
    }
</script>
