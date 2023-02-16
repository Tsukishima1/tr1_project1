<template>
    <el-col :span="14" :md="15" class="rightnav">
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

<style>
 @media (max-width:640px) {
    .rightnav {
        width: 85%;
    }
 }
</style>