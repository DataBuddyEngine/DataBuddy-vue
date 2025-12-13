<script setup>
    import { defineAsyncComponent, computed } from 'vue'
    import { useRoute } from 'vue-router'
    
    const route = useRoute()
    const DynamicContent = computed(() => {
        switch (route.path) {
            case '/':
            case '/datascreen':
                return defineAsyncComponent(() => import('@/components/index/Datascreen.vue'))
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
</style>