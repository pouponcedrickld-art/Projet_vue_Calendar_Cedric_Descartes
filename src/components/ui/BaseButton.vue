<template>
    <button class="base-button">
        <slot></slot>
    </button>
</template>

<style scoped>
.base-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.base-button:hover {
    background-color: #218838;
}
</style>