<template>
    <Breadcrumb>
        <BreadcrumbItem v-for="crumb in crumbs" :key="crumb">
            {{ crumb }}
        </BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
import { adminRoutes } from '@/routes';
export default {
    data() {
        return {

        }
    },
    computed: {
        crumbs: function() {
            const crumbs = [];
            const curName = this.$route.name;
            adminRoutes.forEach(function(item) {
                if(item.children) {
                    item.children.forEach(function(sub) {
                        if(sub.name == curName) {
                            crumbs.push(item.title);
                            crumbs.push(sub.title);
                        }
                    })
                }else {
                    if(item.name == curName) {
                        crumbs.push(item.title)
                    }
                }
            });
            return crumbs;
        }
    },
    mounted() {
        console.log(this.$route)
    }

}
</script>

