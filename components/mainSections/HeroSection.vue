<template>
    <section class="hero">
        <div class="hero__container">
            <div class="hero__title">
                <h1>Мы - молодежь ЛДПР.<br />
                    С нами все дороги открыты!</h1>
                <h2>Вместе, единой командой, мы работаем для того, чтобы каждый молодой талант мог найти возможности
                    воплотить свои идеи.</h2>
            </div>
            <div class="hero__buttons">
                <button>Присоединиться</button>
                <a>Войти <nuxt-icon name="arrow" filled /></a>
            </div>
            <div class="hero__track">
                <div class="hero__track-block">
                    <div class="hero__track-item">
                        <nuxt-icon style="font-size: 14.5rem;" name="panel1" filled />
                        <h1>Общайтесь</h1>
                        <p>Принимайте участие в политических дебатах и ​​форумах</p>
                    </div>
                    <span class="hero__line one"></span>
                    <div class="hero__track-item down">
                        <nuxt-icon style="font-size: 14.5rem;" name="panel2" filled />
                        <h1>Обучайтесь</h1>
                        <p>Получайте политическое образование</p>
                    </div>
                    <span class="hero__line two"></span>
                    <div class="hero__track-item">
                        <nuxt-icon style="font-size: 14.5rem;" name="panel3" filled />
                        <h1>Участвуйте</h1>
                        <p>Участвуйте в организации и работе круглых столов</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.hero {
    margin-top: 8rem;

    &__line {
        position: absolute;
        background: linear-gradient(76.24deg, rgba(0, 190, 240, 0.6) 0%, rgba(45, 106, 202, 0.6) 100%);
        height: 1.5rem;
        width: 26rem;
        right: 46rem;
        bottom: 22rem;
        transform: rotate(18deg);
        z-index: 1;
    }

    .two {
        right: 14rem;
        background: linear-gradient(76.24deg, rgba(45, 106, 202, 0.6) 0%, rgba(220, 44, 83, 0.6) 100%);
        transform: rotate(-18deg);
    }

    &__track-block {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12rem;
    }

    &__track {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;


        &-item {
            min-height: 25rem;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            margin: 0;
            flex-direction: column;

            h1 {
                font-size: 1.6rem;
                margin-bottom: 1.2rem;
                font-weight: bold;
            }

            p {
                font-size: 1.4rem;
                color: #6D747F;
                width: 19rem;
            }

            svg {
                transition: 0.8s;
                cursor: pointer;
            }

            svg:hover {
                transform: scale(1.1);
                transition: 1s;

            }
        }

        .down {
            min-height: 45rem;

            justify-content: flex-end;
        }
    }

    &__buttons {
        margin-top: 4.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;




        a {
            display: flex;
            gap: 1rem;
            font-size: 2rem;
            font-weight: 600;
        }

        button {
            cursor: pointer;
            position: relative;
            padding: 0.8rem 2.2rem;
            font-size: 1.8rem;
            background: linear-gradient(94.15deg, #2D2B2B 0%, #18181B 100%);
            color: white;
            border-radius: 0.8rem;
            transition: 0.2s;
            font-weight: 600;
            border: none;
        }

        button:hover {
            background: black;
            box-shadow: 0px 0px 30px 2px rgba(63, 104, 177, 0.6);
            transition: 0.2s background;
            transition: 0.3s box-shadow;

        }

        button::before {
            content: "";
            position: absolute;
            border-radius: 1rem;
            background: linear-gradient(35deg, #3F68B1, #035cf5);
            top: -0.2rem;
            bottom: -0.2rem;
            left: -0.2rem;
            right: -0.2rem;
            z-index: -1;
        }
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;

        h2 {
            margin-top: 2rem;
            font-size: 2.4rem;
            color: #6D747F;
            font-weight: 600;
            max-width: 76rem;
        }

        h1 {
            max-width: 76rem;
            font-size: 4.8rem;
            font-weight: bold;
            color: #132747;
        }
    }
}
</style>