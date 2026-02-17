<script setup>
import { useEventStore } from '@/stores/eventStore'

defineProps({
  isOpen: Boolean,
  title: String,
  message: String,
  confirmText: {
    type: String,
    default: 'Confirm'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  type: {
    type: String,
    default: 'delete', // 'delete', 'update', 'success'
  }
})

const emit = defineEmits(['confirm', 'cancel'])

const eventStore = useEventStore()

function handleConfirm() {
  emit('confirm')
}

function handleCancel() {
  emit('cancel')
}

function getModalClass() {
  const baseClass = 'fixed-side-modal'
  switch (props.type) {
    case 'delete':
      return `${baseClass} delete-modal`
    case 'update':
      return `${baseClass} update-modal`
    case 'success':
      return `${baseClass} success-modal`
    default:
      return baseClass
  }
}

function getIcon() {
  switch (props.type) {
    case 'delete':
      return '🗑️'
    case 'update':
      return '✏️'
    case 'success':
      return '✅'
    default:
      return ''
  }
}
</script>

<template>
  <div v-if="isOpen" :class="getModalClass()">
    <div class="modal-header">
      <div class="modal-icon">{{ getIcon() }}</div>
      <div>
        <h2>{{ title }}</h2>
        <p class="modal-message">{{ message }}</p>
      </div>
      <button class="close-btn" @click="handleCancel">✕</button>
    </div>

    <div class="modal-actions">
      <button 
        class="cancel-btn" 
        @click="handleCancel"
      >
        {{ cancelText }}
      </button>
      <button 
        class="confirm-btn" 
        :class="type"
        @click="handleConfirm"
      >
        {{ confirmText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.fixed-side-modal {
  position: fixed;
  top: 40px;
  right: 40px;
  width: 350px;
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
}

.modal-icon {
  font-size: 24px;
  flex-shrink: 0;
}

h2 {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.modal-message {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

.close-btn {
  background: #fef2f2;
  border: none;
  color: #ef4444;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  flex-shrink: 0;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.cancel-btn {
  background: #f3f4f6;
  color: #6b7280;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancel-btn:hover {
  background: #e5e7eb;
}

.confirm-btn {
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.confirm-btn.delete {
  background: #ef4444;
  color: white;
}

.confirm-btn.delete:hover {
  background: #dc2626;
}

.confirm-btn.update {
  background: #10b981;
  color: white;
}

.confirm-btn.update:hover {
  background: #059669;
}

.confirm-btn.success {
  background: #10b981;
  color: white;
}

.confirm-btn.success:hover {
  background: #059669;
}

.delete-modal .modal-icon {
  color: #ef4444;
}

.update-modal .modal-icon {
  color: #10b981;
}

.success-modal .modal-icon {
  color: #10b981;
}
</style>
