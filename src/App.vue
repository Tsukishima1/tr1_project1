<template>
    <div id="app">
        <router-view></router-view>
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
        display:none;
    }
    .el-popup-parent--hidden {
        padding-right: 0px;
    }
    .el-message-box__btns .el-button--primary {
        font-weight: bold;
        background-color:#9fabbd;
        border-color: #dcdddf
    }

    .el-message-box__btns .el-button--primary:hover {
        background-color: #bbc3cf;
    }
</style>
