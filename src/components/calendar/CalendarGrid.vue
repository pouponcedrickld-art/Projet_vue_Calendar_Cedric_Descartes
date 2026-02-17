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
  gap: 12px;
  max-width: 1200px;
  margin: 0 auto;
}

.calendar-day {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 2px dashed #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  min-height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.calendar-day:hover {
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  border-style: solid;
  transform: translateY(-2px);
}

.calendar-day.drag-over {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-color: #10b981;
  border-style: solid;
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
