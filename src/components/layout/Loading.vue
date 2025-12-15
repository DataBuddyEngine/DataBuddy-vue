<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.title = 'Loading...'
    const loadingScreen = document.querySelector('.loading');
    setTimeout(() => {
        loadingScreen.classList.add('active');
    }, 100);
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2400);
})
</script>
<template>
    <div class="loading">
        <div class="title">DataBuddy</div>
        <div class="loading-bar">
            <div class="loading-line"></div>
        </div>
    </div>
</template>
<style>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: #fff;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        -webkit-font-smoothing: antialiased;
        z-index: 9999;
    }
    .loading.active {
        opacity: 1;
    }
    .loading.fade-out {
        opacity: 0;
        pointer-events: none;
    }
    .title {
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        font-weight: bold;
    }
    .loading-bar {
        position: fixed;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 4px;
        background-color: #e0e0e0;
        border-radius: 2px;
        overflow: hidden;
    }
    .loading-line {
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, #f472b6, transparent);
        background-size: 200% 100%;
        animation: loading 1.5s infinite linear;
    }
    @keyframes loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -100% 0;
        }
    }
</style>