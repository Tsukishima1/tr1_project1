<template>
    <div class="grid-content bg-purple-light grid-contentbox">
      <ul>
        <li v-for="(diaryData, index) in diaryDatas" :key="index">
          <span class="date">{{diaryData.date}} / <span>{{diaryData.username}}</span> </span>
          <span class="content">{{diaryData.content}}</span>
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
              {id:"001", date:"2023-02-08", content:"test1", username:"Akaashi"},
              {id:"002", date:"2023-02-07", content:"test2", username:"Bokuto"},
              {id:"003", date:"2023-02-04", content:"test3", username:"Tsukishima"}
            ]
          }
        },
        mounted() {
          this.$bus.$on('finishEdit',(date, content, username)=>{
            this.diaryDatas.unshift({id:nanoid(),date:date,content:content,username:username})
          })
        },
    };
</script>

<style scoped>
  /* 右侧边栏 日记内容部分 */
  .grid-contentbox {
    margin-top: 10px;
    padding: 15px;
  }
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.66);
    border-radius: 4px;
    padding: 10px;
    white-space: break-spaces;
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
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

</style>