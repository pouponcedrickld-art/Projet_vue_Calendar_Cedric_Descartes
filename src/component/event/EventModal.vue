<script setup>
import { useEventStore } from '@/stores/eventStore'
import EventForm from './EventForm.vue'

const eventStore = useEventStore()
</script>

<template>
  <div class="fixed-side-modal">
    <div class="modal-header">
      <div>
        <h2>{{ eventStore.editingEvent ? 'Edit Event' : 'Add a new event' }}</h2>
        <p class="day">{{ eventStore.selectedDay }}</p>
      </div>
      <button class="close-btn" @click="eventStore.closeModal">✕</button>
    </div>

    <EventForm />
  </div>
</template>

<style scoped>
.fixed-side-modal {
  position: fixed;
  top: 40px;
  /* Fixé en haut */
  right: 40px;
  /* Fixé à droite */
  width: 350px;
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* Rappel visuel vert */
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

h2 {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.day {
  color: #f97316;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.close-btn {
  background: #fef2f2;
  border: none;
  color: #ef4444;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>