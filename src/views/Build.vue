<script setup>
    import { onMounted, defineAsyncComponent, shallowRef } from 'vue'
    import getConfig from '@/utils/config'

    const config = getConfig()

    onMounted(() => {
        document.title = "大屏设计器 - " + config.title
    })
</script>
<template>
    <div class="build"></div>
</template>
<style scoped>
    .build {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>