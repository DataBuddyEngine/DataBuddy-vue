<script setup>
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
    <div class="create-maps">
        <div class="create-maps-items">
            <span>上一级别: </span>
            <input type="text" placeholder="请输入 上一级别"></input>
        </div>
        <div class="create-maps-items">
            <span><span style="color:red;">*</span>地图名称: </span>
            <input type="text" placeholder="请输入 地图名称"></input>
        </div>
        <div class="create-maps-items">
            <span><span style="color:red;">*</span>地图级别: </span>
            <select><option>请选择 地图级别</option></select>
        </div>
        <div class="create-maps-items">
            <span><span style="color:red;">*</span>地图编号: </span>
            <input type="text" placeholder="请输入 内容"></input>
        </div>
        <div class="create-maps-items full-width">
            <span>地图数据: </span>
            <div class="textarea-container">
                <textarea class="data-textarea" placeholder="地图数据" readonly></textarea>
            </div>
        </div>
        <div class="create-maps-items">
            <span></span>
            <button class="upload-btn" @click="devTips"><i class="fa-solid fa-upload"></i> 点击上传</button>
        </div>
    </div>
    <div class="create-maps-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 保存</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 取消</button>
    </div>
</template>
<style scoped>
    .create-maps {
        position: absolute;
        top: 45px;
        left: 15px;
        right: 20px;
        bottom: 70px;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .create-maps-items {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        min-height: 40px;
    }
    .create-maps-items span:first-child {
        width: 100px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
    }
    .create-maps-items input,
    .create-maps-items select {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
    .create-maps-items input:hover,
    .create-maps-items select:hover {
        border-color: #f472b6;
    }
    .create-maps-items input:focus,
    .create-maps-items select:focus {
        outline: none;
        border-color: #e267a7;
    }
    .textarea-container {
        flex: 1;
        position: relative;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        min-height: 60px;
        background-color: #fff;
    }
    .data-textarea {
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
    .create-maps::-webkit-scrollbar,
    .data-textarea::-webkit-scrollbar {
        width: 6px;
    }
    .create-maps::-webkit-scrollbar-track,
    .data-textarea::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    .create-maps::-webkit-scrollbar-thumb,
    .data-textarea::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }
    .create-maps::-webkit-scrollbar-thumb:hover,
    .data-textarea::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
    .data-textarea:focus {
        outline: none;
    }
    .upload-btn {
        border: none;
        border-radius: 10px;
        width: 110px;
        height: 32px;
        background-color: #f472b6;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        gap: 5px;
    }
    .upload-btn:hover {
        background-color: #da609b;
    }
    .upload-btn:active {
        background-color: #b24a80;
    }
    .create-maps-btns {
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