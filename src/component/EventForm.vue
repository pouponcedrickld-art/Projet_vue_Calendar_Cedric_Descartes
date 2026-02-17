<script setup>
import { ref } from 'vue'
import { useEventStore } from '@/stores/eventStore'

const eventStore = useEventStore()
const title = ref('')

function submit() {
  if (!title.value.trim()) return

  // Cette action dans ton store appelle déjà closeModal()
  eventStore.addEvent(title.value)

  // Reset le champ
  title.value = ''
}
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <input
      v-model="title"
      type="text"
      placeholder="New event"
      class="input"
    />

    <button type="submit" class="submit-btn">
      Submit
    </button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.input {
  width: 100%;
  border: none;
  border-bottom: 3px solid #10b981;
  padding: 12px 0;
  margin-bottom: 24px;
  outline: none;
  font-size: 15px;
  font-family: inherit;
  background: transparent;
  color: #374151;
  transition: border-color 0.2s ease;
}

.input::placeholder {
  color: #9ca3af;
}

.input:focus {
  border-bottom-color: #059669;
}

.submit-btn {
  background-color: #10b981;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;
}

.submit-btn:hover {
  background-color: #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.submit-btn:active {
  transform: scale(0.98);
}
</style>
