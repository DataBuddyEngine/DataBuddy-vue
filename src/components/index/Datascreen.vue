<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-datascreen"><i class="fa-solid fa-plus"></i> 创建大屏</button>
      <button class="header-button import-datascreen"><i class="fa-solid fa-file-import"></i> 导入大屏</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <main class="main">
    <div class="no-data">
      <i class="fa-solid fa-circle-xmark"></i>
      <span>暂无数据</span>
    </div>
  </main>
</template>
<style>
  .header-left {
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .header-right {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .header-button {
    width: 120px;
    height: 32px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    margin: 0 4px;
  }
  .header-button:first-child {
    margin-left: 0;
  }
  .header-button:last-child {
    margin-right: 0;
  }
  .create-datascreen {
    color: #fff;
    background-color: #00b7ff;
  }
  .create-datascreen:hover {
    background-color: #00a2e2;
  }
  .create-datascreen:active {
    background-color: #0088c3;
  }
  .import-datascreen {
    color: #fff;
    background-color: #f472b6;
  }
  .import-datascreen:hover,
  .search-button:hover {
    background-color: #e267a7;
  }
  .import-datascreen:active,
  .search-button:active {
    background-color: #c35b99;
  }
  .header-search {
    width: 150px;
    height: 32px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    background-color: rgba(255,255,255,0.3);
  }
  .header-search:hover {
    background-color: rgba(255,255,255,0.4);
  }
  .header-search:focus {
    outline: none;
    background-color: rgba(255,255,255,0.5);
  }
  .search-button {
    width: 32px;
    height: 32px;
    background-color: #f472b6;
    color: #fff;
  }
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