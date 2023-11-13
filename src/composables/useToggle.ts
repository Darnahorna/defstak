import { ref } from 'vue'

export function useToggle() {
  const toggle = ref<boolean>(false)

  const toggleOn = (): void => {
    toggle.value = true
  }
  const toggleOff = (): void => {
    toggle.value = false
  }

  return { toggle, toggleOn, toggleOff }
}
