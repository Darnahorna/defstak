import { ref } from 'vue'

export function useToggle() {
  const toggle = ref(false)

  const toggleOn = () => {
    toggle.value = true
  }
  const toggleOff = () => {
    toggle.value = false
  }

  return { toggle, toggleOn, toggleOff }
}
