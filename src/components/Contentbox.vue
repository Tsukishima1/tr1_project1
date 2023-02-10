<template>
    <div class="grid-content bg-purple-light grid-contentbox">
      <ul>
        <li v-for="(diaryData, index) in diaryDatas" :key="index">
          <span class="date">{{diaryData.date}} / <span>{{diaryData.username}}</span> </span>
          <span class="content">{{diaryData.content}}</span>
          <span class="editTime">编辑于{{diaryData.editTime}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    import { nanoid } from "nanoid";
    export default {
        name:'ContentBox',
        data() {
          return {
            diaryDatas:[
              {id:"001", date:"2023-02-08", content:"test1", username:"Akaashi", editTime:"2023/2/8 10:32:23"},
              {id:"002", date:"2023-02-07", content:"test2", username:"Bokuto", editTime:"2023/2/7 15:23:12"},
              {id:"003", date:"2023-02-04", content:"test3", username:"Tsukishima", editTime:"2023/2/4 06:49:30"}
            ]
          }
        },
        mounted() {
          this.$bus.$on('finishEdit',(date, content, username,editTime)=>{
            this.diaryDatas.unshift({id:nanoid(),date:date,content:content,username:username,editTime})
          })
        },
    };
</script>

<style scoped>
  /* 右侧边栏 日记内容部分 */
  .grid-contentbox {
    margin-top: 10px;
    padding: 15px;
    background-color: rgba(225, 232, 237, 0.66);
    box-shadow: 0px 0px 2px 2px rgba(225, 232, 237, 0.66);
  }
  li {
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.66);
    border-radius: 4px;
    padding: 10px;
    padding-bottom: 20px;
    white-space: pre-wrap;
    overflow: auto;
    word-break:break-all;
  }
  li .date{
    color: rgb(230, 162, 60);
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  li .date span {
    color: rgb(119, 168, 187);
  }
  li .content {
    padding: 5px;
    color: rgb(36, 36, 36);
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .editTime {
    color: rgb(180, 180, 180);
    font-size: 0.7rem;
    position: absolute;
    right: 4px;
    bottom: 2px;
  }

</style>