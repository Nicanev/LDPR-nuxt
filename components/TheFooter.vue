<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__copyright">© 2023 ЛДПР</div>
            <ul class="footer__menu">
                <li><a>О нас</a></li>
                <li><a>Новости</a></li>
                <li><a>Контакты</a></li>
                <li><a>Помощь</a></li>
            </ul>
            <div class="footer__social">
                <nuxt-icon name="vk" style="font-size: 2rem; color: rgb(113, 113, 122, 1);" />
                <nuxt-icon name="tg" style="font-size: 2rem; color: rgb(113, 113, 122, 1);" />
                <nuxt-icon name="dzen" style="font-size: 2rem; color: rgb(113, 113, 122, 1);" />
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    padding: 2rem 0;
    border-top: 0.2rem solid #E4E4E7;

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__copyright {
        font-size: 1.4rem;
        color: rgb(113, 113, 122, 1);
    }

    &__social {
        display: flex;
        gap: 1.5rem;

        svg {
            cursor: pointer;
        }

        svg:hover {
            path {
                fill: black !important;
                transition: 0.2s;
            }
        }
    }

    &__menu {
        display: flex;
        gap: 2rem;

        a {
            font-size: 1.4rem;
            color: rgb(113, 113, 122, 1);
        }

        a:hover {
            color: rgb(0, 0, 0);
        }
    }
}
</style>