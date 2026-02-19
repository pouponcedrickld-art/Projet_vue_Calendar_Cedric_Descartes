import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const error = ref(null)
  const isAuthenticated = ref(false)
  const router = useRouter()

  function login(email, password) {
    // Simulation de connexion
    error.value = null
    
    // Simulation d'une API call
    setTimeout(() => {
      if (email === 'cedric@gmail.com' && password === '123') {
        user.value = {
          id: 1,
          email: email,
          name: 'Admin User'
        }
        isAuthenticated.value = true
        error.value = null
        
        // Sauvegarder dans localStorage
        localStorage.setItem('user', JSON.stringify(user.value))
        
        // Rediriger vers le dashboard
        router.push('/')
        
        console.log('Connexion réussie')
      } else {
        error.value = 'Email ou mot de passe incorrect'
        console.log('Échec de connexion')
      }
    }, 1000)
  }

  function register(email, password) {
    // Simulation d'inscription
    error.value = null
    
    setTimeout(() => {
      if (email && password) {
        user.value = {
          id: Date.now(),
          email: email,
          name: email.split('@')[0]
        }
        isAuthenticated.value = true
        error.value = null
        
        // Sauvegarder dans localStorage
        localStorage.setItem('user', JSON.stringify(user.value))
        
        // Rediriger vers le dashboard
        router.push('/')
        
        console.log('Inscription réussie')
      } else {
        error.value = 'Veuillez remplir tous les champs'
      }
    }, 1000)
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
    error.value = null
    
    // Supprimer du localStorage
    localStorage.removeItem('user')
    
    // Rediriger vers login
    router.push('/login')
    
    console.log('Déconnexion réussie')
  }

  return {
    user,
    error,
    isAuthenticated,
    login,
    register,
    logout
  }
})
