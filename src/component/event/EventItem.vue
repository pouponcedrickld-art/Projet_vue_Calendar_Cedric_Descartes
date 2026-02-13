<script setup>
defineProps({
  event: Object
})
</script>

<template>
  <div class="event-item">
    {{ event.title }}
  </div>
</template>

<style scoped>
.event-item {
  background: #22c55e;
  color: white;
  padding: 6px;
  border-radius: 4px;
  margin-top: 5px;
  font-size: 12px;
}
</style>
