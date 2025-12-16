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
    <div class="create-datascreen">
        <div class="create-datascreen-items">
            <span><span style="color:red;">*</span>分组: </span>
            <select><option>请选择分组</option></select>
        </div>
        <div class="create-datascreen-items">
            <span><span style="color:red;">*</span>大屏名称: </span>
            <input type="text" placeholder="请输入 大屏名称"></input>
        </div>
        <div class="create-datascreen-items">
            <span>密码: </span>
            <input type="password" placeholder="请输入 密码"></input>
        </div>
        <div class="create-datascreen-items">
            <span><span style="color:red;">*</span>大屏尺寸: </span>
            <div class="size-inputs">
                <div class="size-inputs">
                    <input type="text" placeholder="请输入 宽度" value="1920">
                    <span class="size-separator">&nbsp;<i class="fa-solid fa-xmark"></i>&nbsp;</span>
                    <input type="text" placeholder="请输入 高度" value="1080">
                </div>
            </div>
        </div>
        <div class="create-datascreen-items">
            <span>缩略图: </span>
            <button @click="devTips"><i class="fa-solid fa-upload"></i> 点击上传</button>
        </div>
    </div>
    <div class="create-datascreen-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 确认创建</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 关闭</button>
    </div>
</template>
<style scoped>
    .create-datascreen {
        position: absolute;
        top: 40px;
        left: 20px;
        max-height: calc(100vh - 150px);
        width: calc(100% - 64px);
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .create-datascreen-items {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        min-height: 40px;
    }
    .create-datascreen-items span:first-child {
        width: 100px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
    }
    .create-datascreen-items input,
    .create-datascreen-items select,
    .create-datascreen-items button {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
    .create-datascreen-items input:hover {
        border-color: #f472b6;
    }
    .create-datascreen-items input:focus {
        outline: none;
        border-color: #e267a7;
    }
    .create-datascreen-items select {
        background-color: #fff;
    }
    .create-datascreen-items select:hover {
        border-color: #f472b6;
    }
    .create-datascreen-items select:focus {
        outline: none;
        border-color: #e267a7;
    }
    .create-datascreen-items button:hover {
        background-color: #f5f5f5;
    }
    .create-datascreen-items button:active {
        background-color: #ddd;
    }
    .size-inputs {
        display: flex;
        align-items: center;
        width: 100%;
    }
    .size-inputs input {
        width: 40px;
        text-align: center;
    }
    .separator {
        margin: 0 10px;
        font-weight: bold;
    }
    .create-datascreen-btns {
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
        height: 35px;
        width: 128px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
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