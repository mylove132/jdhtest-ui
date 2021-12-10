import { ref, onMounted, onUnmounted, watch } from 'vue'

export default function useCountDown(Action: () => void, num: any) {
  const count = ref(num)
  let timer: NodeJS.Timer | null = null
  onMounted(() => {
    timer = setInterval(() => {
      count.value--
    }, 1000)
  })
  watch([count], () => {
    if (count.value === 0) {
      timer && clearInterval(timer)
      Action()
    }
  })
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return count
}
