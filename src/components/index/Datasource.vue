<script setup>
import { defineAsyncComponent } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-datasource"><i class="fa-solid fa-plus"></i> 创建数据源</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style>
  .create-datasource {
    color: #fff;
    background-color: #00b7ff;
  }
  .create-datasource:hover {
    background-color: #00a2e2;
  }
  .create-datasource:active {
    background-color: #0088c3;
  }
</style>