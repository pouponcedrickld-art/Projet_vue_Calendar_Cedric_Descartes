<script setup>
import { useEventStore } from '@/stores/eventStore'
import EventItem from './event/EventItem.vue';
import { ref } from 'vue'

const eventStore = useEventStore()
const draggedOverDay = ref(null)

const days = [
  'Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday','Sunday'
]

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
  console.log('Drop event:', event)
  console.log('Target day:', targetDay)
  
  const data = event.dataTransfer.getData('text/plain')
  console.log('Raw data:', data)
  
  try {
    const parsedData = JSON.parse(data)
    console.log('Parsed data:', parsedData)
    eventStore.moveEvent(parsedData.eventId, parsedData.currentDay, targetDay)
  } catch (error) {
    console.error('Error parsing data:', error)
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
      @click="eventStore.openModal(day)"
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
  gap: 12px;
  max-width: 1200px;
  margin: 0 auto;
}

.calendar-day {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  min-height: 200px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.calendar-day:hover {
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  transform: translateY(-2px);
}

.calendar-day.drag-over {
  background-color: #f0fdf4;
  border-color: #10b981;
  border-width: 2px;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.day-title {
  font-size: 13px;
  font-weight: 700;
  color: #6b7280;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f3f4f6;
}
</style>