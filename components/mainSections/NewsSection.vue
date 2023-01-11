<template>
    <section class="news">
        <div class="news__container">
            <div class="news__title">
                Наши новости
                <div class="news__buttons">
                    <button ref="prev" class="news__prev">
                        <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 7L7 1" stroke="#3F68B1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button ref="next" class="news__next">
                        <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 7L7 1" stroke="#3F68B1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="news__swiper">
                <Swiper :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }" :slides-per-view="2" :space-between="40" :loop="true" :modules="modules">
                    <SwiperSlide>
                        <div class="news__img">
                            <img src="https://images.hub.ldpr.ru/display?path=media/images/ab52d6b430865a1fcdc9c36ec17ef03c157ac2f997071969ce94eab2fd897cfb.jpg&op=resize&h=600"
                                alt="" />
                            <span>12.12.2023</span>
                            <h1>С рождеством!</h1>
                            <p>Руководитель фракции ЛДПР в Государственной Думе РФ Леонид Слуцкий, депутаты и сенаторы
                                поздравляют россиян и
                                соотечественников за рубежом с Новым годом!
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="news__img">
                            <img src="https://images.hub.ldpr.ru/display?path=media/images/ab52d6b430865a1fcdc9c36ec17ef03c157ac2f997071969ce94eab2fd897cfb.jpg&op=resize&h=600"
                                alt="" />
                            <span>12.12.2023</span>
                            <h1>С рождеством!</h1>
                            <p>Руководитель фракции ЛДПР в Государственной Думе РФ Леонид Слуцкий, депутаты и сенаторы
                                поздравляют россиян и
                                соотечественников за рубежом с Новым годом!
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.news {
    margin-top: 8rem;

    &__img {
        position: relative;
        z-index: 1;
        cursor: pointer;

        span {
            position: absolute;
            font-size: 1.2rem;
            font-weight: 600;
            background: rgba(165, 165, 165, 0.6);
            border-radius: 2rem;
            bottom: 10rem;
            padding: 0.7rem 1.3rem;
            left: 3rem;
            z-index: 3;
            color: white;
        }

        p {
            position: absolute;
            bottom: 1.5rem;
            color: white;
            left: 3rem;
            font-size: 1.4rem;
            max-width: 60rem;
            overflow: hidden;
            height: 3.4rem;
        }

        h1 {
            position: absolute;
            font-size: 2.4rem;
            font-weight: bold;
            left: 3rem;
            bottom: 6rem;
            color: white;
        }

        img {
            border-radius: 1.5rem;
            filter: brightness(60%)
        }
    }

    &__prev {
        &:hover {
            path {
                stroke: white;
                transition: 0.2s;
            }

            transition: 0.2s;
            background-color: #3F68B1;
        }
    }

    &__next {
        svg {
            transform: rotate(180deg);
        }

        &:hover {
            path {
                stroke: white;
                transition: 0.2s;
            }

            transition: 0.2s;
            background-color: #3F68B1;
        }
    }

    &__buttons {
        display: flex;
        gap: 1.6rem;

        button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            border: none;
            border-radius: 50%;
            padding: 1.2rem;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
        }

        svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 3rem;
        display: flex;
        color: #132747;
        justify-content: space-between;
        align-items: center;
    }

    &__swiper {}
}
</style>

<script lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        return {
            modules: [Navigation, Pagination],
            prev,
            next,
        };
    },
};
</script>