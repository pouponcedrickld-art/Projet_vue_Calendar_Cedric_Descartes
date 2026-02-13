<script setup>
import { useEventStore } from '@/stores/eventStore'
import EventForm from './EventForm.vue'

const eventStore = useEventStore()
</script>

<template>
  <div v-if="eventStore.isModalOpen" class="overlay">
    <div class="modal">

      <div class="modal-header">
        <div>
          <h2>Add a new event</h2>
          <p class="day">{{ eventStore.selectedDay }}</p>
        </div>

        <button class="close-btn" @click="eventStore.closeModal">
          ✕
        </button>
      </div>

      <EventForm />

    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 60px;
}

.modal {
  width: 400px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

h2 {
  font-size: 20px;
  font-weight: 600;
}

.day {
  color: #f97316;
  margin-top: 5px;
}

.close-btn {
  background: #fee2e2;
  border: none;
  color: #ef4444;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
