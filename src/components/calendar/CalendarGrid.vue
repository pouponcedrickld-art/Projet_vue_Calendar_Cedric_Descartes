<script setup>
import { useEventStore } from '@/stores/eventStore'
import EventItem from '../../component/event/EventItem.vue';
import { ref } from 'vue'

const eventStore = useEventStore()
const draggedOverDay = ref(null)

const days = [
  'Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday','Sunday'
]

function selectDay(day) {
  eventStore.openModal(day)
}

function handleDragOver(event, day) {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
  draggedOverDay.value = day
}

function handleDragLeave() {
  draggedOverDay.value = null
}

function handleDrop(event, targetDay) {
  event.preventDefault()
  const data = event.dataTransfer.getData('text/plain')
  
  // Validation des données
  if (!data || data.trim() === '') {
    console.log('Aucune donnée à déplacer')
    return
  }
  
  try {
    const parsedData = JSON.parse(data)
    if (!parsedData.eventId || !parsedData.currentDay) {
      console.log('Données invalides:', parsedData)
      return
    }
    eventStore.moveEvent(parsedData.eventId, parsedData.currentDay, targetDay)
  } catch (error) {
    console.error('Error parsing drag data:', error)
    console.log('Raw data received:', data)
  }
  draggedOverDay.value = null
}
</script>

<template>
  <div class="calendar-grid">
    <div
      v-for="day in days"
      :key="day"
      class="calendar-day"
      :class="{ 'drag-over': draggedOverDay === day }"
      @click="selectDay(day)"
      @dragover="handleDragOver($event, day)"
      @dragleave="handleDragLeave"
      @drop="handleDrop($event, day)"
    >
      <div class="day-title">{{ day }}</div>

      <EventItem
        v-for="event in eventStore.events.filter(e => e.day === day)"
        :key="event.id"
        :event="event"
      />
    </div>
  </div>
</template>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  width: 100%;
}

.calendar-day {
  display: flex;
  flex-direction: column;
  background: #e0e5ec;
  border-radius: 20px;
  padding: 20px;
  min-height: 220px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    9px 9px 16px #a3b1c6,
    -9px -9px 16px #ffffff;
  position: relative;
  overflow: hidden;
}

.calendar-day:hover {
  box-shadow: 
    12px 12px 24px #a3b1c6,
    -12px -12px 24px #ffffff;
  transform: translateY(-2px);
}

.calendar-day.drag-over {
  background: #d1d9e0;
  box-shadow: 
    inset 6px 6px 12px #a3b1c6,
    inset -6px -6px 12px #ffffff;
  transform: scale(1.02);
}

.day-title {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 12px;
  border-bottom: 2px solid #cbd5e0;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .calendar-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  
  .calendar-day {
    min-height: 180px;
    padding: 16px;
  }
}

@media (max-width: 768px) {
  .calendar-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .calendar-day {
    min-height: 150px;
    padding: 12px;
    border-radius: 16px;
  }
  
  .day-title {
    font-size: 12px;
  }
}
</style>
