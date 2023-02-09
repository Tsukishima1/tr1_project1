<template>
  <div id="app">
    <!-- 头部 -->
    <Header/>
    <!-- 主体 -->
    <el-row type="flex" justify="center">
      <!-- 左侧边栏 -->
      <LeftNav/>
      <!-- 右侧内容主体 -->
      <RightMain/>
    </el-row>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNav from './components/LeftNav.vue'
import RightMain from './components/RightMain.vue'
export default {
    name: 'App',
    components: {Header,LeftNav,RightMain},
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: url('./assets/bgimg.jpg') no-repeat fixed center center;
    background-size: cover;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
	  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
