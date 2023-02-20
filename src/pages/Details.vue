<template>
    <el-col id="details" :span="14" :md="15">
        <el-page-header @back="goBack" content=""></el-page-header>
        <div class="container">
            <!-- {{this.$route.params.id}} -->
            <span class="title" v-if="!reedit">{{ dataObj.title }}</span>
            <el-input
                class="retitle"
                v-model.lazy="dataObj.title"
                v-if="reedit"
            ></el-input>

            <span class="author" v-if="!reedit">{{ dataObj.name }}</span>
            <el-input
                class="rename"
                v-model.lazy="dataObj.name"
                v-if="reedit"
            ></el-input>

            <span class="content" v-if="!reedit">{{ dataObj.detail }}</span>
            <el-input
                class="redetail"
                v-model.lazy="dataObj.detail"
                v-if="reedit"
                type="textarea"
                autosize=""
            ></el-input>

            <span class="editTime">{{ dataObj.time }}</span>
        </div>
        <div class="button">
            <transition :name="like ? 'zoom' : ''" mode="out-in">
                <img
                    v-if="!like"
                    src="../assets/like.png"
                    title="绝赞"
                    @click="xihuan"
                    key="like"
                />
                <img
                    v-if="like"
                    src="../assets/liked.png"
                    title="算了"
                    @click="xihuan"
                    key="liked"
                />
            </transition>

            <img
                @click="deletesth"
                class="delete"
                src="../assets/delete.png"
                title="删除"
            />
            <img
                v-if="!reedit"
                @click="updatesth"
                src="../assets/reedit.png"
                title="重新编辑"
            />
            <el-button
                class="finishbtn"
                v-if="reedit"
                size="small"
                @click="finishReedit"
                >编辑完成👌</el-button
            >
        </div>
    </el-col>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Details",
        data() {
            return {
                like: false,
                dataObj: {
                    id: "",
                    title: "",
                    name: "",
                    detail: "",
                    time: "",
                },
                reedit: false,
            };
        },
        methods: {
            goBack() {
                this.$router.back();
            },
            xihuan() {
                this.like = !this.like;
            },
            deletesth() {
                this.$confirm("你确定要删除该篇日记吗？", "提示", {
                    confirmButtonText: "是的",
                    cancelButtonText: "再等等",
                    type: "warning",
                })
                    .then(() => {
                        console.log(this.dataObj.id);
                        axios
                            .delete("/dairy/deleteDairy", {
                                params: {
                                    id: this.dataObj.id,
                                },
                            })
                            .then(() => {
                                this.$message({
                                    message: "删除成功",
                                    type: "success",
                                });
                                this.$router.back();
                                this.$bus.$emit("deletedDairy", this.dataObj.id);
                            });
                    })
                    .catch(() => {});
            },
            updatesth() {
                this.reedit = !this.reedit;
            },
            finishReedit() {
                this.reedit = !this.reedit;
                axios
                    .post(
                        "/dairy/updateDairy",
                        {},
                        {
                            params: {
                                id: this.dataObj.id,
                                title: this.dataObj.title,
                                name: this.dataObj.name,
                                detail: this.dataObj.detail,
                            },
                        }
                    )
                    .then(() => {
                        this.$message({
                            message: "重新编辑成功",
                            type: "success",
                        });
                        this.$bus.$emit("updatedDairy", this.dataObj);
                        localStorage.setItem(
                            "dairyObj",
                            JSON.stringify(this.dataObj)
                        );
                    });
            },
        },
        deactivated() {
            this.like = false;
            this.reedit = false;
        },
        activated() {
            if (this.$route.params.dairyObj) {
                localStorage.setItem(
                    "dairyObj",
                    JSON.stringify(this.$route.params.dairyObj)
                );
            }
            this.dataObj = JSON.parse(localStorage.getItem("dairyObj"));
            window.scrollTo(0, 375);
        },
    };
</script>

<style>
    .finishbtn {
        font-weight: bold;
        border-color: rgb(165, 168, 195);
        background-color: rgb(134, 147, 174);
        color: white;
    }
    .finishbtn:hover {
        color: white;
        border-color: rgb(161, 166, 185);
        background-color: rgb(160, 169, 192);
    }

    #details .retitle .el-input__inner {
        text-align: center;
        background-color: rgba(216, 219, 231, 0.321);
        border-color: transparent;
        font-weight: bold;
        font-size: 1.3rem;
        color: rgb(96, 110, 131);
    }
    .retitle {
        margin-bottom: 3px;
    }

    #details .rename .el-input__inner {
        text-align: center;
        background-color: rgba(239, 241, 247, 0.372);
        border-color: transparent;
        font-weight: bold;
        font-size: 0.9rem;
        color: rgb(157, 157, 157);
    }

    #details .redetail .el-textarea__inner {
        background-color: rgba(247, 243, 243, 0.374);
        font-family: "华文中宋";
        font-size: 1.2rem;
        color: rgb(72, 72, 72);
        border-color: transparent;
        text-align: center;
    }

    #details .button .delete {
        width: 23px;
    }

    #details .editTime {
        margin-top: 10px;
        font-size: 0.4rem;
        color: rgb(154, 154, 154);
    }

    .zoom-enter-active,
    .zoom-leave-active {
        transition: all 0.15s cubic-bezier(0.42, 0, 0.34, 1.55);
    }
    .zoom-enter,
    .zoom-leave-to {
        transform: scale(0);
    }
    .zoom-enter-to,
    .zoom-leave {
        transform: scale(1);
    }

    #details .button img {
        width: 25px;
        cursor: pointer;
    }
    #details .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: absolute;
        top: 15px;
        right: 25px;
    }

    #details {
        height: 100%;
        position: relative;
        padding: 15px;
        background: rgba(218, 223, 228, 0.732);
        border-radius: 5px;
    }
    #details .el-page-header {
        margin-bottom: 15px;
    }
    #details .container {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        cursor: default;
    }
    #details .author {
        display: flex;
        justify-content: center;
        width: 100%;
        font-weight: bold;
        font-size: 0.9rem;
        color: rgb(143, 142, 142);
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(210, 222, 228, 0.638);
    }
    #details .title {
        font-size: 1.3rem;
        color: rgb(76, 89, 107);
        font-weight: 600;
    }
    #details .content {
        font-size: 1.15rem;
        line-height: 1.6rem;
        font-weight: 300;
        font-family: "华文中宋";
        color: rgb(36, 36, 36);
        padding: 0 15px;
        white-space: pre-wrap;
        word-break: break-all;
    }

    @media (max-width: 640px) {
        #details {
            width: 85%;
        }
    }
</style>