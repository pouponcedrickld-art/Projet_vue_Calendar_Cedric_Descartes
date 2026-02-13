<script setup>
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
</script>

<template>
    <div class="calendar-grid">
        <div v-for="day in days" :key="day" class="day-header">
            {{ day }}
        </div>
    </div>
</template>



<style scoped>
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid #ddd;
}

.day-header {
    padding: 10px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
}
</style>