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
        <form @submit.prevent="handleSubmit">
            <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <p v-if="auth.error" class="error">{{ auth.error }}</p>
            <button type="submit">{{ isLogin ? 'Connect' : 'Create Account' }}</button>
            <a @click="isLogin = !isLogin">{{ isLogin ? 'Need an account?' : 'Already have one?' }}</a>
        </form>
    </div>
</template>