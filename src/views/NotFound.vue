<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getConfig from '@/utils/config'

const route = useRoute()
const router = useRouter()
const config = getConfig()

onMounted(() => {
  document.title = '页面未找到 - ' + config.title
  document.body.style.background = "url('"+config.backgroundImg+"') no-repeat center center fixed"
  document.body.style.backgroundSize = "cover"

  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';

  if (config.cdnUrl && config.cdnUrl !== "") {
    linkElement.href = `${config.cdnUrl}/assets/font-awesome/css/all.min.css`;
  } else {
    linkElement.href = '@/assets/font-awesome/css/all.min.css';
  }

  document.head.appendChild(linkElement);

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: route.path,
      page_title: '404 - Page Not Found'
    })
  }
})
</script>
<template>
    <div class="container">
        <i class="fa-solid fa-ban"></i>
        <div class="right-container">
            <h1>页面未找到</h1>
            <p>抱歉，您正在寻找的页面不存在。</p>
            <button class="go-home-button" @click="router.push('/')">
                <i class="fa-solid fa-arrow-left"></i>
                <span class="go-home-button-text">返回首页</span>
            </button>
        </div>
    </div>
</template>
<style scoped>
    .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        border-radius: 20px;
        backdrop-filter: blur(3px);
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
        border: 1px solid rgba(255,255,255,0.4);
        box-shadow:
            0 8px 32px rgba(0,0,0,0.2),
            inset 0 4px 20px rgba(255,255,255,0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container i {
        position: absolute;
        font-size: 256px;
        color: #000;
        left: 32px;
    }
    .right-container {
        position: absolute;
        width: calc(100% - 416px);
        right: 32px;
        text-align: center;
    }
    .right-container h1,
    .right-container p {
        padding: 8px;
    }
    .go-home-button {
        height: 48px;
        width: 210px;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 0.1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        backdrop-filter: blur(3px);
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
    .go-home-button i {
        position: absolute;
        font-size: 18px;
        left: 12px;
        bottom: 14px;
    }
    .go-home-button .go-home-button-text {
        position: absolute;
        right: 12px;
        bottom: 11px;
        font-size: 18px;
    }
    .go-home-button:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    .go-home-button:active {
        background-color: rgba(255, 255, 255, 0.6);
    }
    @media (max-width: 768px) {
        .container {
            width: 90%;
            height: 95%;
        }
        .container i {
            font-size: 128px;
            left: auto;
            top: 64px;
        }
        .right-container {
            width: 100%;
            height: calc(100% - 256px);
            right: 0;
            bottom: 32px;
        }
        .go-home-button i {
            font-size: 18px;
            left: 12px;
            top: 14px;
        }
    }
    @media (max-width: 480px) {
        .container-404 {
            width: 95%;
        }
    }
</style>