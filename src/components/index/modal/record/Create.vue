<script setup>
import { defineEmits, ref, onMounted, onUnmounted, nextTick } from 'vue'

const emit = defineEmits(['close-modal', 'confirm-create', 'show-tip'])

const lineNumbersRef = ref(null)
const filterTextareaRef = ref(null)
const resizeObserver = ref(null)
const filterValue = ref('(data)=>{\n    return {\n        data\n    }\n}')

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
  const textarea = filterTextareaRef.value
  
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
  if (filterTextareaRef.value) {
    updateLineNumbers()
  }
}

const handleScroll = () => {
  const textarea = filterTextareaRef.value
  if (lineNumbersRef.value && textarea) {
    lineNumbersRef.value.style.transform = `translateY(${-textarea.scrollTop}px)`
  }
}

const setupResizeObserver = () => {
  if (!filterTextareaRef.value) return
  
  resizeObserver.value = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (lineNumbersRef.value) {
        const textarea = filterTextareaRef.value
        if (textarea) {
          const newHeight = Math.max(textarea.scrollHeight, textarea.clientHeight)
          lineNumbersRef.value.style.height = `${newHeight}px`
        }
      }
    }
  })
  
  resizeObserver.value.observe(filterTextareaRef.value)
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
    <div class="create-record">
        <div class="record-row">
            <div class="create-record-items name-field">
                <span><span style="color:red;">*</span>名称: </span>
                <input type="text" placeholder="请输入 名称"></input>
            </div>
            <div class="create-record-items type-field">
                <span><span style="color:red;">*</span>类型: </span>
                <select><option>请选择类型</option></select>
            </div>
        </div>
        <div class="create-record-items full-width">
            <span>过滤器: </span>
            <div class="textarea-container">
                <div class="line-numbers" ref="lineNumbersRef"></div>
                <textarea ref="filterTextareaRef" class="filter-textarea" @input="updateLineNumbers" @scroll="handleScroll" v-model="filterValue"></textarea>
            </div>
        </div>
        
        <div class="create-record-items full-width">
            <span>响应返回: </span>
            <div class="textarea-container">
                <textarea class="response-textarea" placeholder="响应返回内容" readonly></textarea>
            </div>
        </div>
    </div>
    <div class="create-record-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 保存</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 取消</button>
        <button class="reload-btn" @click="devTips"><i class="fa-solid fa-arrow-rotate-right"></i> 刷新数据</button>
    </div>
</template>

<style scoped>
    .create-record {
        position: absolute;
        top: 45px;
        left: 10px;
        right: 20px;
        bottom: 70px;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .record-row {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .create-record-items {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        min-height: 40px;
        width: 100%;
    }
    .create-record-items.full-width {
        width: 100%;
    }
    .create-record-items span:first-child {
        width: 80px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
        align-self: flex-start;
        padding-top: 8px;
    }
    .create-record-items input,
    .create-record-items select {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
        width: 20px;
    }
    .create-record-items input:hover,
    .create-record-items select:hover {
        border-color: #f472b6;
    }
    .create-record-items input:focus,
    .create-record-items select:focus {
        outline: none;
        border-color: #e267a7;
        box-shadow: 0 0 0 2px rgba(226, 103, 167, 0.2);
    }
    .create-record-items select {
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
    .filter-textarea {
        position: relative;
        display: block;
        width: 100%;
        min-height: 100px;
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
    .filter-textarea:hover {
        border-color: #f472b6;
    }
    .response-textarea {
        position: relative;
        display: block;
        width: calc(100% - 24px);
        padding: 8px 12px;
        border: none;
        resize: vertical;
        min-height: 100px;
        background-color: #f9f9f9;
        color: #666;
        font-family: monospace;
        font-size: 14px;
        line-height: 1.5;
        overflow: auto;
    }
    .create-record::-webkit-scrollbar,
    .filter-textarea::-webkit-scrollbar,
    .response-textarea::-webkit-scrollbar {
        width: 6px;
    }
    .create-record::-webkit-scrollbar-track,
    .filter-textarea::-webkit-scrollbar-track,
    .response-textarea::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    .create-record::-webkit-scrollbar-thumb,
    .filter-textarea::-webkit-scrollbar-thumb,
    .response-textarea::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }
    .create-record::-webkit-scrollbar-thumb:hover,
    .filter-textarea::-webkit-scrollbar-thumb:hover,
    .response-textarea::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
    .filter-textarea:focus,
    .response-textarea:focus {
        outline: none;
    }
    .create-record-btns {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .confirm-btn,
    .cancel-btn,
    .reload-btn {
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
    .reload-btn {
        width: 108px;
        background-color: #f472b6;
        color: #fff;
    }
    .reload-btn:hover {
        background-color: #da5a9e;
    }
    .reload-btn:active {
        background-color: #b23a80;
    }
    @media (min-width: 768px) {
        .record-row {
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