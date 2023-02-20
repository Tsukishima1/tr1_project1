<template>
    <div class="search grid-content bg-purple-light grid-iptbox">
        <!-- <img src="../assets/search.png" alt="" style="width: 20px" /> -->
        <el-form ref="form" :model="form" label-width="80px" class="formbox">
            <el-form-item label="查询类型" class="type">
                <el-select
                    v-model="form.searchType"
                    placeholder="请选择查询类型"
                >
                    <el-option label="作者" value="1"></el-option>
                    <el-option label="标题" value="2"></el-option>
                    <el-option label="日记内容" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="查询内容" class="content">
                <el-input
                    v-model.lazy="form.searchContent"
                    placeholder="请输入查询内容"
                />
            </el-form-item>
            <el-button @click="searchsth">点击查询✨</el-button>
        </el-form>
        <!-- <div class="toSearch">
            <el-button>点击查询</el-button>
        </div> -->
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Search",
        data() {
            return {
                form: {
                    searchType: "",
                    searchContent: "",
                },
            };
        },
        methods: {
            async searchsth() {
                if (!this.form.searchType || !this.form.searchContent.trim()) {
                    this.$message.error('查询条件还没有填完哦！')
                    return;
                }
                try {
                    const res = await axios.post(
                        "/dairy/selectDairyByCondition",
                        {},
                        {
                            params: {
                                type: this.form.searchType,
                                condition: this.form.searchContent.trim(),
                            },
                        }
                    );
                    this.$bus.$emit("searchsth", res.data.data.items);
                } catch (error) {
                    this.$message.error(error.message)
                }
            },
        },
    };
</script>

<style scoped>
    .toSearch {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .el-button {
        margin-left: 10px;
        font-weight: bold;
        color: white;
        background-color: rgb(148, 162, 192);
    }
    .el-button:hover {
        background: rgb(169, 181, 206);
    }

    .el-form-item {
        margin-bottom: 0px;
        height: 40px;
    }
    .search {
        padding: 15px;
    }
    .formbox {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
    }
    @media (max-width: 640px) {
        .formbox {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .content {
            width: 100%;
        }
        .content .el-input {
            width: 100%;
        }
        .type {
            width: 100%;
        }
    }
    @media (max-width: 1211px) {
        .el-button {
            margin-top: 20px;
        }
    }
    @media (max-width: 1040px) {
        .formbox {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .content {
            margin-top: 10px;
        }
    }
    @media (max-width: 342px) {
        .formbox .el-select {
            width: 100%;
            display: flex;
        }
    }
</style>