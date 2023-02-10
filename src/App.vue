<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "App",
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: url("./assets/bgimg.jpg") no-repeat fixed center center;
        background-size: cover;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
            "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background-color: #d3dce65b;
        box-shadow: 0px 0px 2px 2px #d3dce65b;
    }
    .bg-purple-light {
        background: #e5e9f2ec;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    textarea {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
            "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background-color: #dcdddf;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(178, 185, 203);
        border-radius: 5px;
    }
</style>
