<template>
    <el-col :span="16" :md="15" class="rightnav">
        <InputBox/>
        <ContentBox/>
    </el-col>
</template>

<script>
    import InputBox from './InputBox.vue'
    import ContentBox from './Contentbox.vue'
    export default {
        name: "RightMain",
        components: {InputBox,ContentBox}
    };
</script>

<style scoped>
  /* 右侧边栏 输入框部分 */
</style>