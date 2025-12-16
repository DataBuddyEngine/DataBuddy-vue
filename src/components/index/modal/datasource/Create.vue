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
    <div class="create-datasource">
        <div class="datasource-grid">
            <div class="grid-item">
                <span><span style="color:red;">*</span>名称: </span>
                <input type="text" placeholder="请输入 名称">
            </div>
            <div class="grid-item">
                <span><span style="color:red;">*</span>类型: </span>
                <select><option>请选择类型</option></select>
            </div>
            <div class="grid-item">
                <span><span style="color:red;">*</span>用户名: </span>
                <input type="text" placeholder="请输入 用户名">
            </div>
            <div class="grid-item">
                <span><span style="color:red;">*</span>密码: </span>
                <input type="password" placeholder="请输入 密码">
            </div>
            <div class="grid-item">
                <span><span style="color:red;">*</span>连接地址: </span>
                <input type="text" placeholder="请输入 连接地址">
            </div>
            <div class="grid-item">
                <span><span style="color:red;">*</span>数据库名: </span>
                <input type="text" placeholder="请输入 数据库名">
            </div>
            <div class="grid-item full-width grid-column remark-item">
                <span>备注: </span>
                <textarea placeholder="请输入 备注"></textarea>
            </div>
        </div>
    </div>
    <div class="create-datasource-btns">
        <button class="confirm-btn" @click="devTips"><i class="fa-solid fa-check"></i> 保存</button>
        <button class="cancel-btn" @click="handleClose"><i class="fa-solid fa-xmark"></i> 取消</button>
        <button class="test-btn" @click="devTips"><i class="fa-solid fa-link"></i> 测试连接</button>
    </div>
</template>
<style scoped>
    .create-datasource {
        position: absolute;
        top: 45px;
        left: 15px;
        right: 15px;
        bottom: 70px;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
    }
    .create-datasource::-webkit-scrollbar {
        width: 6px;
    }
    .create-datasource::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    .create-datasource::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }
    .create-datasource::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
    .datasource-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px 20px;
        padding: 0 10px;
        box-sizing: border-box;
        width: 100%;
    }
    .grid-column {
        grid-column: span 2;
    }
    .grid-item {
        display: flex;
        align-items: flex-start;
        min-height: 40px;
        margin-bottom: 5px;
    }
    .grid-item span:first-child {
        width: 100px;
        text-align: right;
        margin-right: 15px;
        flex-shrink: 0;
        line-height: 32px;
    }
    .grid-item input,
    .grid-item select,
    .grid-item textarea {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
        width: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .grid-item input:hover,
    .grid-item select:hover,
    .grid-item textarea:hover {
        border-color: #f472b6;
    }
    .grid-item input:focus,
    .grid-item select:focus,
    .grid-item textarea:focus {
        outline: none;
        border-color: #e267a7;
    }
    .remark-item span:first-child {
        width: 100px;
        text-align: right;
        margin-bottom: 8px;
        margin-right: 15px;
        flex-shrink: 0;
        line-height: 1.5;
    }
    .remark-item textarea {
        height: 250px;
        resize: vertical;
        min-height: 100px;
        line-height: 1.5;
        padding: 12px;
        width: 100% !important;
        box-sizing: border-box;
    }
    @media (max-width: 768px) {
        .datasource-grid {
            grid-template-columns: 1fr;
        }
        .grid-column {
            grid-column: span 1 !important;
        }
        .grid-item {
            flex-direction: row;
            align-items: flex-start;
            width: 100%;
        }
        .grid-item span:first-child {
            width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-shrink: 0;
        }
        .grid-item input,
        .grid-item select,
        .grid-item textarea {
            width: calc(100% - 115px);
        }
        .remark-item textarea {
            width: calc(100% - 115px) !important;
            min-height: 120px;
        }
    }
    .create-datasource-btns {
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
    .test-btn {
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
    .test-btn {
        width: 108px;
        background-color: #f472b6;
        color: #fff;
    }
    .test-btn:hover {
        background-color: #da5a9e;
    }
    .test-btn:active {
        background-color: #b23a80;
    }
</style>