<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="1">
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span slot="title">管理日记</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "LeftNavMore",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        },
    };
</script>

<style scoped>
    .el-menu-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        border-radius: 4px;
    }
    .el-menu {
        background-color: transparent;
        border-right: 0px;
    }
    .is-active {
        color: whitesmoke;
    }
    .el-menu-item:focus, .el-menu-item:hover {
        background-color: rgba(245, 245, 245, 0.389);
    }
</style>