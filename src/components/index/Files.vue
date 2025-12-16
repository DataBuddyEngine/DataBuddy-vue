<script setup>
import { defineAsyncComponent } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))
const Upload = defineAsyncComponent(() => import('@/components/index/modal/files/Upload.vue'))

const emit = defineEmits(['show-modal', 'show-tip'])
const handleCreate = () => {
  emit('show-modal', {
    title: '上传文件',
    content: Upload,
    theme: 'light'
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-files" @click="handleCreate"><i class="fa-solid fa-upload"></i> 上传文件</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-files {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
  }
  .create-files:hover {
    background-color: #00a2e2;
  }
  .create-files:active {
    background-color: #0088c3;
  }
</style>