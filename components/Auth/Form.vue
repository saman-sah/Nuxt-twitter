<template>
    <div>
        <div class="pt-5 space-y-6">
            
            <UIInput 
            v-model="data.username" 
            label="Username" 
            placeholder="Username"/>
            {{ data.username }}
            {{ data.password }}
            <UIInput 
            v-model="data.password" 
            label="Password" 
            placeholder="********" 
            type="password"/>

            <div>
                <button @click="handleLogin">Login</button>
            </div>

        </div>
    </div>
</template>
<script setup>
    const { login }= useAuth()
    const data = reactive({
        username: '',
        password: '',
        loading: false
    })

    async function handleLogin() {
        data.loading= true
        try {
            await login({
            username: data.username,
            password: data.password
        })
        } catch (error) {
            console.log(error);
        }finally {
            data.loading= false
        }
        
    }
</script>