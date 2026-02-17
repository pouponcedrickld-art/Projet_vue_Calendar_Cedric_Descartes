<script setup>
import { useEventStore } from '@/stores/eventStore'
import CalendarGrid from './components/calendar/CalendarGrid.vue';
import EventModal from './component/event/EventModal.vue';

const eventStore = useEventStore()

</script>

<template>
   <div class="min-h-screen bg-gray-100">
    <header class="bg-gradient-to-br from-white to-gray-100 py-[40px] px-[20px] text-center border-b border-gray-200">
  
      <h1 class="text-[32px] font-bold text-gray-800 tracking-[-0.5px]">Calendar App</h1>
    </header>

    <nav class="bg-white p-[20px] shadow-sm">
      <CalendarGrid></CalendarGrid>
    </nav>

    <main class="max-w-[1200px] mx-auto p-[20px]">
    </main>

    <EventModal v-if="eventStore.isModalOpen" />
  </div> 
</template> 
