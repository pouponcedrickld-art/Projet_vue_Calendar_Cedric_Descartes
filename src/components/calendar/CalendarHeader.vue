<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { useEventStore } from '@/stores/eventStore'

// Initialisation du store pour gérer l'ouverture de la modal
const eventStore = useEventStore()
</script>

<template>
    <header class="calendar-header">
        <div class="header-content">
            <h1>Calendar App</h1>
            <BaseButton version="primary" @click="eventStore.openModal()">
                + New Event
            </BaseButton>
        </div>
    </header>
</template>



<style scoped>
.calendar-header {
    padding: 2rem 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin: 0;
}
</style>
