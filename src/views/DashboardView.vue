<script setup>
import { useEventStore } from '@/stores/eventStore'
import CalendarGrid from '../components/calendar/CalendarGrid.vue';
import EventModal from '../component/event/EventModal.vue';

const eventStore = useEventStore()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-gradient-to-br from-white to-gray-100 py-[40px] px-[20px] text-center border-b border-gray-200">
    </header>

    <nav class="bg-white p-[20px] shadow-sm">
      <CalendarGrid></CalendarGrid>
    </nav>

    <!-- Modal principal pour ajouter/éditer -->
    <EventModal v-if="eventStore.isModalOpen" />
  </div>
</template>
