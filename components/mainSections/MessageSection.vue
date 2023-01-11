<template>
    <section class="message">
        <div class="message__container">
            <div class="message__block">
                <div class="message__content">
                    <img class="message__character" src="../../assets/img/vlasov.png" />
                    <div class="message__img">
                        <h1>Власов Василий Максимович</h1>
                        <p>Молодежи надо лезть не в автозак, а в парламент. Мы не прячемся за дверями высоких офисов. Мы
                            не боимся решать самые
                            сложные и насущные проблемы молодых россиян. Мы делаем все, чтобы новое поколение с
                            уверенностью смотрело в будущее,
                            становилось более успешным, процветающим и профессиональным.</p>
                    </div>
                </div>
                <img class="message__background" src="../../assets/img/background.png" />
                <!-- <nuxt-img class="message__character" src="vlasov.png" format="webp" />
                <nuxt-img class="message__img" src="message.svg" />
                <h1>Власов Василий Максимович</h1>
                <p>Молодежи надо лезть не в автозак, а в парламент. Мы делаем все, чтобы новое поколение с уверенностью
                    смотрело в будущее,
                    становилось более успешным, процветающим и профессиональным.</p> -->
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.message {
    margin-top: 15rem;

    &__content {
        height: 58.5rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    &__background {
        width: 100%;
        height: 58.5rem;
        position: absolute;
        top: 0;
        z-index: -1;
    }

    h1 {
        color: white;
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    p {
        color: white;
        max-width: 44rem;
        font-size: 1.4rem;

    }

    &__img {
        position: relative;
        padding: 2rem 3rem;
        width: 50rem;
        background-color: #2B4B98;
        margin-bottom: 25rem;
        border-radius: 0.8rem;

        &::before {
            content: "";
            left: -2rem;
            bottom: 0rem;
            border-radius: 1rem;
            border-style: solid;
            border-width: 2rem;
            z-index: 3;
            transform: rotate(90deg);
            border-color: #2B4B98 #2B4B98 transparent transparent;
            position: absolute;
        }
    }

    &__character {
        height: 40rem;

    }

    &__block {
        position: relative;
        z-index: 1;
    }
}
</style>