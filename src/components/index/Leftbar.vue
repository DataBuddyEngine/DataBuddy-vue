<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { Eleme } from '@element-plus/icons-vue'

    const route = useRoute()
    const router = useRouter()

    const handleMenuClick = (path) => {
        router.push(path)
    }

    const activeMenu = computed(() => {
        const path = route.path
        if (path === '/' || path === '/datascreen') return '/datascreen'
        if (path.startsWith('/category')) return '/category'
        if (path.startsWith('/datasource')) return '/datasource'
        if (path.startsWith('/record')) return '/record'
        if (path.startsWith('/components')) return '/components'
        if (path.startsWith('/variables')) return '/variables'
        if (path.startsWith('/files')) return '/files'
        if (path.startsWith('/maps')) return '/maps'
        if (path.startsWith('/tools')) return '/tools'
        return ''
    })
</script>
<template>
    <div class="leftbar">
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/datascreen' }" @click="handleMenuClick('/datascreen')"><i class="fa-solid fa-table-cells-large"></i> 大屏管理</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/category' }" @click="handleMenuClick('/category')"><i class="fa-solid fa-folder"></i> 大屏分类</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/datasource' }" @click="handleMenuClick('/datasource')"><i class="fa-solid fa-database"></i> 数据源管理</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/record' }" @click="handleMenuClick('/record')"><i class="fa-solid fa-suitcase"></i> 数据集管理</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/components' }" @click="handleMenuClick('/components')"><el-icon style="font-size:20px;transform: translateY(4px);"><Eleme /></el-icon> 组件库</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/variables' }" @click="handleMenuClick('/variables')"><i class="fa-solid fa-lightbulb"></i> 全局变量</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/files' }" @click="handleMenuClick('/files')"><i class="fa-solid fa-layer-group"></i> 静态资源</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/maps' }" @click="handleMenuClick('/maps')"><i class="fa-solid fa-location-dot"></i> 地图管理</button>
        <button class="leftbar-item" :class="{ 'activated': activeMenu === '/tools' }" @click="handleMenuClick('/tools')"><i class="fa-solid fa-boxes-stacked"></i> 工具箱</button>
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
        background-color: rgba(255,255,255,0.15);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
        border: 1px solid rgba(255,255,255,0.4);
        box-shadow:
            0 8px 32px rgba(0,0,0,0.2),
            inset 0 4px 20px rgba(255,255,255,0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 8px;
        box-sizing: border-box;
        z-index: 2;
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
        text-shadow: 1px 1px 4px rgba(255,255,255,0.4);
    }
    .leftbar-item:hover {
        background-color: rgba(255,255,255,0.2);
    }
    .leftbar-item:active,
    .activated {
        background-color: rgba(255,255,255,0.4);
    }
</style>