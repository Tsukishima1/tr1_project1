<template>
    <div id="login">
        <div class="loginbox">
            <p>登录</p>
            <div id="box">
                <span>用户名：</span>
                <el-input
                    v-model="username"
                    placeholder="请输入用户名"
                ></el-input>
            </div>
            <el-button @click="goHome" type="login">确认登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: "",
            };
        },
        methods: {
            goHome() {
                if (
                    this.username.trim() === "" ||
                    this.username.indexOf(" ") >= 0 ||
                    this.username.length>12
                ) {
                    this.$message.error("用户名必须为1-12位的有效字符哦！🤯");
                    this.username = "";
                    return;
                }
                // 把用户名存进本地存储里面
                localStorage.setItem("username", this.username);
                // 点击登录跳转到首页
                this.$notify({
                    title:'登录成功',
                    message:'欢迎使用TR共享日记本',
                    type:'success'
                });

                this.$router.replace("/home/homepage");
                this.username = "";
            },
        }
    };
</script>

<style>
    .loginbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(252, 252, 252, 0.926);
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -90%);
        padding: 15px;
        backdrop-filter: blur(2px);
        border-radius: 10px;
        box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.928);
    }
    .el-input {
        width: 230px;
        margin-bottom: 20px;
    }
    .loginbox .el-input__inner {
        background-color: transparent;
        border: none;
        border-radius: 0%;
        border-bottom: 2px solid rgb(211, 211, 211);
    }
    .loginbox .el-input__inner:focus {
        border-color: rgba(106, 106, 106, 0.724);
    }
    .loginbox p {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        font-size: 25px;
        font-weight: bold;
        color: rgb(87, 87, 87);
    }
    .loginbox span {
        color: rgb(87, 87, 87);
        font-weight: bold;
    }
    .el-button--login:hover {
        background-color: rgb(226, 232, 237);
        border-color: rgb(226, 232, 237);
    }
    @media (max-width: 640px) {
        .loginbox {
            width: 250px;
        }
        .el-input {
            width: 180px;
        }
        .el-message {
            width: 250px;
        }
    }
</style>