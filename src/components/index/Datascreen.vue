<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))

const emit = defineEmits(['show-modal'])
const handleCreate = () => {
  emit('show-modal', {
    title: '创建大屏',
    content: '开发中...',
    theme: 'light'
  })
}
const handleImport = () => {
  emit('show-modal', {
    title: '导入大屏',
    content: '开发中...',
    theme: 'light'
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-datascreen" @click="handleCreate"><i class="fa-solid fa-plus"></i> 创建大屏</button>
      <button class="header-button import-datascreen" @click="handleImport"><i class="fa-solid fa-file-import"></i> 导入大屏</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-datascreen {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
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
    transition: background-color 0.2s ease;
  }
  .import-datascreen:hover {
    background-color: #e267a7;
  }
  .import-datascreen:active {
    background-color: #c35b99;
  }
</style>