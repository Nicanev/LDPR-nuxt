<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/register')
        }
    })
})


const client = useSupabaseClient()
async function signOut() {
    try {
        let { error } = await client.auth.signOut()
        if (error) throw error
        user.value = null
    } catch (error) {
        alert(error.message)
    } finally {

    }
}
</script>

<template>
    <div class="profile">
        <div class="profile__container">
            <div class="profile__start">
                <div class="profile__title"> Добро пожаловать, {{ user.email }}!</div>
                <button class="profile__exit" @click="signOut">Выйти</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.profile {
    &__title {
        font-size: 4.8rem;
        color: #132747;
        font-weight: bold;
        margin-top: 5rem;
    }

    &__exit {
        font-size: 1.4rem;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.7rem;
        background-color: #3F68B1;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
    }

    &__start {
        display: flex;
        justify-content: space-between;
        margin-bottom: 75rem;
        align-items: center;
    }
}
</style>