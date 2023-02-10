<template>
    <div id="home">
        <!-- 头部 -->
        <Header />
        <!-- 主体 -->
        <el-row type="flex" justify="center">
            <!-- 左侧边栏 -->
            <LeftNav />
            <!-- 右侧内容主体 -->
            <RightMain />
        </el-row>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/Header.vue";
    import LeftNav from "../components/LeftNav.vue";
    import RightMain from "../components/RightMain.vue";
    import Footer from '../components/Footer.vue'
    export default {
        name: "Home",
        components: { Header, LeftNav, RightMain, Footer },
    };
</script>

<style>
</style>