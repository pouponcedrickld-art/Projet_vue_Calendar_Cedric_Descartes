<script setup>
import { useEventStore } from '@/stores/eventStore'
import EventForm from './EventForm.vue'

const eventStore = useEventStore()
</script>

<template>
  <div class="bottom-modal">
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
.bottom-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e0e5ec;
  padding: 28px;
  border-radius: 24px 24px 0 0;
  box-shadow: 
    0 -20px 60px #a3b1c6,
    0 20px 60px #ffffff;
  z-index: 1000;
  animation: slideUp 0.4s ease-out;
  transform: translateY(100%);
  transition: transform 0.4s ease-out;
}

.bottom-modal.show {
  transform: translateY(0);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #cbd5e0;
}

.modal-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.modal-header .day {
  font-size: 14px;
  color: #718096;
  margin: 4px 0 0 0;
}

.close-btn {
  background: #e0e5ec;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  font-size: 18px;
  color: #718096;
  cursor: pointer;
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transform: translateY(-2px);
  color: #2d3748;
}

.close-btn:active {
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
  transform: scale(0.95);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .bottom-modal {
    padding: 20px;
    border-radius: 20px 20px 0 0;
  }
  
  .modal-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>