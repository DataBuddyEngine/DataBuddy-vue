<template>
    <main class="main">
    <div class="no-data">
      <i class="fa-solid fa-circle-xmark"></i>
      <span>暂无数据</span>
    </div>
  </main>
</template>
<style scoped>
    .main {
        height: calc(100vh - 62px);
        padding-top: 62px;
        box-sizing: border-box;
    }
    .no-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 20px;
    }
    .no-data i {
        font-size: 64px;
        margin-bottom: 16px;
        color: #0095cf;
    }
    .no-data span {
        color: #00354a;
    }
</style>