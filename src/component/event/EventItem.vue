<script setup>
import { useEventStore } from '@/stores/eventStore'

defineProps({
  event: Object
})

const eventStore = useEventStore()
</script>

<template>
  <div class="event-item">
    <span>{{ event.title }}</span>
    <button @click.stop="eventStore.openEditModal(event)">✏️</button>
    <button @click.stop="eventStore.deleteEvent(event.id)">🗑️</button>
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
}

.event-item:hover {
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  transform: translateX(2px);
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
