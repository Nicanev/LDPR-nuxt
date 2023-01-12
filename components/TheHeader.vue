<template>
    <header class="header">
        <div class="header__container">
            <nuxt-link to="/"> <img src="../assets/img/Logo.svg" class="header__logo" /></nuxt-link>
            <ul class="header__menu">
                <li><a>О нас</a></li>
                <li><a>Новости</a></li>
                <li><a>Контакты</a></li>
            </ul>
            <div class="header__social">
                <nuxt-icon name="vk" style="font-size: 2rem;" filled />
                <nuxt-icon name="tg" style="font-size: 2rem;" filled />
                <nuxt-icon name="dzen" style="font-size: 2rem;" filled />
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    width: 100%;
    background-color: #3F68B1;

    &__logo {
        width: 12.9rem;
        height: 4.4rem;
        cursor: pointer;
    }

    &__container {
        display: flex;
        height: 5.5rem;
        align-items: center;
        justify-content: space-between;
    }

    &__social {
        display: flex;
        gap: 1.5rem;

        svg {
            cursor: pointer;
        }

        svg:hover {
            transition: 0.2s;
            opacity: 0.9;
            background-color: rgba(56, 85, 136, 0.5);
        }
    }

    &__menu {
        display: flex;
        gap: 1.5rem;
        font-size: 1.8rem;

        a {
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 0.6rem;
            transition: 0.2s;
        }

        a:hover {
            background-color: rgba(56, 85, 136, 0.5);
            transition: 0.2s;
        }
    }
}
</style>