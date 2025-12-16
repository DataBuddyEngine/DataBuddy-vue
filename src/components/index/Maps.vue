<script setup>
import { defineAsyncComponent } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))
const Create = defineAsyncComponent(() => import('@/components/index/modal/maps/Create.vue'))

const emit = defineEmits(['show-modal', 'show-tip'])
const handleCreate = () => {
  emit('show-modal', {
    title: '创建地图',
    content: Create,
    theme: 'light',
    width: '40%',
    height: '60%',
    events: {
      'show-tip': (payload) => emit('show-tip', payload)
    }
  })
}
const devTips = () => {
  emit('show-tip', {
    content: '功能开发中...',
    theme: 'info'
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-maps" @click="handleCreate"><i class="fa-solid fa-location-dot"></i> 创建地图</button>
      <button class="header-button download-maps" @click="devTips"><i class="fa-solid fa-download"></i> 地图下载</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-maps {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
  }
  .create-maps:hover {
    background-color: #00a2e2;
  }
  .create-maps:active {
    background-color: #0088c3;
  }
  .download-maps {
    color: #fff;
    background-color: #f472b6;
    transition: background-color 0.2s ease;
  }
  .download-maps:hover {
    background-color: #e267a7;
  }
  .download-maps:active {
    background-color: #c35b99;
  }
</style>