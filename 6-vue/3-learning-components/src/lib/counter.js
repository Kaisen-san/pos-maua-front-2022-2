import { ref, computed } from 'vue'

export const count = ref(0)
export const doubleCount = computed(() => count.value * 2)

export function addCount() {
  console.log(count)
  count.value++
}
