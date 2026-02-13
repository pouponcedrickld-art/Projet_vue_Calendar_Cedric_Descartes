<template>
    <div class="calendar-day">
        <h3 class="day-label">{{ dayName }}</h3>
        <div class="events-zone">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps(['dayName']); // Reçoit le nom du jour (ex: "Monday")
</script>

<style scoped>
.calendar-day {
    border: 1px solid #ddd;
    min-height: 300px;
    background: #fff;
}

.day-label {
    padding: 10px;
    background: #f4f4f4;
    text-align: center;
    border-bottom: 1px solid #ddd;
}

.events-zone {
    padding: 5px;
}
</style>