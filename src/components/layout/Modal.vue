<script setup>
import { ref, nextTick } from 'vue'
const emit = defineEmits(['close', 'maximize'])

const props = defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  title: {
    type: String,
    default: '',
    validator: (value) => typeof value ==='string' && value.length > 0
  },
  width: {
    type: [String, Number],
    default: 'auto',
    validator: (value) => {
      if (typeof value === 'number') return true;
      return /^(\d+\.?\d*(px|rem|em|%|vw|vh|cm|mm|in|pt|pc)?|auto)$/.test(value);
    }
  },
  height: {
    type: [String, Number],
    default: 'auto',
    validator: (value) => {
      if (typeof value === 'number') return true;
      return /^(\d+\.?\d*(px|rem|em|%|vh|cm|mm|in|pt|pc)?|auto)$/.test(value);
    }
  },
})

const isMaximized = ref(false)
const modalContainer = ref(null)

const closeModal = () => emit('close')
const toggleMaximize = async () => {
  if (!isMaximized.value && modalContainer.value) {
    const rect = modalContainer.value.getBoundingClientRect();
    modalContainer.value.dataset.startX = rect.left;
    modalContainer.value.dataset.startY = rect.top;
    modalContainer.value.dataset.startWidth = rect.width;
    modalContainer.value.dataset.startHeight = rect.height;
  }

  isMaximized.value = !isMaximized.value
  emit('maximize', isMaximized.value)

  await nextTick();
}
const getDimensionValue = (value, dimension) => {
  if (isMaximized.value) {
    return '100%'
  }
  
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}
</script>
<template>
  <div class="modal-mask">
    <div ref="modalContainer" class="modal-container" :class="[theme, { 'maximized': isMaximized, 'animating': true }]" :style="{ width: getDimensionValue(width), height: getDimensionValue(height), maxWidth: isMaximized ? '100vw' : 'none', maxHeight: isMaximized ? '100vh' : 'none'}">
      <header class="modal-header">
        <div class="modal-header-buttons">
          <button class="modal-close-btn" @click="closeModal"></button>
          <button class="modal-maximize-btn" @click="toggleMaximize"></button>
        </div>
        <header class="modal-header-title">{{ title }}</header>
      </header>
      <div class="modal-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-container {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  min-height: 60px;
  overflow: hidden;
  position: relative;
  z-index: 99999;
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center center;
}
.modal-container.animating {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}
.modal-container.light {
  background-color: #fff;
  color: #333333;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 0 40px rgba(0, 0, 0, 0.08);
}
.modal-container.dark {
  background-color: #2d2d2d;
  color: #f0f0f0;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.4),
    inset 0 0 40px rgba(0, 0, 0, 0.2);
  border: 1px solid #444;
}
.modal-header {
  width: 100%;
  height: 30px;
  background-color: #e4e4e4;
}
.modal-container.dark .modal-header {
  background-color: #3a3a3a;
  border-bottom: 1px solid #444;
}
.modal-header-buttons {
  position: absolute;
  left: 10px;
  top: 8px;
  display: flex;
  gap: 8px;
  height: 20px;
}
.modal-close-btn,
.modal-maximize-btn {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
}
.modal-close-btn {
  background-color: #ff5b5b;
}
.modal-maximize-btn {
  background-color: #37b600;
}
.modal-close-btn::before,
.modal-maximize-btn::before {
  position: absolute;
  font-family: "Font Awesome 7 Free";
  font-weight: bolder;
  font-size: 11px;
  color: #555;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.modal-close-btn::before {
  content: "\f00d";
  font-size: 11px;
}
.modal-maximize-btn::before {
  content: "\f424";
  font-size: 8px;
}
.modal-container.maximized .modal-maximize-btn::before {
  content: "\f422";
}
.modal-container.maximized {
  border-radius: 0 !important;
}
.modal-header-buttons:hover .modal-close-btn::before,
.modal-header-buttons:hover .modal-maximize-btn::before {
  opacity: 1;
}
.modal-close-btn:active {
  background-color: #c64848;
}
.modal-maximize-btn:active {
  background-color: #288500;
}
.modal-header-title {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.modal-main {
  padding: 4px;
}
</style>