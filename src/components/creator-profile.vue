<template>
      <div class="lg:container container-fluid">
                <div class="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow dark:shadow-gray-700">
                    <input id="pro-banner" name="profile-banner" type="file" class="hidden" @change="loadFile" />
                    <div class="relative shrink-0">
                        <img :src="imageSrc" class="h-80 w-full object-cover" id="profile-banner" alt="">
                        <div class="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/40 transition duration-500"></div>
                        <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                    </div>
                </div>

                <div class="md:flex justify-center">
                    <div class="md:w-full">
                        <div class="relative -mt-[60px] text-center">
                            <div class="group profile-pic w-[112px] mx-auto">
                                <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile2" />
                                <div>
                                    <div class="relative h-28 w-28 mx-auto rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                        <img :src="imageSrc2" class="rounded-full" id="profile-image" alt="">
                                        <div class="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500"></div>
                                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <h5 class="text-xl font-semibold">Jenny Jimenez <i class="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i></h5>
                                <p class="text-slate-400 text-[16px] mt-1">Created by <a href="" class="text-violet-600 font-semibold">1x5484dcdvcdscds56c4</a></p>

                                <div class="mt-4">
                                    <a href="javascript:void(0)" class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white me-1"><i class="mdi mdi-plus"></i> Follow me</a>
                                    <a href="javascript:void(0)" class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white me-1"><i class="mdi mdi-account-plus"></i></a>
                                    <router-link to="/creator-profile-edit" class="btn btn-icon btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><i class="mdi mdi-cog"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end -->

</template>

<script setup>
import images from '../assets/images/blog/single.jpg'
import images2 from '../assets/images/avatar/1.jpg'
import { ref} from 'vue';

const imageSrc = ref(images)
const imageSrc2 = ref(images2)
const image = ref('')
const image2 = ref('')

function loadFile(event) {
    image.value = document.getElementById(event.target.name)
    imageSrc.value = URL.createObjectURL(event.target.files[0])
}

function loadFile2(event) {
    image2.value = document.getElementById(event.target.name)
    imageSrc2.value = URL.createObjectURL(event.target.files[0])
}

</script>

<style lang="scss" scoped>

</style>