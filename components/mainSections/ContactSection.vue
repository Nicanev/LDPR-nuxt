<template>
    <section class="contact">
        <div class="contact__block">
            <div class="contact__container">

                <div class="contact__text">
                    <h1>Контакты</h1>
                    <p>Свяжитесь с нами следующими способами:</p>
                    <p>РОССИЯ, МОСКВА , ЛУКОВ ПЕРЕУЛОК, 9</p>
                    <p>+7 (495) 625-07-15</p>
                    <button>Позвонить</button>
                </div>
                <div class="contact__map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1232babf4e8edf7ba715aa05594d0c32f57955742c96a62eee7aac162250b808&amp;source=constructor"
                        width="600" height="466" frameborder="0"></iframe>
                </div>
            </div>


        </div>
    </section>
</template>

<style lang="scss">
.contact {
    margin-top: 8rem;

    &__block {
        background-color: #3F68B1;
        border-radius: 2.2rem 2.2rem 0rem 0rem;
        // height: 46.6rem;
        padding: 2rem 0;
        // display: flex;
        // justify-content: space-between;
        // border-bottom: 2px solid #6D747F;

        iframe {
            border-radius: 2.2rem;
        }

    }



    &__container {
        display: flex;
        justify-content: center;
        gap: 40rem;
    }

    &__text {
        button {
            cursor: pointer;
            margin-top: 4.3rem;
            color: #132747;
            font-size: 1.8rem;
            border-radius: 3.8rem;
            border: none;
            background-color: white;
            font-weight: bold;
            padding: 1.1rem 2.9rem;
        }

        h1 {
            font-size: 4.8rem;
            color: white;
            font-weight: bold;
        }

        p {
            margin-top: 1.7rem;
            font-size: 1.8rem;
            color: white;
            width: 36.3rem;
        }
    }
}
</style>