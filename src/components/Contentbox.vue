<template>
    <div class="grid-content bg-purple-light grid-contentbox">
        <div class="titi">
            <ul>
                <li
                    @click="goDetails(diaryData)"
                    v-for="(diaryData, index) in diaryDatas"
                    :key="index"
                >
                    <span class="title"
                        >{{ diaryData.title }} /
                        <span class="username">{{ diaryData.name }}</span></span
                    >
                    <span class="editTime">编辑于{{ diaryData.time }}</span>
                    <span class="content">{{ diaryData.detail }}</span>
                    <span class="tip"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ContentBox",
        data() {
            return {
                diaryDatas: [],
            };
        },
        methods: {
            goDetails(dairyObj) {
                this.$router.push({
                    name: "details",
                    params: {
                        dairyObj,
                    },
                });
            },
            async findAll() {
                const res = await axios.get("/dairy/selectDairy");
                this.diaryDatas = res.data.data.items.reverse();
            },
        },
        mounted() {
            this.findAll();
            this.$bus.$on("addDairy", (dairyObj) => {
                this.diaryDatas.unshift(dairyObj);
            });
            this.$bus.$on('deletedDairy', (id) => {
                this.diaryDatas = this.diaryDatas.filter((item) => {
                    return item.id!== id;
                });
            });
            this.$bus.$on('updatedDairy', (dairyObj) => {
                this.diaryDatas = this.diaryDatas.map((item) => {
                    if (item.id === dairyObj.id) {
                        return dairyObj;
                    }
                    return item;
                });
            })
        },
    };
</script>

<style scoped>
    /* 右侧边栏 日记内容部分 */
    /* .titi {
            height: 550px;
            overflow-y: auto;
        } */

    .grid-contentbox {
        margin-top: 10px;
        padding: 15px;
        background-color: rgba(225, 232, 237, 0.66);
        box-shadow: 0px 0px 2px 2px rgba(225, 232, 237, 0.66);
    }
    li {
        cursor: pointer;
        position: relative;
        list-style: none;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.66);
        border-radius: 4px;
        padding: 10px;
        padding-bottom: 15px;
        white-space: pre-wrap;
        word-break: break-all;
    }
    .title {
        font-size: 1rem;
        font-weight: 500;
        color: rgb(83, 99, 119);
        margin-bottom: 5px;
    }
    .username {
        font-size: 0.8rem;
        color: rgb(235, 165, 43);
        font-weight: bold;
    }

    li .content {
        cursor: pointer;
        padding: 5px;
        padding-left: 2px;
        color: rgb(81, 81, 81);
        font-size: 0.94rem;
        line-height: 1.25rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .editTime {
        font-size: 0.7rem;
        font-weight: normal;
        color: rgb(186, 180, 180);
        margin-bottom: 5px;
    }
    @media (min-width: 640px) {
        li {
            padding: 15px;
        }
    }
    .tip {
        width: 0px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid transparent;
        border-right: 5px solid rgba(255, 255, 255, 0.66);
        background-color: transparent;
        position: absolute;
        top: 20px;
        left: -9.5px;
    }
</style>