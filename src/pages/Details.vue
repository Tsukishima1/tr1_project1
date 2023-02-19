<template>
    <el-col id="details" :span="14" :md="15">
        <el-page-header @back="goBack" content=""></el-page-header>
        <div class="container">
            <!-- {{this.$route.params.id}} -->
            <span class="title">{{dataObj.title}}</span>
            <span class="author">{{dataObj.name}}</span>
            <span class="content">{{dataObj.detail}}</span>
            <span class="editTime">{{dataObj.time}}</span>
        </div>
        <div class="like">
            <transition :name="like?'zoom':''" mode="out-in">
                <img v-if="!like" src="../assets/like.png" alt="" @click="xihuan" key="like">
                <img v-if="like" src="../assets/liked.png" alt="" @click="xihuan" key="liked">            
            </transition>
        </div>
    </el-col>
</template>

<script>
    export default {
        name: "Details",
        data() {
            return {
                like:false,
                dataObj: {
                    title: "",
                    name: "",
                    detail: "",
                    time: ""
                }
            }
        },
        methods: {
            goBack() {
                this.$router.back();
            },
            xihuan() {
                this.like = !this.like;
            }
        },
        deactivated(){
            this.like = false;
        },
        activated() {
            if (this.$route.params.dairyObj) {
                localStorage.setItem("dairyObj", JSON.stringify(this.$route.params.dairyObj));
            }
            this.dataObj = JSON.parse(localStorage.getItem("dairyObj"));
            window.scrollTo(0,375);
        },
    };
</script>

<style scoped>
    .editTime {
        margin-top: 10px;
        font-size: 0.4rem;
        color: rgb(154, 154, 154);
    }

    .zoom-enter-active, .zoom-leave-active {
        transition: all .15s cubic-bezier(0.42, 0, 0.34, 1.55);
    }
    .zoom-enter, .zoom-leave-to {
        transform: scale(0);
    }
    .zoom-enter-to, .zoom-leave {
        transform: scale(1);
    }

    .like img {
        width: 25px;
        cursor: pointer;
    }
    .like {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: absolute;
        top: 15px;
        right: 30px;
    }

    #details {
        height: 100%;
        position: relative;
        padding: 15px;
        background: rgba(218, 223, 228, 0.732);
        border-radius: 5px;
    }
    .el-page-header {
        margin-bottom: 15px;
    }
    .container {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        cursor: default;
    }
    .author {
        display: flex;
        justify-content: center;
        width: 100%;
        font-weight: bold;
        font-size: 0.9rem;
        color: rgb(143, 142, 142);
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(167, 181, 189, 0.521);
    }
    .title {
        font-size: 1.3rem;
        color: rgb(76, 89, 107);
        font-weight: 600;
    }
    .content {
        font-size: 1.15rem;
        line-height: 1.6rem;
        font-weight: 300;
        font-family: '华文中宋';
        color: rgb(36, 36, 36);
    }
    
    @media (max-width:640px) {
    #details {
        width: 85%;
    }
 }
</style>