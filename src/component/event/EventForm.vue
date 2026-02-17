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