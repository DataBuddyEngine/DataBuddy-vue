<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getConfig from '@/utils/config'

const route = useRoute()
const router = useRouter()
const config = getConfig()

const Topbar = defineAsyncComponent(() => import('@/components/index/Topbar.vue'))
const Leftbar = defineAsyncComponent(() => import('@/components/index/Leftbar.vue'))

onMounted(() => {
  document.title = config.title
  document.body.style.background = "url('"+config.backgroundImg+"') no-repeat center center fixed"
  document.body.style.backgroundSize = "cover"
})
</script>
<template>
  <Topbar />
  <Leftbar />
</template>