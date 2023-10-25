import { ref } from 'vue'

export function useToggle() {
  const toggle = ref(false)

  function toggleOn() {
    toggle.value = true
  }
  function toggleOff() {
    toggle.value = false
  }

  return { toggleOn, toggleOff, toggle }
}
