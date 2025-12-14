<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getConfig from '@/utils/config'

const route = useRoute()
const router = useRouter()
const config = getConfig()

const Topbar = defineAsyncComponent(() => import('@/components/index/Topbar.vue'))
const Leftbar = defineAsyncComponent(() => import('@/components/index/Leftbar.vue'))
const Main = defineAsyncComponent(() => import('@/components/index/Main.vue'))

onMounted(() => {
  document.title = config.title
  document.body.style.background = "url('"+config.backgroundImg+"') no-repeat center center fixed"
  document.body.style.backgroundSize = "cover"

  //const linkElement = document.createElement('link');
  //linkElement.rel = 'stylesheet';

  //if (config.cdnUrl && config.cdnUrl !== "") {
    //linkElement.href = `${config.cdnUrl}/assets/font-awesome/css/all.min.css`;
  //} else {
    //linkElement.href = '@/assets/font-awesome/css/all.min.css';
  //}

  //document.head.appendChild(linkElement);
})
</script>
<template>
  <Topbar />
  <Leftbar />
  <Main />
</template>