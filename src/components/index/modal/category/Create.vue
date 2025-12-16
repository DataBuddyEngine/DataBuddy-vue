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
    <div class="create-category">
        <div class="create-category-items">
            <span><span style="color:red;">*</span>模块名: </span>
            <input type="text" placeholder="请输入 模块名"></input>
        </div>
        <div class="create-category-items">
            <span><span style="color:red;">*</span>模块值: </span>
            <input type="number" placeholder="请输入 模块值"></input>
        </div>
    </div>
    <div class="create-category-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 保存</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 取消</button>
    </div>
</template>
<style scoped>
    .create-category {
        position: absolute;
        top: 45px;
        left: 15px;
        max-height: calc(100vh - 150px);
        width: calc(100% - 32px);
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .create-category-items {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        min-height: 40px;
    }
    .create-category-items span:first-child {
        width: 80px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
    }
    .create-category-items input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
    .create-category-items input:hover {
        border-color: #f472b6;
    }
    .create-category-items input:focus {
        outline: none;
        border-color: #e267a7;
    }
    .create-category-btns {
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