<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Nodata = defineAsyncComponent(() => import('@/components/index/Nodata.vue'))

const activeTab = ref('all')

const handleTabClick = (tabName) => {
  activeTab.value = tabName
  
  // 这里可以添加实际业务逻辑，例如：
  // if (tabName === 'vue') {
  //   loadVueComponents()
  // } else if (tabName === 'echarts') {
  //   loadEchartsComponents()
  // } else {
  //   loadHtmlComponents()
  // }
}

const emit = defineEmits(['show-modal'])
const handleCreate = () => {
  emit('show-modal', {
    title: '创建组件',
    content: '开发中...',
    theme: 'light'
  })
}
</script>
<template>
  <header class="header">
    <div class="header-left">
      <button class="header-button create-component" @click="handleCreate"><i class="fa-solid fa-square-plus"></i> 创建组件</button>
    </div>
    <div class="header-right">
      <input type="text" placeholder="请输入名称" class="header-search"></input>
      <button class="header-button search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div class="header-components-list">
        <button class="header-components-item header-button" :class="{ 'components-item-actived': activeTab === 'all' }" @click="handleTabClick('all')">全部组件</button>
        <button class="header-components-item header-button" :class="{ 'components-item-actived': activeTab === 'vue' }" @click="handleTabClick('vue')">VUE 组件</button>
        <button class="header-components-item header-button" :class="{ 'components-item-actived': activeTab === 'echarts' }" @click="handleTabClick('echarts')">ECharts 组件</button>
        <button class="header-components-item header-button" :class="{ 'components-item-actived': activeTab === 'html' }" @click="handleTabClick('html')">HTML 组件</button>
    </div>
  </header>
  <Nodata />
</template>
<style scoped>
  .create-component {
    color: #fff;
    background-color: #00b7ff;
    transition: background-color 0.2s ease;
  }
  .create-component:hover {
    background-color: #00a2e2;
  }
  .create-component:active {
    background-color: #0088c3;
  }
  .header-components-list {
    position: absolute;
    top: 58px;
    left: 15px;
  }
  .header-components-item {
    background-color: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.4);
    box-shadow:
        0 8px 32px rgba(0,0,0,0.2),
        inset 0 4px 20px rgba(255,255,255,0.3);
    color: #333;
    text-shadow: 1px 1px 4px rgba(255,255,255,0.4);
    transition: background-color 0.2s ease;
  }
  .header-components-item:hover {
    background-color: rgba(255,255,255,0.25);
  }
  .components-item-actived,
  .header-components-item:active {
    background-color: rgba(255,255,255,0.6);
  }
</style>