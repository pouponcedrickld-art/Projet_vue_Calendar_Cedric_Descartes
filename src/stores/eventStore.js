import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventStore = defineStore('event', () => {
  const events = ref([])
  const isModalOpen = ref(false)
  const selectedDay = ref('Monday')
  const editingEvent = ref(null) // Stocke l'événement à modifier
  
  // États pour la modale de confirmation
  const isDeleteConfirmOpen = ref(false)
  const eventToDelete = ref(null)

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

  function openDeleteConfirm(eventId) {
    eventToDelete.value = eventId
    isDeleteConfirmOpen.value = true
  }

  function closeDeleteConfirm() {
    isDeleteConfirmOpen.value = false
    eventToDelete.value = null
  }

  function confirmDeleteEvent() {
    if (eventToDelete.value) {
      events.value = events.value.filter(e => e.id !== eventToDelete.value)
      closeDeleteConfirm()
    }
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

  function moveEvent(eventId, currentDay, targetDay) {
    if (currentDay === targetDay) return
    
    const index = events.value.findIndex(e => e.id === eventId)
    if (index !== -1) {
      events.value[index].day = targetDay
    }
  }

  return { 
    events, 
    isModalOpen, 
    selectedDay, 
    editingEvent,
    isDeleteConfirmOpen,
    eventToDelete,
    openModal, 
    openEditModal, 
    closeModal, 
    addEvent, 
    updateEvent, 
    confirmDeleteEvent,
    moveEvent,
    openDeleteConfirm,
    closeDeleteConfirm
  }
})