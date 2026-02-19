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
    <span class="event-title">{{ props.event.title }}</span>
    <div class="event-actions">
      <button @click.stop="eventStore.openEditModal(props.event)" class="action-btn">✏️</button>
      <button @click.stop="eventStore.openDeleteConfirm(props.event.id)" class="action-btn">🗑️</button>
    </div>
  </div>
</template>

<style scoped>
.event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e0e5ec;
  color: #2d3748;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
  cursor: grab;
  user-select: none;
  position: relative;
}

.event-item:hover {
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transform: translateY(-1px);
}

.event-item:active {
  cursor: grabbing;
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
  transform: scale(0.98);
}

.event-title {
  flex: 1;
  font-weight: 500;
  color: #2d3748;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.event-actions {
  display: flex;
  gap: 6px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.event-item:hover .event-actions {
  opacity: 1;
}

.action-btn {
  background: #e0e5ec;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 6px;
  border-radius: 12px;
  box-shadow: 
    3px 3px 6px #a3b1c6,
    -3px -3px 6px #ffffff;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}

.action-btn:hover {
  box-shadow: 
    5px 5px 10px #a3b1c6,
    -5px -5px 10px #ffffff;
  transform: translateY(-1px);
}

.action-btn:active {
  box-shadow: 
    inset 2px 2px 4px #a3b1c6,
    inset -2px -2px 4px #ffffff;
  transform: scale(0.95);
}

/* Animation d'apparition */
.event-item {
  animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .event-item {
    padding: 10px;
    font-size: 12px;
    border-radius: 14px;
  }
  
  .action-btn {
    width: 24px;
    height: 24px;
    font-size: 12px;
    padding: 4px;
  }
}
</style>
