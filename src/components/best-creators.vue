<template>
   
              
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">

                    <div v-for="item in datas" :key="item" class="flex justify-between items-center p-3 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                        <div class="flex items-center">
                            <div class="relative inline-block">
                                <img :src="item.image" class="h-16 rounded-md" alt="">
                                <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                            </div>

                            <div class="ms-3">
                                <router-link to="/creator-profile" class="font-semibold block hover:text-violet-600">{{item.name}}</router-link>
                                <span class="text-slate-400 text-sm block mt-0.5">{{ item.title }}</span>
                            </div>
                        </div>

                        <a href="" class="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><i class="uil uil-user-plus text-[20px]"></i></a>
                    </div>
                    <!--end content-->
                    <!--end content-->
                </div><!--end grid-->
           

</template>

<script setup>
import {ref} from 'vue'

const datas = ref([
    {
        image: require('../assets/images/avatar/1.jpg'),
        name: 'Steven Townsend',
        title: '@StreetBoy'
    },
    {
        image: require('../assets/images/avatar/2.jpg'),
        name: 'Tiffany Betancourt',
        title: '@CutieGirl'
    },
    {
        image: require('../assets/images/items/3.gif'),
        name: 'Jacqueline Burns',
        title: '@ButterFly'
    },
    {
        image: require('../assets/images/avatar/3.jpg'),
        name: 'Mari Harrington',
        title: '@NorseQueen'
    },
    {
        image: require('../assets/images/avatar/4.jpg'),
        name: 'Floyd Glasgow',
        title: '@BigBull'
    },
    {
        image: require('../assets/images/avatar/5.jpg'),
        name: 'Donna Schultz',
        title: '@Angel'
    },
    {
        image: require('../assets/images/avatar/6.jpg'),
        name: 'Joshua Morris',
        title: '@CrazyAnyone'
    },
    {
        image: require('../assets/images/items/5.gif'),
        name: 'Rosaria Vargas',
        title: '@Princess'
    },
    {
        image: require('../assets/images/avatar/7.jpg'),
        name: 'Carl Williams',
        title: '@LooserBad'
    },
])

</script>

<style lang="scss" scoped>

</style>