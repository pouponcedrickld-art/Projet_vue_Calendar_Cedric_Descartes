<script setup>
import { ref, watchEffect } from 'vue'
import { useEventStore } from '@/stores/eventStore'

const eventStore = useEventStore()
const title = ref('')

// Remplit le champ automatiquement si on édite
watchEffect(() => {
    title.value = eventStore.editingEvent ? eventStore.editingEvent.title : ''
})

function submit() {
    if (!title.value.trim()) return

    if (eventStore.editingEvent) {
      // Pour la modification, on sauvegarde directement
      eventStore.updateEvent(title.value)
      title.value = ''
    } else {
      // Pour l'ajout, on ajoute directement
      eventStore.addEvent(title.value)
      title.value = ''
    }
  }
</script>

<template>
    <form @submit.prevent="submit" class="form">
        <input v-model="title" type="text" placeholder="Event title..." class="input" autofocus />
        <button type="submit" class="submit-btn">
            {{ eventStore.editingEvent ? 'Save Changes' : 'Submit' }}
        </button>
    </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input {
  background: #e0e5ec;
  border: none;
  border-radius: 16px;
  padding: 16px 20px;
  font-size: 16px;
  color: #2d3748;
  box-shadow: 
    inset 6px 6px 12px #a3b1c6,
    inset -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
  outline: none;
}

.input::placeholder {
  color: #718096;
  opacity: 0.7;
}

.input:focus {
  box-shadow: 
    inset 8px 8px 16px #a3b1c6,
    inset -8px -8px 16px #ffffff;
  transform: scale(1.02);
}

.submit-btn {
  background: #e0e5ec;
  border: none;
  border-radius: 16px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  cursor: pointer;
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  box-shadow: 
    10px 10px 20px #a3b1c6,
    -10px -10px 20px #ffffff;
  transform: translateY(-2px);
}

.submit-btn:active {
  box-shadow: 
    inset 6px 6px 12px #a3b1c6,
    inset -6px -6px 12px #ffffff;
  transform: scale(0.98);
}

/* Effet de brillance subtil */
.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: left 0.5s ease;
}

.submit-btn:hover::before {
  left: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .input {
    padding: 14px 18px;
    font-size: 14px;
  }
  
  .submit-btn {
    padding: 14px 20px;
    font-size: 14px;
  }
}
</style>