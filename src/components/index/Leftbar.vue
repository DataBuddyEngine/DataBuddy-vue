<script setup>
</script>
<template>
    <div class="leftbar">
        <button class="leftbar-item"><i class="fa-solid fa-table-cells-large"></i> 大屏管理</button>
        <button class="leftbar-item"><i class="fa-solid fa-folder"></i> 大屏分类</button>
        <button class="leftbar-item"><i class="fa-solid fa-database"></i> 数据源管理</button>
        <button class="leftbar-item"><i class="fa-solid fa-suitcase"></i> 数据集管理</button>
        <button class="leftbar-item"><el-icon style="font-size:20px;transform: translateY(4px);"><Eleme /></el-icon> 组件库</button>
        <button class="leftbar-item"><i class="fa-solid fa-lightbulb"></i> 全局变量</button>
        <button class="leftbar-item"><i class="fa-solid fa-layer-group"></i> 静态资源</button>
        <button class="leftbar-item"><i class="fa-solid fa-location-dot"></i> 地图管理</button>
        <button class="leftbar-item"><i class="fa-solid fa-boxes-stacked"></i> 工具箱</button>
    </div>
</template>
<style>
    .leftbar {
        position: fixed;
        top: 38px;
        left: 8px;
        border-radius: 16px;
        width: 200px;
        height: calc(100% - 48px);
        background-color: rgba(255,255,255,0.2);
        backdrop-filter: blur(3px);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 8px;
        box-sizing: border-box;
    }
    .leftbar-item {
        width: 90%;
        height: 48px;
        border-radius: 16px;
        border: 0;
        background-color: transparent;
        margin-bottom: 8px;
        cursor: pointer;
        font-size: 16px;
        color: #333;
    }
    .leftbar-item:hover {
        background-color: rgba(255,255,255,0.2);
    }
    .leftbar-item:active {
        background-color: rgba(255,255,255,0.4);
    }
</style>