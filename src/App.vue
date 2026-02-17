<script setup>
// App.vue ne contient que le layout commun
// Le calendrier est dans DashboardView.vue
import { useEventStore } from '@/stores/eventStore'
import EventModal from './component/event/EventModal.vue';
import ConfirmModal from './components/ui/ConfirmModal.vue';

const eventStore = useEventStore()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-gradient-to-br from-white to-gray-100 py-[40px] px-[20px] text-center border-b border-gray-200">
      <h1 class="text-[32px] font-bold text-gray-800 tracking-[-0.5px]">Calendar App</h1>
    </header>

    <!-- Affiche uniquement le composant de route -->
    <router-view></router-view>

    <!-- Modal principal pour ajouter/éditer -->
    <EventModal v-if="eventStore.isModalOpen" />
    
    <!-- Modal de confirmation de suppression -->
    <ConfirmModal
      :is-open="eventStore.isDeleteConfirmOpen"
      title="Confirmation de suppression"
      message="Voulez-vous vraiment supprimer cet événement ?"
      confirm-text="Supprimer"
      @confirm="eventStore.confirmDeleteEvent"
      @cancel="eventStore.closeDeleteConfirm"
    />
  </div>
</template> 
