<template>
    <input class="base-input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs" />
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.base-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.base-input:focus {
    border-color: #28a745;
}
</style>