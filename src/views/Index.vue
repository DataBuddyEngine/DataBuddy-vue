<script setup>
import { onMounted, defineAsyncComponent, ref } from 'vue'
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

const Modal = defineAsyncComponent(() => import('@/components/layout/Modal.vue'))

const showModal = ref(false)
const modalContent = ref('')
const modalTheme = ref('light')
const modalTitle = ref('')
const modalWidth = ref('auto')
const modalHeight = ref('auto')

const handleShowModal = (payload) => {
  modalContent.value = payload.content || ''
  modalTheme.value = ['light', 'dark'].includes(payload.theme) ? payload.theme : 'light'
  modalTitle.value = payload.title || ''
  showModal.value = true
  modalWidth.value = payload.width || 'auto'
  modalHeight.value = payload.height || 'auto'
}

const closeModal = () => {
  showModal.value = false
}
</script>
<template>
  <Topbar />
  <Leftbar />
  <Main @show-modal="handleShowModal" />
  
  <Modal v-if="showModal" @close="closeModal" :theme="modalTheme" :title="modalTitle" :width="modalWidth" :height="modalHeight">
    {{ modalContent }}
  </Modal>
</template>