<template>
    <div class="display grid-content bg-purple-light grid-iptbox">
        <el-row :gutter="20" class="datalist">
            <el-col
                class="data"
                :span="12"
                v-for="(data, index) in displaydata"
                :key="index"
                ><div class="grid-content bg-purple" @click="toDetails(data)">
                    <span class="title">{{ data.title }}</span>
                    <span class="name">{{ data.name }}</span>
                    <span class="detail">{{ data.detail }}</span>
                </div></el-col
            >
        </el-row>

        <el-empty
            v-if="displaydata.length === 0"
            description="查询结果为空"
        ></el-empty>
    </div>
</template>

<script>
    export default {
        name: "Display",
        data() {
            return {
                displaydata: [],
            };
        },
        methods: {
            toDetails(data) {
                localStorage.setItem("dairyObj", JSON.stringify(data));
                this.$router.push({
                    name: "details",
                    params: {
                        data,
                    },
                });
            },
        },
        mounted() {
            this.$bus.$on("searchsth", (data) => {
                this.displaydata = data;
            });
            this.$bus.$on("deletedDairy", (id) => {
                this.displaydata = this.displaydata.filter((item) => {
                    return item.id !== id;
                });
            });
            this.$bus.$on("updatedDairy", (dairyObj) => {
                this.displaydata = this.displaydata.map((item) => {
                    if (item.id === dairyObj.id) {
                        return dairyObj;
                    }
                    return item;
                });
            });
        },
    };
</script>

<style scoped>
    .bg-purple-light {
        background: #e5e9f294;
    }
    .grid-content.bg-purple {
        border-radius: 8px;
    }
    .title {
        font-size: 1.2rem;
        font-weight: bold;
        color: rgb(148, 162, 192);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .detail {
        padding-top: 3px;
        font-size: 0.8rem;
        color: rgb(139, 142, 144);
    }
    .name {
        width: 100%;
        border-bottom: 1px solid rgb(220, 215, 215);
        font-size: 0.9rem;
        color: rgb(122, 126, 146);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 4px;
    }

    .data {
        margin-bottom: 10px;
        cursor: pointer;
    }
    .el-row {
        padding: 5px;
        margin-bottom: 0px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #efeff2;
        height: 120px;
        margin-bottom: 10px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        padding: 12px;
        display: flex;
        flex-direction: column;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .detail {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .display {
        margin-top: 20px;
        padding: 10px;
        padding-top: 20px;
        padding-bottom: 0px;
        margin-bottom: 0px;
        box-shadow: 0px 0px 5px rgb(205, 212, 229);
    }
</style>