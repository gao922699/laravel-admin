<template>
    <el-container style="height:100%">
        <el-header height="60px">
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <LeftSideBar></LeftSideBar>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer height="30px;">
                    <Footer></Footer>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>

</template>
<style scoped>
    header {
        padding: 0;
    }

    footer {
        padding: 0;
    }

    aside {
        background-color: rgb(84, 92, 100);
    }
</style>
<script>
    import LeftSideBar from '../layouts/LeftSideBar';
    import Header from '../layouts/Header';
    import Footer from '../layouts/Footer';

    export default {
        components: {
            LeftSideBar,
            Header,
            Footer,
        },
        data() {
            return {}
        },
    }
</script>