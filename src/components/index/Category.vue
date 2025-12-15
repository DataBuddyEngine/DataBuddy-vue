<script setup>
import { defineAsyncComponent } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))

const emit = defineEmits(['show-modal'])

const handleCreate = () => {
  emit('show-modal', {
    title: '创建分类',
    content: '开发中...',
    theme: 'light'
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-category" @click="handleCreate"><i class="fa-solid fa-folder-plus"></i> 创建分类</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-category {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
  }
  .create-category:hover {
    background-color: #00a2e2;
  }
  .create-category:active {
    background-color: #0088c3;
  }
</style>