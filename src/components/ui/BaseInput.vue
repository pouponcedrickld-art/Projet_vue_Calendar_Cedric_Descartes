<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
    <input class="base-input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs" />
</template>

<style scoped>
.base-input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 3px solid #10b981;
    border-radius: 0;
    outline: none;
    font-size: 15px;
    font-family: inherit;
    color: #374151;
    background: transparent;
    transition: border-color 0.2s ease;
}

.base-input::placeholder {
    color: #9ca3af;
}

.base-input:focus {
    border-bottom-color: #059669;
}
</style>