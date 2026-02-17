import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventStore = defineStore('event', () => {
  const events = ref([])
  const isModalOpen = ref(false)
  const selectedDay = ref('Monday')
  const editingEvent = ref(null) // Stocke l'événement à modifier

  function openModal(day) {
    editingEvent.value = null // Reset édition pour un nouvel ajout
    selectedDay.value = day
    isModalOpen.value = true
  }

  function openEditModal(event) {
    editingEvent.value = event
    selectedDay.value = event.day
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
    editingEvent.value = null
  }

  function addEvent(title) {
    events.value.push({ id: Date.now(), day: selectedDay.value, title })
    closeModal()
  }

  function updateEvent(newTitle) {
    const index = events.value.findIndex(e => e.id === editingEvent.value.id)
    if (index !== -1) {
      events.value[index].title = newTitle
      events.value[index].day = selectedDay.value
    }
    closeModal()
  }

  function deleteEvent(eventId) {
    if (window.confirm('Voulez-vous vraiment supprimer ?')) {
      events.value = events.value.filter(e => e.id !== eventId)
    }
  }

  return { events, isModalOpen, selectedDay, editingEvent, openModal, openEditModal, closeModal, addEvent, updateEvent, deleteEvent }
})