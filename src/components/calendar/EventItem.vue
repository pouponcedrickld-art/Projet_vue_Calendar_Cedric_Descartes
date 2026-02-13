<template>
    <div class="event-item">
        <span>{{ eventText }}</span>
        <div class="actions">
            <button @click="$emit('edit')">✏️</button> <button @click="$emit('delete')">🗑️</button>
        </div>
    </div>
</template>

<script setup>
defineProps(['eventText']);
defineEmits(['edit', 'delete']);
</script>

<style scoped>
.event-item {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 5px;
    background: #e7f3e8;
    border-left: 5px solid #28a745;
    border-radius: 4px;
}

.actions button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>