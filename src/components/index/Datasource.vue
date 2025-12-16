<script setup>
import { defineAsyncComponent } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))
const Create = defineAsyncComponent(() => import('@/components/index/modal/datasource/Create.vue'))

const emit = defineEmits(['show-modal', 'show-tip'])

const handleCreate = () => {
  emit('show-modal', {
    title: '创建数据源',
    content: Create,
    theme: 'light',
    width: '80%',
    height: '80%',
    events: {
      'show-tip': (payload) => emit('show-tip', payload)
    }
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-datasource" @click="handleCreate"><i class="fa-solid fa-calendar-plus"></i> 创建数据源</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-datasource {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
  }
  .create-datasource:hover {
    background-color: #00a2e2;
  }
  .create-datasource:active {
    background-color: #0088c3;
  }
</style>