<script setup>
const emit = defineEmits(['close'])

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

const closeModal = () => emit('close')
const getDimensionValue = (value) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}
</script>
<template>
  <div class="modal-mask">
    <div class="modal-container" :class="theme" :style="{width: getDimensionValue(width), height: getDimensionValue(height),}">
      <header class="modal-header">
        <button class="modal-close-btn" @click="closeModal"></button>
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
.modal-close-btn {
  position: absolute;
  top: 8px;
  left: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  background-color: #ff5b5b;
  color: #666;
  font-weight: bold;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-close-btn::before {
  content: "\f00d";
  font-family: "Font Awesome 7 Free";
  font-weight: bolder;
  display: none;
  font-size: 11px;
  color: #555;
}
.modal-close-btn:hover::before {
  display: block;
}
.modal-close-btn:active {
  background-color: #c64848;
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