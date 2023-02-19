<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                :default-active='$route.path'
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="/home/homepage" @click="toHomepage">
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/home/manage" @click="toManage">
                    <span slot="title">管理日记</span>
                </el-menu-item>
                <el-menu-item index="" @click="toLogin">
                    <span slot="title">退出登录</span>
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
            toHomepage() {
                if (this.$route.fullPath !== "/home/homepage")
                    this.$router.push("/home/homepage");
            },
            toManage() {
                if (this.$route.fullPath !== "home/manage")
                    this.$router.push("/home/manage");
            },
            toLogin() {
                this.$confirm("你确定要退出当前账号吗？", "提示", {
                    confirmButtonText: "是的",
                    cancelButtonText: "再等等",
                    type: "warning",
                })
                    .then(() => {
                        this.$router.replace("/login")
                        this.$message({
                            type: "success",
                            message: "登出成功，请重新登录",
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消退出"
                        })
                    });
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
        font-size: 1rem;
    }
    .el-menu {
        background-color: transparent;
        border-right: 0px;
    }
    .is-active {
        color: whitesmoke;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
        background-color: rgba(245, 245, 245, 0.389);
    }
    @media (max-width: 640px) {
        .el-menu {
            display: flex;
        }
    }
</style>