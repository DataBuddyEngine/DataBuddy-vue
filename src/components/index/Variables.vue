<script setup>
import { defineAsyncComponent } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))
const Create = defineAsyncComponent(() => import('@/components/index/modal/variables/Create.vue'))

const emit = defineEmits(['show-modal', 'show-tip'])
const handleCreate = () => {
  emit('show-modal', {
    title: '创建变量',
    content: Create,
    theme: 'light',
    width: '60%',
    height: '50%',
    events: {
      'show-tip': (payload) => emit('show-tip', payload)
    }
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-variables" @click="handleCreate"><i class="fa-solid fa-square-root-variable"></i> 创建变量</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-variables {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
  }
  .create-variables:hover {
    background-color: #00a2e2;
  }
  .create-variables:active {
    background-color: #0088c3;
  }
</style>