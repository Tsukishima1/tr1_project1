<template>
    <div class="grid-content bg-purple-light grid-contentbox">
      <ul>
        <li v-for="(diaryData, index) in diaryDatas" :key="index">
          <span class="date">{{diaryData.date}} / <span class="username">{{diaryData.username}}</span> </span>
          <span class="editTime">编辑于{{diaryData.editTime}}</span>
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
              {id:"001", date:"2023-02-08", content:"生活的真相就是处处是得失。“文王拘而演《周易》；仲尼厄而作《春秋》；屈原放逐，乃赋《离骚》。”这是“塞翁失马，焉知非福”般的得与失，然人生波澜起伏，今日之蜜糖，可能是他日之砒霜。闯王李自成挺进北京城时，春风得意，却在短短42天后，功败垂成。明朝至清朝中期，中国断续实行海禁政策，自诩天朝上国，这确实在一定程度上抵御了外敌侵略，却也让中国故步自封，在经济、政治、科技等方面，慢慢落后于他国，为中国近代百年的屈辱史埋下祸根。当代中国，已经跻身于世界强国之列，如今的“得”是千千万万的先辈用鲜血、汗水换来的，切不可居安思逸。", username:"Akaashi", editTime:"2023/2/8 10:32:23"},
              {id:"002", date:"2023-02-07", content:"得与失既不是人生的起点，也不是人生的终点，一切得失不过是人生必经之过程。我们在高考前，常听人说高考是人生的转折点，它是十年寒窗的终点，也是迈入更高学府的起点，可是谁又能说，高考就是人生的起点或终点呢？漫漫一生中，我们会面临无数抉择，一个抉择是一段故事的结局，也是另一段故事的开篇。起点也好，终点也罢，都是人生中的一段过程，人生的价值是在得与失的不断转化中才实现的。如果非要为生命选一个终点，我觉得只有死亡，但细究起来，死亡也不是生命的终点，有的人死了，他还活着，就像屈原，两千多年了，他“虽九死其犹未悔”的爱国情怀滋养了一代又一代中华儿女——而这，就是他生命的延续。", username:"Bokuto", editTime:"2023/2/7 15:23:12"},
              {id:"003", date:"2023-02-04", content:"“往者不可谏，来者犹可追。”不汲汲于得，不戚戚于失，因为无论得失，皆是过程。在过程中行走，在过程中反思，在过程中突破，才是人生的真谛。", username:"Tsukishima", editTime:"2023/2/4 06:49:30"}
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
    padding-bottom: 15px;
    white-space: pre-wrap;
    overflow: auto;
    word-break:break-all;
  }
  li .date{
    color: rgb(230, 162, 60);
    font-weight: bold;
    font-size: 0.9rem;

  }
  li .date .username {
    color: rgb(119, 168, 187);
  }
  li .content {
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
  @media (min-width:640px) {
    li {
      padding: 15px
    }
  }

</style>