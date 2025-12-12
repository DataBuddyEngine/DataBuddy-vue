<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getConfig from '@/utils/config'

const route = useRoute()
const config = getConfig()

onMounted(() => {
  document.title = '页面未找到 - ' + config.title
  document.body.style.backgroundColor = '#000'
  document.body.style.color = '#fff'

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: route.path,
      page_title: '404 - Page Not Found'
    })
  }
})
</script>
<template>
    <h1>404 - Page Not Found</h1>
</template>