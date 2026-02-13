<script setup>
import { ref } from 'vue'
import { useEventStore } from '@/stores/eventStore'

const eventStore = useEventStore()
const title = ref('')

function submit() {
  if (!title.value) return
  eventStore.addEvent(title.value)
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
  margin-top: 25px;
}

.input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #e5e7eb;
  padding: 10px 0;
  margin-bottom: 20px;
  outline: none;
}

.submit-btn {
  background-color: #22c55e;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
</style>
