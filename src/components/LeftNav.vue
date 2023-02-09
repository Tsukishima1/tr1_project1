<template>
    <el-col :span="6" :md="5" class="leftnav">
        <div class="grid-content bg-purple">
            <!-- 用户信息部分 -->
            <div class="user-container">
                <!-- 头像图片地址是固定的 -->
                <img src="../assets/fufu.jpg" />
                <h2>{{ username }}</h2>
            </div>
        </div>
    </el-col>
</template>

<script>
    export default {
        name: "LeftNav",
        data() {
            return {
              username:'Puha_0618',
            };
        },
        methods: {
          send() {
            this.$bus.$emit('getUsername',this.username)
            console.log('触发了事件');
          }
        },
        mounted() {
          this.send();
        },
    };
</script>

<style scoped>
    /* 左侧边栏 */
    .leftnav {
        margin-right: 15px;
    }
    /* 左侧边栏 用户信息部分 */
    .user-container {
        padding: 20px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .user-container h2 {
        color: #dadbde;
    }
    .user-container img {
        width: 4rem;
        border-radius: 50%;
        border: 3px solid rgb(215, 222, 232);
    }
    @media (max-width: 640px) {
        .user-container h2 {
            font-size: 1rem;
        }
        .user-container img {
            width: 3rem;
        }
    }
</style>