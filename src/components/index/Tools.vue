<template>
    <div class="tools-item">
        <h2>大屏轮播</h2>
        <input type="text" placeholder="请输入大屏ID多个用','间隔" class="tools-item-input"></input>
        <button class="tools-item-btn">预览大屏</button>
    </div>
    <div class="tools-item">
        <h2>HTML 页面</h2>
        <input type="text" placeholder="请输入大屏ID" class="tools-item-input"></input>
        <button class="tools-item-btn">预览大屏</button>
    </div>
</template>
<style>
    .tools-item {
        margin-left: 20px;
        color: #333;
        text-shadow: 1px 1px 4px rgba(255,255,255,0.4);
    }
    .tools-item-input {
        margin-top: -24px;
        width: calc(100vw - 380px);
        height: 32px;
        font-size: 15px;
        padding: 0 10px;
        border: none;
        border-radius: 10px;
        background-color: rgba(255,255,255,0.3);
    }
    .tools-item-input:hover {
        background-color: rgba(255,255,255,0.4);
    }
    .tools-item-input:focus {
        outline: none;
        background-color: rgba(255,255,255,0.5);
    }
    .tools-item-btn {
        margin-left: 5px;
        width: 90px;
        height: 32px;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        background-color: rgba(255,255,255,0.3);
        color: #333;
        cursor: pointer;
    }
    .tools-item-btn:hover {
        background-color: rgba(255,255,255,0.4);
    }
    .tools-item-btn:active {
        background-color: rgba(255,255,255,0.5);
    }
</style>