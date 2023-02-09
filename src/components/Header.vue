<template>
    <div class="header">
        <header>
            <p>TR_D1ary</p>
            <p class="tip">共享日记本📖</p>
        </header>
    </div>
</template>

<script>
    export default {
        name:'Header',
    };
</script>

<style scoped>
  /* 头部 */
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(208, 204, 204, 0.192);
    color: #333;
    margin-bottom: 40px;
    height: 130px;
    color: #dadbde;
    font-size: 40px;
    font-weight: bold;
    box-shadow: 0 0 5px 5px rgba(208, 204, 204, 0.192);
  }
  header .tip {
    margin-top: 8px;
    font-size: 1rem;
    color: rgb(162, 164, 165);
  }
</style>