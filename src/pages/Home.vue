<template>
    <div id="home">
        <!-- 头部 -->
        <Header />
        <!-- 主体 -->
        <el-row type="flex" justify="center" class="main">
            <!-- 左侧边栏 -->
            <LeftNav class="leftnav"/>
            <!-- 右侧内容主体 -->
            <!-- <RightMain/> -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>       
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
    @media (max-width: 640px) {
        .main {
            flex-direction: column;
            align-items: center;
        }
        .leftnav {
            margin-bottom: 20px;
        }
        .el-message-box {
            width: 300px;
        }
    }
</style>