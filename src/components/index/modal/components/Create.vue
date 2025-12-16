<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const emit = defineEmits(['close-modal', 'confirm-create', 'show-tip'])

const lineNumbersRef = ref(null)
const dataTextareaRef = ref(null)
const resizeObserver = ref(null)
const dataValue = ref('')

const handleClose = () => {
    emit('close-modal')
}

const devTips = () => {
    emit('show-tip', {
        content: '功能开发中...',
        theme: 'info'
    })
}

const updateLineNumbers = () => {
  const textarea = dataTextareaRef.value
  
  if (!textarea || !lineNumbersRef.value) return
  
  const lines = textarea.value.split('\n').length
  lineNumbersRef.value.innerHTML = Array.from({ length: lines }, (_, i) => 
    `<span style="line-height: 1.5em;">${i + 1}</span>`
  ).join('')
  
  nextTick(() => {
    if (!textarea || !lineNumbersRef.value) return
    
    const newHeight = Math.max(textarea.scrollHeight, textarea.clientHeight)
    lineNumbersRef.value.style.height = `${newHeight}px`
  })
}

const handleResize = () => {
  if (dataTextareaRef.value) {
    updateLineNumbers()
  }
}

const handleScroll = () => {
  const textarea = dataTextareaRef.value
  if (lineNumbersRef.value && textarea) {
    lineNumbersRef.value.style.transform = `translateY(${-textarea.scrollTop}px)`
  }
}

const setupResizeObserver = () => {
  if (!dataTextareaRef.value) return
  
  resizeObserver.value = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (lineNumbersRef.value) {
        const textarea = dataTextareaRef.value
        if (textarea) {
          const newHeight = Math.max(textarea.scrollHeight, textarea.clientHeight)
          lineNumbersRef.value.style.height = `${newHeight}px`
        }
      }
    }
  })
  
  resizeObserver.value.observe(dataTextareaRef.value)
}

onMounted(() => {
  updateLineNumbers()
  window.addEventListener('resize', handleResize)
  setupResizeObserver()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
    resizeObserver.value = null
  }
})
</script>

<template>
    <div class="create-components">
        <div class="components-row">
            <div class="create-components-items name-field">
                <span><span style="color:red;">*</span>组件名称: </span>
                <input type="text" placeholder="请输入 组件名称"></input>
            </div>
            <div class="create-components-items type-field">
                <span><span style="color:red;">*</span>组件类型: </span>
                <select><option>请选择组件类型</option></select>
            </div>
        </div>
        <div class="create-components-items full-width">
            <span>组件数据: </span>
            <div class="textarea-container">
                <div class="line-numbers" ref="lineNumbersRef"></div>
                <textarea ref="dataTextareaRef" class="data-textarea" @input="updateLineNumbers" @scroll="handleScroll" v-model="dataValue"></textarea>
            </div>
        </div>
        <div class="create-components-items">
            <span></span>
            <button class="run-btn" @click="devTips"><i class="fa-solid fa-check"></i> 运行</button>
        </div>
        
        <div class="create-components-items full-width">
            <span>组件预览: </span>
        </div>
    </div>
    <div class="create-components-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 保存</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 取消</button>
    </div>
</template>

<style scoped>
    .create-components {
        position: absolute;
        top: 45px;
        left: 10px;
        right: 20px;
        bottom: 70px;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .components-row {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .create-components-items {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        min-height: 40px;
        width: 100%;
    }
    .create-components-items.full-width {
        width: 100%;
    }
    .create-components-items span:first-child {
        width: 100px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
        align-self: flex-start;
        padding-top: 8px;
    }
    .create-components-items input,
    .create-components-items select {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
        width: 20px;
    }
    .create-components-items input:hover,
    .create-components-items select:hover {
        border-color: #f472b6;
    }
    .create-components-items input:focus,
    .create-components-items select:focus {
        outline: none;
        border-color: #e267a7;
        box-shadow: 0 0 0 2px rgba(226, 103, 167, 0.2);
    }
    .create-components-items select {
        background-color: #fff;
    }
    .textarea-container {
        flex: 1;
        position: relative;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        min-height: 100px;
        background-color: #fff;
    }
    .line-numbers {
        position: absolute;
        left: 0;
        top: 0;
        width: 35px;
        padding: 8px 0;
        background-color: #f5f5f5;
        border-right: 1px solid #ddd;
        text-align: center;
        font-family: monospace;
        font-size: 13px;
        user-select: none;
        color: #999;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        will-change: transform;
        pointer-events: none;
    }
    .data-textarea {
        position: relative;
        display: block;
        width: 100%;
        min-height: 256px;
        padding: 8px 12px 8px 45px;
        border: none;
        resize: vertical;
        background: transparent;
        font-family: monospace;
        font-size: 13px;
        line-height: 1.5em;
        outline: none;
        color: inherit;
        overflow: auto;
        box-sizing: border-box;
        z-index: 2;
    }
    .data-textarea:hover {
        border-color: #f472b6;
    }
    .run-btn {
        border: none;
        border-radius: 10px;
        width: 80px;
        height: 32px;
        background-color: #f472b6;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        gap: 5px;
    }
    .run-btn:hover {
        background-color: #da609b;
    }
    .run-btn:active {
        background-color: #b24a80;
    }
    .create-components::-webkit-scrollbar,
    .data-textarea::-webkit-scrollbar {
        width: 6px;
    }
    .create-components::-webkit-scrollbar-track,
    .data-textarea::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    .create-components::-webkit-scrollbar-thumb,
    .data-textarea::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }
    .create-components::-webkit-scrollbar-thumb:hover,
    .data-textarea::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
    .data-textarea:focus {
        outline: none;
    }
    .create-components-btns {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .confirm-btn,
    .cancel-btn {
        height: 32px;
        width: 85px;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .confirm-btn {
        background-color: #4CAF50;
        color: #fff;
    }
    .confirm-btn:hover {
        background-color: #46a049;
    }
    .confirm-btn:active {
        background-color: #38803a;
    }
    .cancel-btn {
        background-color: #f44336;
        color: #fff;
    }
    .cancel-btn:hover {
        background-color: #da190b;
    }
    .cancel-btn:active {
        background-color: #b2100a;
    }
    @media (min-width: 768px) {
        .components-row {
            flex-wrap: nowrap;
        }
        .name-field, .type-field {
            width: calc(50% - 7.5px);
        }
        .name-field {
            margin-right: 15px;
        }
    }
</style>