<template>
    <div class="grid-content bg-purple-light grid-iptbox">
        <div id="inputbox">
            <el-input
                class="ipttitle"
                v-model.lazy="title"
                placeholder="请填写日记标题"
            ></el-input>
            <hr />
            <el-input
                v-model.lazy="input"
                placeholder="请输入日记内容ヾ(≧▽≦*)o"
                type="textarea"
                autosize
                class="iptarea"
                show-word-limit
            ></el-input>
            <div class="buttonbox">
                <span>字数统计: {{ input.length }}</span>
                <el-button
                    v-if="!loading"
                    round
                    size="medium"
                    id="finish"
                    @click="finishEdit()"
                    >完成编辑</el-button
                >
                <el-button
                    v-if="loading"
                    round
                    size="medium"
                    id="finish"
                    icon="el-icon-loading"
                    >发送中</el-button
                >
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                title: "",
                input: "",
                username: "",
                loading: false,
            };
        },
        methods: {
            finishEdit() {
                if (this.title.trim() === "") {
                    this.open1();
                    return;
                } else if (this.input.trim() === "") {
                    this.open2();
                    return;
                }
                this.loading = true;
                axios.post(
                    "/dairy/addDairy",
                    {},
                    {
                        params: {
                            name: this.username,
                            title: this.title,
                            detail: this.input,
                        },
                    }
                ).catch((err)=>{
                    this.$message.error(err.message);
                });
                const timer = setInterval(() => {
                    axios.get("/dairy/selectDairy")
                        .then((res) => {
                            this.$bus.$emit('addDairy', res.data.data.items.reverse()[0])
                        })
                        .catch ((error)=>{
                            this.$message.error(error.message)
                        });
                    this.loading = false;
                    clearInterval(timer);
                    this.title = "";
                    this.input = "";
                }, 500);
            },
            open1() {
                this.$message.error("你还没有填写标题诶！🤕");
            },
            open2() {
                this.$message.error("你还没有填写内容噢！🤒");
            },
        },
        created() {
            this.$bus.$on("getUsername", (username) => {
                this.username = username;
            });
        },
    };
</script>

<style scoped>
    #inputbox {
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    hr {
        margin: 8px 5px;
    }
    .buttonbox {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .buttonbox span {
        font-size: 0.8rem;
        margin-right: 10px;
        color: rgb(162, 168, 176);
    }
    .buttonbox .el-button {
        background-color: rgb(148, 162, 192);
        color: rgb(243, 241, 241);
    }
    .buttonbox .el-button:hover {
        background-color: rgb(169, 181, 206);
    }
    #finish {
        font-weight: bold;
    }
    @media (max-width: 640px) {
        .el-date-editor {
            width: 100%;
        }
    }
    .ipttitle {
        margin-bottom: 0px;
    }
</style>