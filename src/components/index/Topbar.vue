<script setup>
import getConfig from '@/utils/config'

const config = getConfig()
</script>
<template>
    <div class="topbar">
        <div class="logo" @click="router.push('/')">
            <img src="@/assets/logo.svg" alt="logo" />
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
        background-color: rgba(255,255,255,0.2);
        backdrop-filter: blur(3px);
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
</style>