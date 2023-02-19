<template>
    <el-col :span="14" :md="15" class="rightnav2">
        <Search/>
        <Display/>
    </el-col>
</template>

<script>
import Search from '../components/Search.vue'
import Display from '../components/Display.vue'
export default {
    name:'RightMain2',
    components: {Search,Display},
}
</script>

<style scoped>
 @media (max-width:640px) {
    .rightnav2 {
        width: 85%;
    }
 }
</style>