<script setup>
import { onMounted, defineAsyncComponent, shallowRef } from 'vue'
import getConfig from '@/utils/config'
import Tip from '@/components/layout/Tip.vue'

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

const Modal = defineAsyncComponent(() => import('@/components/layout/Modal.vue'))

const showModal = shallowRef(false)
const modalContent = shallowRef('')
const modalTheme = shallowRef('light')
const modalTitle = shallowRef('')
const modalWidth = shallowRef('auto')
const modalHeight = shallowRef('auto')

const handleShowModal = (payload) => {
  modalContent.value = payload.content || null
  modalTheme.value = ['light', 'dark'].includes(payload.theme) ? payload.theme : 'light'
  modalTitle.value = payload.title || ''
  showModal.value = true
  modalWidth.value = payload.width || 'auto'
  modalHeight.value = payload.height || 'auto'
}

const closeModal = () => {
  showModal.value = false
}

const tip = shallowRef(null)

const handleShowTip = (payload) => {
  if (!tip.value) return;
  
  const { content, theme = 'success', duration = 3000 } = payload;
  
  switch(theme) {
    case 'success':
      tip.value.success(content, duration);
      break;
    case 'error':
      tip.value.error(content, duration);
      break;
    case 'warning':
      tip.value.warning(content, duration);
      break;
    case 'info':
      tip.value.info(content, duration);
      break;
    default:
      tip.value.success(content, duration);
  }
}
</script>
<template>
  <Topbar />
  <Leftbar />
  <Main @show-modal="handleShowModal" @show-tip="handleShowTip" />
  
  <Modal v-if="showModal" @close="closeModal" :theme="modalTheme" :title="modalTitle" :width="modalWidth" :height="modalHeight">
    <component :is="modalContent" v-if="modalContent && typeof modalContent === 'object'" @close-modal="closeModal" @show-tip="handleShowTip" />
    <template v-else>{{ modalContent || '无内容' }}</template>
  </Modal>

  <Tip ref="tip" />
</template>