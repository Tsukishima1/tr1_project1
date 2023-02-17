<template>
    <el-col id="details" :span="14" :md="15">
        <el-page-header @back="goBack" content="日记内容"></el-page-header>
        <div class="container">
            <!-- {{this.$route.params.id}} -->
            <span class="date">日期：2023-2-17</span>
            <span class="author">作者：Akaashi</span>
            <span class="content">
                得与失既不是人生的起点，也不是人生的终点，一切得失不过是人生必经之过程。我们在高考前，常听人说高考是人生的转折点，它是十年寒窗的终点，也是迈入更高学府的起点，可是谁又能说，高考就是人生的起点或终点呢？漫漫一生中，我们会面临无数抉择，一个抉择是一段故事的结局，也是另一段故事的开篇。起点也好，终点也罢，都是人生中的一段过程，人生的价值是在得与失的不断转化中才实现的。如果非要为生命选一个终点，我觉得只有死亡，但细究起来，死亡也不是生命的终点，有的人死了，他还活着，就像屈原，两千多年了，他“虽九死其犹未悔”的爱国情怀滋养了一代又一代中华儿女——而这，就是他生命的延续。
            </span>
        </div>
    </el-col>
</template>

<script>
    export default {
        name: "Details",
        methods: {
            goBack() {
                this.$router.back();
            },
        },
        // activated(){
        //     console.log(this.$route.params.date);
        // },
    };
</script>

<style scoped>
    #details {
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
        gap: 10px;
    }
    .date,
    .author {
        font-weight: bold;
        font-size: 0.9rem;
        color: rgb(100, 100, 100);
    }
    .content {
        padding-top: 10px;
        border-top: 2px solid rgba(167, 181, 189, 0.521);
        text-indent: 2em;
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