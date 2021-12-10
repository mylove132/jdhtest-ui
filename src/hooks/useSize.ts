import { onMounted, reactive, toRefs, isRef, nextTick } from 'vue'
import useWinResize from './useWinResize'
/**
 *
 * @param {dom id节点或者 ref句柄} target
 */
export default function useSize(target: any) {
  const size = reactive({
    width: 0,
    height: 0,
  })
  const getSizeInfo = () => {
    const targetDom: any = isRef(target) ? target.value : document.getElementById(target)
    size.width = targetDom.offsetWidth
    size.height = targetDom.offsetHeight
  }
  useWinResize(getSizeInfo)
  onMounted(() => {
    setTimeout(() => {
      getSizeInfo()
    }, 120)
  })
  return { ...toRefs(size) }
}
