<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timer = null

onMounted(() => {
  timer = setTimeout(() => {
    router.push('/datascreen')
  }, 3000)
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>