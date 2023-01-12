<script setup lang="ts">
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()

const signUp = async () => {
    const { error } = await client.auth.signUp({
        email: email.value,
        password: password.value
    })
    alert("Проверьте вашу почту для регистрации!")
    console.log('user', error)
    console.log('error', error)
}

// const login = async () => {
//     const { user, error } = await client.auth.signInWithPassword({
//         email: email.value,
//         password: password.value
//     })
//     console.log('user', error)
//     console.log('error', error)
// }

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/profile')
        }
    })
})

const handleLogin = async () => {
    const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
}

</script>

<template>
    <section class="auth">
        <div class="auth__container">
            <div class="auth__block">
                <h1>Регистрация</h1>
                <form @submit.prevent="signUp()" class="auth__form">
                    <input type="email" v-model="email" placeholder="Email">
                    <input type="password" v-model="password" placeholder="Пароль">
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.auth {
    margin-bottom: 45rem;

    &__block {
        margin: 0 auto;
        width: 66rem;
    }

    h1 {
        font-size: 4.8rem;
        color: #132747;
        margin-bottom: 6rem;
        font-weight: bold;
        margin-top: 13rem;
    }




    &__form {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        button {
            font-size: 1.8rem;
            border: 0.1rem solid #3636365e;
            height: 5.5rem;
            border-radius: 0.7rem;
            background-color: transparent;
            text-transform: uppercase;
            font-weight: bold;
        }

        input {
            height: 5.5rem;
            border: 0.1rem solid #3636365e;
            width: 100%;
            border-radius: 0.7rem;
            text-indent: 1rem;
            font-size: 1.8rem;
        }
    }
}
</style>

