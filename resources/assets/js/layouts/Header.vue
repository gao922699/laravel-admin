<template>
    <div class="header">
        <div class="left">
            <h1>XXX后台管理系统</h1>
        </div>
        <div class="right">
            <el-dropdown trigger="click">
                <el-button type="primary">
                    {{ this.$store.getters.getUser.name }}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <router-link to="/login">
                            <el-button type="primary">注销</el-button>
                        </router-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {}

</script>
<style scoped>
    h1 {
        font-size: 32px;
        line-height: 0.5;
        padding-left: 20px;
    }

    .header {
        height: 100%;
        width: 100%;
        background-color: rgb(67, 74, 80);
        color: #FFFFFF;
    }

    .right {
        float: right;
        margin: 10px;
    }

    .left {
        float: left;
    }
</style>

