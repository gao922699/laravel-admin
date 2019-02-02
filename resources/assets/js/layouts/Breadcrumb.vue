<template>
    <div>
        <div class="left"><h2>{{ pathName }}</h2></div>
        <div class="right">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">控制面板</el-breadcrumb-item>
                <el-breadcrumb-item v-if="parentPath" :to="{ path: parentPath.path }">{{ parentPath.name }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ pathName }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<style scoped>
    .left {
        float: left;
    }

    .right {
        float: right;
    }
</style>
<script>
    export default {
        props: {
            parentPath: Object,
            pathName: String
        },
        mounted() {
            // console.log(this.$route);
        }
    }
</script>