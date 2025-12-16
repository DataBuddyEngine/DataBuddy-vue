<script setup>
    import { defineEmits } from 'vue'
    const emit = defineEmits(['close-modal', 'confirm-create', 'show-tip'])

    const handleClose = () => {
        emit('close-modal')
    }

    const devTips = () => {
        emit('show-tip', {
            content: '功能开发中...',
            theme: 'info'
        })
    }
</script>
<template>
    <div class="create-variables">
        <div class="create-variables-items">
            <span><span style="color:red;">*</span>名称: </span>
            <input type="text" placeholder="请输入 名称"></input>
        </div>
        <div class="create-variables-items">
            <span><span style="color:red;">*</span>变量名: </span>
            <input type="text" placeholder="请输入 变量名"></input>
        </div>
        <div class="create-variables-items">
            <span><span style="color:red;">*</span>变量值: </span>
            <div class="textarea-container">
                <textarea type="text" class="value-textarea" placeholder="请输入 变量值"></textarea>
            </div>
        </div>
    </div>
    <div class="create-variables-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 保存</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 取消</button>
    </div>
</template>
<style scoped>
    .create-variables {
        position: absolute;
        top: 45px;
        left: 15px;
        right: 20px;
        bottom: 70px;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .create-variables::-webkit-scrollbar {
        width: 6px;
    }
    .create-variables::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    .create-variables::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }
    .create-variables::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
    .create-variables-items {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        min-height: 40px;
    }
    .create-variables-items span:first-child {
        width: 80px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
    }
    .create-variables-items input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
    .create-variables-items input:hover {
        border-color: #f472b6;
    }
    .create-variables-items input:focus {
        outline: none;
        border-color: #e267a7;
    }
    .textarea-container {
        flex: 1;
        position: relative;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        min-height: 90px;
        background-color: #fff;
    }
    .value-textarea {
        position: relative;
        display: block;
        width: calc(100% - 24px);
        min-height: 90px;
        padding: 8px 12px;
        resize: vertical;
        font-size: 14px;
        outline: none;
        border: none;
    }
    .create-variables-btns {
        position: absolute;
        align-items: center;
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
</style>