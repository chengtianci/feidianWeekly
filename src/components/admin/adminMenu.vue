<template>
    <Menu ref="menu" :active-name="activeName" :open-names="openNames" 
    :theme="config.theme" :accordion="config.accordion" @on-select="selectMenu"
    width="auto" class="menu-item">
        <template v-for="route in adminRoutes">
            <div v-if="!route.children" :key="route.name">
                <MenuItem :name="route.name">
                    <Icon :type="route.icon"></Icon>
                    {{ route.title }}
                </MenuItem>
            </div>
            <div v-else :key="route.name">
                <Submenu :name="route.name">
                    <template slot="title">
                        <Icon :type="route.icon"></Icon>
                        {{ route.title }}
                    </template>
                    <MenuItem v-for="sub in route.children" :name="sub.name" :key="sub.name">{{ sub.title }}</MenuItem>
                </Submenu>
            </div>
        </template>
    </Menu>
</template>

<script>
    import { adminRoutes } from '@/routes';
    export default {
        data () {
            return {
                config: {
                    accordion: true,
                    theme: 'dark',
                },
                adminRoutes: adminRoutes,
                activeName: 'home',
                openNames: []
            }
        },
        methods: {
            selectMenu(name) {
                this.$router.push({ name: name })
            },
        },
        mounted: function() {
            // console.log(this.$route)
        }
    }
</script>
