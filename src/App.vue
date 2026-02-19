<script setup>
// App.vue ne contient que le layout commun
// Le calendrier est dans DashboardView.vue
import { useEventStore } from '@/stores/eventStore'
import ConfirmModal from './components/ui/ConfirmModal.vue';

const eventStore = useEventStore()
</script>

<template>
  <div class="min-h-screen bg-[#e0e5ec]">
    <!-- Header Neumorphism -->
    <header >
      <div class="max-w-7xl mx-auto px-8 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-6">
            <!-- Logo Neumorphique -->
            <div class="logo-neumorphic">
              <h1> Bienvenue sur DC calendar</h1>
              <!-- <span class="text-2xl">📅</span> -->
            </div>
          </div>
          
          <!-- Navigation Neumorphique -->
          <nav class="nav-main">
            <router-link 
              to="/" 
              class="nav-link-neumorphic"
            >
              Calendrier
            </router-link>
         
            
            
            <!-- Bouton de déconnexion Neumorphique -->
            <button 
              @click="eventStore.logout"
              class="btn-neumorphic"
            >
              Déconnexion
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Affiche uniquement le composant de route -->
    <router-view></router-view>
    
    <!-- Modal de confirmation de suppression -->
    <ConfirmModal
    :is-open="eventStore.isDeleteConfirmOpen"
    title="Confirmation de suppression"
    message="Voulez-vous vraiment supprimer cet événement ?"
    confirm-text="Supprimer"
    @confirm="eventStore.confirmDeleteEvent"
    @cancel="eventStore.closeDeleteConfirm"
    />
  </div>
</template>

<style scoped>
.nav-main {
  display: flex;
  gap: 20px;
 position: absolute; 
}

/* Styles Neumorphism */
.shadow-soft-header {
  box-shadow: 
    0 8px 16px #0b54c2d3,
    0 -8px 16px #ffffff;
  border-bottom: 1px solid #cbd5e0;
}

.logo-neumorphic {
  background: #e0e5ec;
  border-radius: 3px;
  padding: 12px;
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
    /* box-shadow:
        8px 8px 16px #055ada5e,
        -8px -8px 16px #e009095e; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.logo-neumorphic:hover {
  box-shadow: 
    10px 10px 20px #a3b1c6,
    -10px -10px 20px #ffffff;
  transform: translateY(-1px);
}
nav{
  position: relative;
  right: -1px;
}
.nav-link-neumorphic {
  background: #e0e5ec;
  color: #2d3748;
  padding: 12px 20px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link-neumorphic:hover {
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transform: translateY(-2px);
}

.nav-link-neumorphic.router-link-active {
  background: #cbd5e0;
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
}

.btn-neumorphic {
  background: #e0e5ec;
  color: #2d3748;
  padding: 12px 24px;
  border: none;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
}

.btn-neumorphic:hover {
  box-shadow: 
    8px 8px 16px #a3b1c6,
    -8px -8px 16px #ffffff;
  transform: translateY(-2px);
}

.btn-neumorphic:active {
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
  transform: scale(0.98);
}

/* Animation d'entrée */
header {
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  header .max-w-7xl {
    padding: 0 16px;
  }
  
  header .flex {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  
  .nav-link-neumorphic {
    padding: 10px 16px;
    font-size: 14px;
  }
  
  .btn-neumorphic {
    width: 100%;
    margin-top: 1rem;
  }
}
</style> 
