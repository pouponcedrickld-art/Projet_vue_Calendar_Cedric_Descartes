<script setup>
defineProps({
    version: {
        type: String,
        default: 'default'
    }
})
</script>

<template>
    <button class="base-button">
        <slot></slot>
    </button>
</template>

<style scoped>
.base-button {
    background-color: #10b981;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.2s ease;
    font-family: inherit;
}

.base-button:hover {
    background-color: #059669;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.base-button:active {
    transform: scale(0.98);
}
</style>