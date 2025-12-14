<script setup>
    import { defineAsyncComponent, computed } from 'vue'
    import { useRoute } from 'vue-router'
    
    const route = useRoute()
    const DynamicContent = computed(() => {
        switch (route.path) {
            case '/':
            case '/datascreen':
                return defineAsyncComponent(() => import('@/components/index/Datascreen.vue'))
            case '/category':
                return defineAsyncComponent(() => import('@/components/index/Category.vue'))
            case '/datasource':
                return defineAsyncComponent(() => import('@/components/index/Datasource.vue'))
            case '/record':
                return defineAsyncComponent(() => import('@/components/index/Record.vue'))
            case '/components':
                return defineAsyncComponent(() => import('@/components/index/Components.vue'))
            case '/variables':
                return defineAsyncComponent(() => import('@/components/index/Variables.vue'))
            case '/files':
                return defineAsyncComponent(() => import('@/components/index/Files.vue'))
            case '/maps':
                return defineAsyncComponent(() => import('@/components/index/Maps.vue'))
            case '/tools':
                return defineAsyncComponent(() => import('@/components/index/Tools.vue'))
        }
    })
</script>
<template>
    <div class="container">
        <component :is="DynamicContent" />
    </div>
</template>
<style>
    .container {
        position: fixed;
        top: 38px;
        left: 216px;
        border-radius: 16px;
        width: calc(100vw - 224px);
        height: calc(100vh - 48px);
        background-color: rgba(255,255,255,0.15);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
        border: 1px solid rgba(255,255,255,0.4);
        box-shadow:
            0 8px 32px rgba(0,0,0,0.2),
            inset 0 4px 20px rgba(255,255,255,0.3);
        z-index: 1;
    }
    .header-left {
        position: absolute;
        top: 15px;
        left: 15px;
    }
    .header-right {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .header-button {
        width: 128px;
        height: 32px;
        font-size: 15px;
        border: none;
        border-radius: 10px;
        margin: 0 4px;
        cursor: pointer;
    }
    .header-button:first-child {
        margin-left: 0;
    }
    .header-button:last-child {
        margin-right: 0;
    }
    .search-button:hover {
        background-color: #e267a7;
    }
    .search-button:active {
        background-color: #c35b99;
    }
    .header-search {
        width: 150px;
        height: 32px;
        font-size: 15px;
        border: none;
        border-radius: 10px;
        padding: 0 10px;
        background-color: rgba(255,255,255,0.3);
    }
    .header-search:hover {
        background-color: rgba(255,255,255,0.4);
    }
    .header-search:focus {
        outline: none;
        background-color: rgba(255,255,255,0.5);
    }
    .search-button {
        width: 32px;
        height: 32px;
        background-color: #f472b6;
        color: #fff;
    }
    .search-button:hover {
        background-color: #e267a7;
    }
    .search-button:active {
        background-color: #c35b99;
    }
</style>