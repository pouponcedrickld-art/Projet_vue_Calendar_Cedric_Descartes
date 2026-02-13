<script setup>
import { useEventStore } from '@/stores/eventStore'
import EventItem from './event/EventItem.vue';
const eventStore = useEventStore()

const days = [
  'Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday','Sunday'
]
</script>

<template>
  <div class="calendar-grid">
    <div
      v-for="day in days"
      :key="day"
      class="calendar-day"
      @click="eventStore.openModal(day)"
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
