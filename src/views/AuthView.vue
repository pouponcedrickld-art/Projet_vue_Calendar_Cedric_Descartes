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
/* Reset pour garantir le plein écran sans marges */
.auth-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #020617e3;
    /* Fond noir profond */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    z-index: 9999;
}

.auth-form {
    background: #f8f8f8e5;
    /* Bleu ardoise très sombre */
    padding: 40px;
    border-radius: 24px;
    border: 1px solid #1e293b;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 400px;
}

.auth-form h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #0c0c0c;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.025em;
}

.form-group {
    margin-bottom: 24px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #0c0c0c;
    /* Cyan high-tech */
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.form-input {
    width: 100%;
    padding: 14px 16px;
    background: #020617;
    border: 1px solid #334155;
    border-radius: 12px;
    font-size: 16px;
    color: #f8fafc;
    transition: all 0.2s ease;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 1px #06b6d4;
}

.error {
    background: rgba(243, 83, 83, 0.1);
    color: #f87171;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 14px;
    text-align: center;
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.submit-btn {
    width: 100%;
    padding: 16px;
    background: #323d3f;;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 20px;
    letter-spacing: 0.025em;
}

.submit-btn:hover {
    background: #323d3f83;
    transform: translateY(-1px);
}

.submit-btn:active {
    transform: scale(0.98);
}

.toggle-link {
    display: block;
    text-align: center;
    color: #0a0a0a;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.2s ease;
}

.toggle-link:hover {
    color: #111111;
}
</style>