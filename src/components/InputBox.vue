<template>
    <div class="grid-content bg-purple-light grid-iptbox">
        <div id="inputbox">
            <div class="block">
                <el-date-picker
                    v-model="date"
                    type="date"
                    placeholder="选择记录的日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                    :clearable="false"
                    :picker-options="pickerOptions"
                >
                </el-date-picker>
            </div>
            <hr />
            <el-input
                v-model="input"
                placeholder="请输入日记内容ヾ(≧▽≦*)o"
                type="textarea"
                autosize
                class="iptarea"
                show-word-limit
            ></el-input>
            <div class="buttonbox">
                <span>字数统计: {{ input.length }}</span>
                <el-button
                    round
                    size="medium"
                    id="finish"
                    type="warning"
                    @click="finishEdit()"
                    >完成编辑</el-button
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: "",
                date: "",
                username: "",
                time: "",
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now() - 8.64e6;
                    },
                },
            };
        },
        methods: {
            finishEdit() {
                if (this.date === "") {
                    this.open1();
                    return;
                } else if (this.input === "") {
                    this.open2();
                    return;
                }
                const x = this.$moment().format("YYYY-MM-DD hh:mm:ss");
                this.$bus.$emit(
                    "finishEdit",
                    this.date,
                    this.input,
                    this.username,
                    x
                );
                this.date = "";
                this.input = "";
            },
            open1() {
                this.$message.error("你还没有选择日期诶！🤕");
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
    #finish {
        font-weight: bold;
    }
    @media (max-width: 640px) {
        .el-date-editor {
            width: 100%;
        }
    }
    .block {
        height: 45px;
    }
</style>