<script setup>
import { ref } from 'vue';
import CalendarHeader from '@/components/calendar/CalendarHeader.vue';
import CalendarGrid from '@/components/calendar/CalendarGrid.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseModal from '@/components/ui/BaseModal.vue';
import BaseInput from '@/components/ui/BaseInput.vue';

const showModal = ref(false);
const newEventName = ref('');
</script>
<template>
    <div class="calendar-view">
        <CalendarHeader />
        <main class="container">
            <div class="actions">
                <BaseButton @click="showModal = true">+ New Event</BaseButton>
            </div>
            <CalendarGrid />
        </main>

        <BaseModal v-if="showModal" @close="showModal = false">
            <h2>Add a new event</h2>
            <BaseInput v-model="newEventName" placeholder="Event name" />
            <BaseButton @click="showModal = false" style="margin-top: 10px">Submit</BaseButton>
        </BaseModal>
    </div>
</template>



<style scoped>
.container {
    padding: 20px;
}

.actions {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}
</style>