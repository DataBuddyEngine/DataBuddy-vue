<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

const notifications = ref([])
const timeouts = ref([])

const visibleNotifications = computed(() => {
  return notifications.value
    .filter(n => n && n.show)
    .sort((a, b) => a.createdAt - b.createdAt)
})

const clearAllTimeouts = () => {
  timeouts.value.forEach(timer => clearTimeout(timer))
  timeouts.value = []
}

const addNotification = (content, theme = 'success', duration = 3000) => {
  if (!content) return
  
  const id = Date.now() + Math.random().toString(36).slice(2, 9)
  const createdAt = Date.now()
  
  const notification = {
    id,
    content,
    theme,
    show: true,
    height: 0,
    createdAt
  }
  
  notifications.value.push(notification)
  
  nextTick(() => {
    const stillExists = notifications.value.some(n => n.id === id)
    if (!stillExists) return
    
    const el = document.getElementById(`notification-${id}`)
    if (el) {
      const styles = window.getComputedStyle(el)
      const margin = parseFloat(styles.marginBottom) || 15
      notification.height = el.offsetHeight + margin
    }
  })
  
  const timer = setTimeout(() => {
    removeNotification(id)
  }, duration)
  timeouts.value.push(timer)
  
  if (notifications.value.length > 10) {
    removeNotification(notifications.value[0].id)
  }
  
  return id
}

const removeNotification = (id) => {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index === -1) return
  
  const notification = notifications.value[index]
  notification.show = false

  const visibleNotifs = notifications.value.filter(n => n.show).sort((a, b) => a.position - b.position);
  visibleNotifs.forEach((notif, i) => {
    notif.position = i;
  });
  
  const timer = setTimeout(() => {
    const currentIndex = notifications.value.findIndex(n => n.id === id)
    if (currentIndex === -1) return
    
    notifications.value.splice(currentIndex, 1)
    
    for (let i = currentIndex; i < notifications.value.length; i++) {
      notifications.value[i].position -= 1
    }
  }, 350)
  timeouts.value.push(timer)
}

defineExpose({
  addNotification,
  success: (content, duration) => addNotification(content, 'success', duration),
  error: (content, duration) => addNotification(content, 'error', duration),
  warning: (content, duration) => addNotification(content, 'warning', duration),
  info: (content, duration) => addNotification(content, 'info', duration)
})

const getTopPosition = (index) => {
  let top = 35;
  for (let i = 0; i < index; i++) {
    const notification = visibleNotifications.value[i];
    if (notification && notification.height) {
      top += notification.height;
    } else {
      top += 70;
    }
  }
  return `${top}px`;
}

const props = defineProps({
  content: String,
  theme: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  duration: {
    type: Number,
    default: 3000
  }
})

watch(() => props.content, (newVal) => {
  if (newVal) {
    addNotification(newVal, props.theme, props.duration)
  }
})

onMounted(() => {
  if (props.content) {
    addNotification(props.content, props.theme, props.duration)
  }
})

onUnmounted(() => {
  clearAllTimeouts()
})
</script>

<template>
  <div class="notifications-container">
    <transition-group name="slide-fade" tag="div">
      <div v-for="(notif, index) in visibleNotifications" :key="notif.id" :id="`notification-${notif.id}`" class="tip-container"  :class="`theme-${notif.theme}`" :style="{ top: getTopPosition(index) }">
        {{ notif.content }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.notifications-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
}

.tip-container {
  position: absolute;
  right: 16px;
  z-index: 9999;
  padding: 20px 12px;
  border-radius: 15px;
  min-width: 280px;
  max-width: 80%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: white;
  text-align: center;
  pointer-events: auto;
  transition: all 0.3s ease;
}

.theme-success {
  background: linear-gradient(135deg, #4caf50, #43a047);
}

.theme-error {
  background: linear-gradient(135deg, #f44336, #e53935);
}

.theme-warning {
  background: linear-gradient(135deg, #ff9800, #fb8c00);
}

.theme-info {
  background: linear-gradient(135deg, #2196f3, #1e88e5);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translate(20px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translate(0);
}

@media (max-width: 480px) {
  .tip-container {
    min-width: 70%;
    max-width: 80%;
    padding: 10px 15px;
    left: 50%;
    transform: translateX(-50%);
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translate(-50%, -20px);
  }
  .slide-fade-enter-to,
  .slide-fade-leave-from {
    transform: translate(-50%, 0);
  }
}
</style>