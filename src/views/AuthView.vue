<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const isLogin = ref(true)
const email = ref('')
const password = ref('')

const handleSubmit = () => {
    if (isLogin.value) auth.login(email.value, password.value)
    else auth.register(email.value, password.value)
}
</script>

<template>
    <div class="auth-container">
        <form @submit.prevent="handleSubmit" class="auth-form">
            <h2>{{ isLogin ? 'Connexion' : 'Inscription' }}</h2>
            
            <div class="form-group">
                <label>Email</label>
                <input 
                    v-model="email" 
                    type="email" 
                    placeholder="Entrez votre email" 
                    required 
                    class="form-input"
                />
            </div>
            
            <div class="form-group">
                <label>Mot de passe</label>
                <input 
                    v-model="password" 
                    type="password" 
                    placeholder="Entrez votre mot de passe" 
                    required 
                    class="form-input"
                />
            </div>
            
            <p v-if="auth.error" class="error">{{ auth.error }}</p>
            
            <button type="submit" class="submit-btn">
                {{ isLogin ? 'Se connecter' : 'Créer un compte' }}
            </button>
            
            <a @click="isLogin = !isLogin" class="toggle-link">
                {{ isLogin ? 'Pas de compte ? Inscrivez-vous' : 'Déjà un compte ? Connectez-vous' }}
            </a>
        </form>
    </div>
</template>

<style scoped>
.auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
}

.auth-form {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

.auth-form h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-size: 28px;
    font-weight: 700;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-weight: 500;
    font-size: 14px;
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.error {
    background: #fee;
    color: #c53030;
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 20px;
    font-size: 14px;
    border-left: 4px solid #c53030;
}

.submit-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 20px;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.toggle-link {
    display: block;
    text-align: center;
    color: #667eea;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.3s ease;
}

.toggle-link:hover {
    color: #764ba2;
    text-decoration: underline;
}
</style>