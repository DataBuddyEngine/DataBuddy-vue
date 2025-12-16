<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
let timer = null

onMounted(() => {
  if (route.path === '/') {
    timer = setTimeout(() => {
      router.push('/datascreen')
    }, 3000)
  }
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
})
</script>
<template></template>