<template>
<div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
    <div class="lg:col-span-5">
        <div class="relative">
            <div
                class="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-[15px] -ms-[15px] h-[98%] w-[98%] -z-1">
            </div>
            <img src="https://res.cloudinary.com/dazfmv5ls/image/upload/v1722825527/img-01_5_glxsj7.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk"
                    class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-violet-600 cursor-pointer">
                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </a>
            </div>
        </div>
    </div>

    <div class="lg:col-span-7">
        <div class="lg:ms-5">
            <span class="text-violet-600 font-medium">DJ´s & Productor</span>
            <h3 class="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">MAZBE</h3>

            <p class="text-slate-400 max-w-xl">Mauro Ezequiel Barria nació el 20 de Noviembre de 1995 en
                Rio Gallegos, actulmente reside en la ciudad de La Plata.
                De chico escuchaba Rap y Rock Nacional, luego comenzo a
                asistir a eventos electronicos introduciendoce poco a poco
                en el mundo de los DJ´s</p>
            <p class="text-slate-400 max-w-xl mt-4">A los 17 años tuvo su primer contacto con las consolas en
                RUSIA Bar, asi comenzado a crear sus primeros eventos
                privados, creando contactos para luego montar su productora.</p>

            <p class="text-slate-400 max-w-xl mt-4">En 2022 embarca un viaje con destino a Buenos Aires con el fin
                de crear nuevos Horizontes. </p>
            <p class="text-slate-400 max-w-xl mt-4">Ya instalado en la ciudad, creó ARDENT una productora que
                su propósito es ayudar a DJ´S emergentes y proliferar el
                Underground.</p>

            <div class="mt-6">
                <a href="https://wa.link/iorvqu" target="_blank"
                    class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-2 mt-2"><i
                        class="uil uil-whatsapp"></i> Contacto</a>
            </div>
        </div>
    </div>
</div>

<!-- iframe start  -->
<div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
    <div class="h-[100%] flex items-center justify-center">
        <iframe src="https://www.youtube.com/embed/rLCW8UHfSP8?si=HZLE3KqtVYI9UjNA" width="700" height="500"
            frameborder="0"></iframe>
    </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
            @click="toggle">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </button>
</div>
<!-- iframe end  -->
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

function toggle() {
    isActive.value = !isActive.value;
}
</script>

<style lang="scss" scoped></style>