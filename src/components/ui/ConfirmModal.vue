<template>
  <div v-if="isOpen" class="modal-overlay" @click="$emit('cancel')">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>{{ title }}</h3>
      </div>
      
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      
      <div class="modal-footer">
        <button @click="$emit('cancel')" class="btn btn-cancel">
          Annuler
        </button>
        <button @click="$emit('confirm')" class="btn btn-danger">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  title: {
    type: String,
    default: 'Confirmation'
  },
  message: {
    type: String,
    default: 'Êtes-vous sûr ?'
  },
  confirmText: {
    type: String,
    default: 'Supprimer'
  }
})

defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: #e0e5ec;
  border-radius: 24px;
  padding: 0;
  max-width: 420px;
  width: 90%;
  box-shadow: 
    20px 20px 60px #a3b1c6,
    -20px -20px 60px #ffffff;
  animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  background: #e0e5ec;
  padding: 24px;
  border-radius: 24px 24px 0 0;
  border-bottom: 2px solid #cbd5e0;
}

.modal-header h3 {
  margin: 0;
  color: #2d3748;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.modal-body {
  padding: 24px;
  text-align: center;
}

.modal-body p {
  margin: 0;
  color: #4a5568;
  font-size: 16px;
  line-height: 1.5;
}

.modal-footer {
  padding: 24px;
  display: flex;
  gap: 16px;
  justify-content: center;
  border-top: 2px solid #cbd5e0;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
}

.btn-cancel {
  background: #e0e5ec;
  color: #4a5568;
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
}

.btn-cancel:hover {
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transform: translateY(-2px);
}

.btn-cancel:active {
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
  transform: scale(0.95);
}

.btn-danger {
  background: #e0e5ec;
  color: #e53e3e;
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
}

.btn-danger:hover {
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transform: translateY(-2px);
  color: #c53030;
}

.btn-danger:active {
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    margin: 20px;
    border-radius: 20px;
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 20px;
  }
  
  .modal-header h3 {
    font-size: 18px;
  }
  
  .modal-body p {
    font-size: 14px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 13px;
    min-width: 80px;
  }
}
</style>
