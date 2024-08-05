<template>
<navbar />
<!-- Start -->
<section class="relative lg:pt-24 pt-[74px] overflow-hidden">
    <div class="container-fluid relative overflow-hidden">
        <div class="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            <iframe src="https://player.vimeo.com/video/994879244?background=1&autoplay=1&loop=1&byline=0&title=0"
                class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
            <!--Note: Vimeo Embed Background Video-->

            <!-- <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe> -->
            <!--Note: Youtube Embed Background Video-->
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

        <div class="lg:pt-36 lg:pb-48 pt-24 pb-36 shadow dark:shadow-gray-800">
            <div class="container">
                <div class="grid grid-cols-1 justify-center text-center">
                    <div class="relative">
                        <div class="relative mb-5">
                            <h1 class="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl text-white">DJ &
                                Productor <br> <span
                                    class="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">MAZBE</span>
                            </h1>
                        </div>
                        <p class="text-white/70 text-lg max-w-xl mx-auto">¡Bienvenidos a mi mundo!</p>

                        <!-- <div class="mt-8">
                            <router-link to="/explore-one"
                                class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Explorar ahora</router-link>
                        </div> -->
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </div><!--end -->
    </div><!--end container fluid-->
</section><!--end section-->
<!-- End -->
<section class="relative md:pb-24 pb-16 -mt-16">
    <div class="container">
        <digital />
    </div>

    <div class="container md:mt-24 mt-16">
        <div class="title-heading text-center mt-16">
            <div class="md:my-0 my-10">
                <div class="wave-effect relative tracking-tighter mb-6 md:text-5xl text-3xl font-bold text-white">
                    <span class="relative inline-block me-1" style="--a:1">C</span>
                    <span class="relative inline-block me-1" style="--a:2">O</span>
                    <span class="relative inline-block me-1" style="--a:3">M</span>
                    <span class="relative inline-block me-1" style="--a:4">I</span>
                    <span class="relative inline-block me-1" style="--a:5">N</span>
                    <span class="relative inline-block me-1" style="--a:6">G</span>
                    <span class="relative inline-block me-1" style="--a:7">S</span>
                    <span class="relative inline-block me-1" style="--a:8">O</span>
                    <span class="relative inline-block me-1" style="--a:9">O</span>
                    <span class="relative inline-block" style="--a:10">N</span>
                </div>
                <p class="text-white/70 max-w-xl mx-auto">Próximo evento en Artemisa, calle 50 e/ 9 y 10, ciudad de La Plata</p>

                <div id="countdown">
                    <ul class="count-down list-none inline-block text-white text-center mt-8">
                        <li id="days" class="count-number inline-block m-2">{{ days }}<p class="count-head">Días
                            </p>
                        </li>
                        <li id="hours" class="count-number inline-block m-2">{{ hours }}<p class="count-head">
                                Horas</p>
                        </li>
                        <li id="mins" class="count-number inline-block m-2">{{ minutes }}<p class="count-head">
                                minutos</p>
                        </li>
                        <li id="secs" class="count-number inline-block m-2">{{ seconds }}<p class="count-head">
                                segundos</p>
                        </li>
                        <li id="end" class="h1"></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

    <div class="container-fluid relative mt-16">
        <div class="grid grid-cols-1">
            <div
                class="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                <div class="slide-track flex items-center">
                    <div v-for="item in images" :key="item" class="slide h-auto md:w-[360px] w-72 mx-2">
                        <div class="group relative overflow-hidden rounded-lg shadow dark:shadow-gray-800">
                            <img :src="item.image"
                                class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                                alt="">

                            <!-- <div
                                class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <router-link :to="{ name: 'item-detail', params: { id: item.id } }"
                                    class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                                        class="mdi mdi-gavel"></i> Bid Now</router-link>
                            </div> -->
                        </div>
                    </div>

                </div>
            </div><!--end slider-->
        </div><!--end grid-->
    </div>
</section>
<footers />
<!-- <switcher /> -->
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import digital from '@/components/digital-art.vue';

import footers from '@/components/footer/footer.vue';
import { ref, computed, watch } from 'vue'

const now = ref(new Date().getTime())
const targetTime = ref(new Date("08/27/2024 00:00:00").getTime())
const difference = ref(0)

const days = computed(() => Math.floor(difference.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => 23 - new Date(now.value).getHours())
const minutes = computed(() => 60 - new Date(now.value).getMinutes())
const seconds = computed(() => 60 - new Date(now.value).getSeconds())

watch(now, () => {
    difference.value = targetTime.value - now.value
})

function updateNow() {
    now.value = new Date().getTime()
}

updateNow()
setInterval(updateNow, 1000)


const images = [
    {
        id: 13,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825524/img-01_2_kzmey4.png",
    },
    {
        id: 14,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825527/img-01_5_glxsj7.png",
    },
    {
        id: 15,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825528/img-01_dtinb5.png",
    },
    {
        id: 16,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825525/img-01_3_rtsukm.png",
    },
    {
        id: 17,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825526/img-01_4_hhsihw.png",
    },
    {
        id: 18,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825707/Captura_de_pantalla_2024-08-04_234059_wxoy4y.png",
    },
    {
        id: 13,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825524/img-01_2_kzmey4.png",
    },
    {
        id: 14,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825527/img-01_5_glxsj7.png",
    },
    {
        id: 15,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825528/img-01_dtinb5.png",
    },
    {
        id: 16,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825525/img-01_3_rtsukm.png",
    },
    {
        id: 17,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825526/img-01_4_hhsihw.png",
    },
    {
        id: 18,
        image: "https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825707/Captura_de_pantalla_2024-08-04_234059_wxoy4y.png",
    }
]



</script>

<style lang="scss" scoped></style>