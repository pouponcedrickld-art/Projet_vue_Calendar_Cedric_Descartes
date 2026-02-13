import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventStore = defineStore('event', () => {

  const events = ref([])
  const isModalOpen = ref(false)
  const selectedDay = ref(null)

  function openModal(day) {
    selectedDay.value = day
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
  }

  function addEvent(title) {
    events.value.push({
      id: Date.now(),
      day: selectedDay.value,
      title
    })

    closeModal()
  }

  return {
    events,
    isModalOpen,
    selectedDay,
    openModal,
    closeModal,
    addEvent
  }
})
