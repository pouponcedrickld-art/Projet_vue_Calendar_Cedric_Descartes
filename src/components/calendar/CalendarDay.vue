
<script setup>
defineProps(['dayName']); // Reçoit le nom du jour (ex: "Monday")
</script>
<template>
    <div class="calendar-day">
        <h3 class="day-label">{{ dayName }}</h3>
        <div class="events-zone">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.calendar-day {
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  min-height: 120px;
  padding: 12px 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.calendar-day:hover {
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
  border-color: #10b981;
}

.day-label {
  font-size: 12px;
  font-weight: 700;
  color: #6b7280;
  margin: 0 0 8px 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.events-zone {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
}
</style>