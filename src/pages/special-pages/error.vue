<template>
      <!-- Start -->
      <section class="relative bg-violet-600/5">
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <!-- <img src="../../assets/images/logo-icon-64.png" class="mx-auto" alt=""> -->
                            <span class="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text" style="font-size: 40px;">MAZBE</span>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <div class="md:my-0 my-10">
                                <img src="../../assets/images/error.png" class="mx-auto" alt="">
                                <h1 class="my-6 md:text-5xl text-3xl font-bold">Error 404</h1>
                                <p class="text-slate-400">Página no encontrada.</p>
                                
                                <div class="mt-6">
                                    <router-link to="/" class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Volver al Home</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{date}} MAZBE. Todos los Derechos Reservados.</p>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <switcher :back=true />
</template>

<script setup>
// import switcher from '@/components/switcher.vue'

const date = new Date().getFullYear()

</script>

<style lang="scss" scoped>

</style>