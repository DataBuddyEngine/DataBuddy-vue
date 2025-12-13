<script setup>
import { onMounted, onUnmounted } from 'vue'
import getConfig from '@/utils/config'
import { useRouter } from 'vue-router'

const config = getConfig()
const router = useRouter()

let intervalId;

const updateTime = () => {
    const now = new Date();
    const timeString = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()]} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    document.getElementById('time').textContent = timeString;
}

onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
})

onUnmounted(() => {
    clearInterval(intervalId);
})
</script>
<template>
    <div class="topbar">
        <div class="logo" @click="router.push('/')">
            <img src="@/assets/logo.svg" alt="logo" />
        </div>
        <div class="topbar-left">
            <button @click="router.push('/')">{{ config.title }}</button>
        </div>
        <div class="topbar-right">
            <div id="time"></div>
        </div>
    </div>
</template>
<style>
    .topbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 32px;
        background-color: rgba(255,255,255,0.15);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        z-index: 2;
    }
    .logo {
        position: fixed;
        top: 6px;
        left: 10px;
    }
    .logo img {
        width: 20px;
        height: 20px;
    }
    .topbar-left,
    .topbar-right {
        position: fixed;
        top: 3px;
        font-size: 16px;
        color: #fff;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    }
    .topbar-left {
        left: 35px;
    }
    .topbar-right {
        right: 16px;
    }
    .topbar-left button,
    .topbar-right button {
        border: none;
        background-color: transparent;
        font-size: 16px;
        color: #fff;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
    }
</style>