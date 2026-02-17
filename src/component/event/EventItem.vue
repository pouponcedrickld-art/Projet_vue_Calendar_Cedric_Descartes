<script setup>
import { useEventStore } from '@/stores/eventStore'

const props = defineProps({
  event: Object
})

const eventStore = useEventStore()

function handleDragStart(dragEvent) {
  // Récupérer l'événement depuis les props
  const eventData = props.event
  
  // Validation des données avant de les transférer
  if (!eventData || !eventData.id || !eventData.day) {
    console.error('Données d\'événement invalides:', eventData)
    return
  }
  
  const dragData = {
    eventId: eventData.id,
    currentDay: eventData.day
  }
  
  try {
    // Forcer l'utilisation de l'événement original
    const originalEvent = dragEvent.originalEvent || dragEvent
    if (originalEvent && originalEvent.dataTransfer) {
      originalEvent.dataTransfer.setData('text/plain', JSON.stringify(dragData))
      originalEvent.dataTransfer.effectAllowed = 'move'
      console.log('Drag data set:', dragData)
    } else {
      console.error('dataTransfer non disponible. Événement:', originalEvent || dragEvent)
    }
  } catch (error) {
    console.error('Erreur lors de la configuration du drag:', error)
  }
}
</script>

<template>
  <div 
    class="event-item"
    draggable="true"
    @dragstart="handleDragStart($event)"
  >
    <span>{{ props.event.title }}</span>
    <button @click.stop="eventStore.openEditModal(props.event)">✏️</button>
    <button @click.stop="eventStore.openDeleteConfirm(props.event.id)">🗑️</button>
  </div>
</template>

<style scoped>
.event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #047857;
  padding: 10px;
  border-radius: 6px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  border-left: 4px solid #10b981;
  transition: all 0.2s ease;
  cursor: grab;
  user-select: none;
}

.event-item:hover {
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  transform: translateX(2px);
}

.event-item:active {
  cursor: grabbing;
  opacity: 0.8;
  transform: scale(0.98);
}

.event-item button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  padding: 0;
}

.event-item button:hover {
  opacity: 1;
}
</style>
