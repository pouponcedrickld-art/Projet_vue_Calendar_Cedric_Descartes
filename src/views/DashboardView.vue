<script setup>
import { useEventStore } from '@/stores/eventStore'
import CalendarGrid from '../components/calendar/CalendarGrid.vue';
import EventModal from '../component/event/EventModal.vue';

const eventStore = useEventStore()
</script>

<template>
  <div class="min-h-screen bg-[#e0e5ec] p-8">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold text-[#2d3748] mb-2">Calendar App</h1>
      <p class="text-[#718096]">Gérez votre semaine en douceur</p>
    </header>

    <nav class="max-w-6xl mx-auto">
      <div class="bg-[#e0e5ec] rounded-3xl p-8 shadow-soft">
        <CalendarGrid></CalendarGrid>
      </div>
    </nav>

    <!-- Modal permanent en bas, contrôlé par l'état -->
    <EventModal :class="{ 'show': eventStore.isModalOpen }" />
  </div>
</template>

<style scoped>
/* Styles Neumorphism de base */
.shadow-soft {
  box-shadow: 
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.shadow-soft-inset {
  box-shadow: 
    inset 20px 20px 60px #bebebe,
    inset -20px -20px 60px #ffffff;
}

/* Animation subtile */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

header {
  animation: fadeIn 0.8s ease-out;
}

nav > div {
  animation: fadeIn 1s ease-out 0.2s both;
}
</style>
