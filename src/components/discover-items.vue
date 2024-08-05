<template>
   <div v-if="discover" class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="md:text-[30px] text-[26px] font-semibold">Explore Hot Items</h3>
                </div><!--end grid-->

                <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
                  
                    <div v-for="product in setProductData.slice(0, 8)" :key="product.id"  class="group relative p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit">
                        <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-1 group-hover:-mt-2 -ms-1 group-hover:-ms-2 h-[98%] w-[98%] -z-1 transition-all duration-500"></div>
                        <div class="relative overflow-hidden">
                            <div class="relative overflow-hidden rounded-lg">
                                <img :src="product.mainimage" class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="">
                            </div>
                            
                            <div class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <router-link :to="{name: 'item-detail', params: {id: product.id}}" class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>                                
                            </div>

                            <div class="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-plus"></i></a>
                            </div>

                            <div  v-if="product.showdate === true"
                            class="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                                <i class="uil uil-clock align-middle me-1"></i> <small id="auction-item-1" class="font-bold">{{
            product.remaining?.days + " : " + product.remaining?.hours + " : " +
            product.remaining?.minutes + " : " + product.remaining?.seconds }}</small>
                            </div>
                        </div>

                        <div class="mt-3">
                            <div class="flex items-center">
                                <img :src="product.image" class="rounded-full h-8 w-8" alt="">
                                <router-link to="/creator-profile" class="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{{ product.name
                        }}</router-link>
                            </div>

                            <div class="my-3">
                                <router-link :to="{name: 'item-detail', params: {id: product.id}}" class="font-semibold hover:text-violet-600">{{ product.title }}</router-link>
                            </div>

                            <div class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span class="text-[16px] font-medium text-slate-400 block">Price</span>
                                    <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{ product.price
                            }}</span>
                                </div>
                                
                                <div>
                                    <span class="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                    <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{ product.highest }}</span>
                                </div>
                            </div>
                        </div>
                        </div>

                   
                </div><!--end grid-->
            </div><!--end container-->


          
                <div v-else-if="items" class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="product in setProductData" :key="product.id" 
            class="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
            <div class="relative overflow-hidden">
                <div class="relative overflow-hidden rounded-lg">
                    <img :src="product.mainimage"
                        class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                        alt="">
                </div>

                <div
                    class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <router-link :to="{name: 'item-detail', params: {id: product.id}}"
                        class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>
                </div>

                <div class="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="javascript:void(0)"
                        class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            class="mdi mdi-plus"></i></a>
                </div>

                <div v-if="product.showdate === true"
                    class="absolute  bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full justify-center">
                    <i class="uil uil-clock align-middle me-1 text-center"></i>  <small id="auction-item-1"
                        class="font-bold"> {{
            product.remaining?.days + " : " + product.remaining?.hours + " : " +
            product.remaining?.minutes + " : " + product.remaining?.seconds }}</small>
                </div>
            </div>

            <div class="mt-3">
                <div class="flex items-center">
                    <img :src="product.image" class="rounded-full h-8 w-8" alt="">
                    <router-link to="/creator-profile"
                        class="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{{ product.name
                        }}</router-link>
                </div>

                <div class="my-3">
                    <router-link :to="{name: 'item-detail', params: {id: product.id}}" class="font-semibold hover:text-violet-600">{{ product.title }}</router-link>
                </div>

                <div
                    class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                    <div>
                        <span class="text-[16px] font-medium text-slate-400 block">Price</span>
                        <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{ product.price
                            }}</span>
                    </div>

                    <div>
                        <span class="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                        <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i>
                            {{ product.highest }}</span>
                    </div>
                </div>
            </div>
        </div><!--end content-->
                </div><!--end grid-->


                <div v-else-if="explore" class="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
                    <div v-for="product in setProductData" :key="product.id"  class="group relative p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit">
                        <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-1 group-hover:-mt-2 -ms-1 group-hover:-ms-2 h-[98%] w-[98%] -z-1 transition-all duration-500"></div>
                        <div class="relative overflow-hidden">
                            <div class="relative overflow-hidden rounded-lg">
                                <img :src="product.mainimage" class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="">
                            </div>
                            
                            <div class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <router-link :to="{name: 'item-detail', params: {id: product.id}}" class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>                                
                            </div>

                            <div class="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-plus"></i></a>
                            </div>

                            <div  v-if="product.showdate === true"
                            class="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                                <i class="uil uil-clock align-middle me-1"></i> <small id="auction-item-1" class="font-bold">{{
            product.remaining?.days + " : " + product.remaining?.hours + " : " +
            product.remaining?.minutes + " : " + product.remaining?.seconds }}</small>
                            </div>
                        </div>

    <div class="mt-3">
        <div class="flex items-center">
            <img :src="product.image" class="rounded-full h-8 w-8" alt="">
            <router-link to="/creator-profile"
                class="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{{ product.name
                }}</router-link>
        </div>

        <div class="my-3">
            <router-link :to="{name: 'item-detail', params: {id: product.id}}" class="font-semibold hover:text-violet-600">{{ product.title }}</router-link>
        </div>

        <div
            class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
            <div>
                <span class="text-[16px] font-medium text-slate-400 block">Price</span>
                <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{ product.price
                    }}</span>
            </div>

            <div>
                <span class="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i>
                    {{ product.highest }}</span>
            </div>
        </div>
    </div>
</div><!--end content-->
</div><!--end grid-->


    <div v-else class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">


        <div v-for="product in setProductData.slice(0, 8)" :key="product.id" 
            class="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
            <div class="relative overflow-hidden">
                <div class="relative overflow-hidden rounded-lg">
                    <img :src="product.mainimage"
                        class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                        alt="">
                </div>

                <div
                    class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <router-link :to="{name: 'item-detail', params: {id: product.id}}"
                        class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>
                </div>

                <div class="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="javascript:void(0)"
                        class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            class="mdi mdi-plus"></i></a>
                </div>

                <div v-if="product.showdate === true"
                    class="absolute  bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full justify-center">
                    <i class="uil uil-clock align-middle me-1 text-center"></i>  <small id="auction-item-1"
                        class="font-bold"> {{
            product.remaining?.days + " : " + product.remaining?.hours + " : " +
            product.remaining?.minutes + " : " + product.remaining?.seconds }}</small>
                </div>
            </div>

            <div class="mt-3">
                <div class="flex items-center">
                    <img :src="product.image" class="rounded-full h-8 w-8" alt="">
                    <router-link to="/creator-profile"
                        class="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{{ product.name
                        }}</router-link>
                </div>

                <div class="my-3">
                    <router-link :to="{name: 'item-detail', params: {id: product.id}}" class="font-semibold hover:text-violet-600">{{ product.title }}</router-link>
                </div>

                <div
                    class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                    <div>
                        <span class="text-[16px] font-medium text-slate-400 block">Price</span>
                        <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{ product.price
                            }}</span>
                    </div>

                    <div>
                        <span class="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                        <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i>
                            {{ product.highest }}</span>
                    </div>
                </div>
            </div>
        </div><!--end content-->
    </div><!--end grid-->

    <div v-if="moreitem" class="grid grid-cols-1 mt-6">
        <div class="text-center">
            <router-link to="/explore-one"
                class="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">Explore
                More <i class="uil uil-arrow-right"></i></router-link>
        </div>
    </div><!--end grid-->


</template>

<script>
export default {
    props: {
        discover: {
            type: Boolean,
            required: true
        },
        items: {
            type: Boolean,
            required: true
        },
        moreitem: {
            type: Boolean,
            required: true
        },
        explore: {
            type: Boolean,
            required: true
        },
    },
name: "ExploreOne",
data() {
    return {
        setProductData: [],
        products: [
            {
                id: 1,
                mainimage: require('../assets/images/items/1.jpg'),
                image: require('../assets/images/avatar/1.jpg'),
                name: '@StreetBoy',
                title: 'Genuine Undead #3902',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 2,
                mainimage: require('../assets/images/items/2.gif'),
                image: require('../assets/images/avatar/2.jpg'),
                name: '@CutieGirl',
                title: 'Windchime #768',
                price: '3.5 ETH',
                date: 'August 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: true
            },
            {
                id: 3,
                mainimage: require('../assets/images/items/2.jpg'),
                image: require('../assets/images/items/3.gif'),
                name: '@ButterFly',
                title: 'Probably A Label #3277',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 4,
                mainimage: require('../assets/images/items/3.jpg'),
                image: require('../assets/images/avatar/3.jpg'),
                name: '@NorseQueen',
                title: 'Probably A Label #1711',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 5,
                mainimage: require('../assets/images/items/3.gif'),
                image: require('../assets/images/avatar/4.jpg'),
                name: '@BigBull',
                title: 'Shibuya Scramble Punks',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 6,
                mainimage: require('../assets/images/items/4.jpg'),
                image: require('../assets/images/avatar/5.jpg'),
                name: '@Angel',
                title: 'Probably A Label #650',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 7,
                mainimage: require('../assets/images/items/5.jpg'),
                image: require('../assets/images/avatar/6.jpg'),
                name: '@CrazyAnyone',
                title: 'Looki#0147',
                price: '3.5 ETH',
                date: 'January 29, 2026 6:0:0',
                highest: '3.55 ETH',
                showdate: true
            },
            {
                id: 8,
                mainimage: require('../assets/images/items/6.jpg'),
                image: require('../assets/images/items/5.gif'),
                name: '@Princess',
                title: 'Poob #285',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 9,
                mainimage: require('../assets/images/items/8.jpg'),
                image: require('../assets/images/avatar/7.jpg'),
                name: '@LooserBad',
                title: 'Umber Arrow',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 10,
                mainimage: require('../assets/images/items/4.gif'),
                image: require('../assets/images/items/5.gif'),
                name: '@Princess',
                title: 'Gloam Druid',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 11,
                mainimage: require('../assets/images/items/5.gif'),
                image: require('../assets/images/avatar/8.jpg'),
                name: '@PandaOne',
                title: 'Azuki #7421',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
            {
                id: 12,
                mainimage: require('../assets/images/items/9.jpg'),
                image: require('../assets/images/items/2.gif'),
                name: '@FunnyGuy',
                title: 'Wolf-Cult Vanguard',
                price: '3.5 ETH',
                date: 'January 29, 2025 6:0:0',
                highest: '3.55 ETH',
                showdate: false
            },
        ]
    }
},
mounted() {
    const interval = setInterval(() => {
        this.remainingDays();
    }, 100);
    return () => clearInterval(interval);
},
methods: {
    tickTock(date) {
        let startDate = new Date(date);
        let currentDate = new Date();
        const diff = startDate.getTime() - currentDate.getTime();
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { hours, minutes, seconds, days }
    },
    remainingDays() {
        const formattedData = this.products.map((item) => ({
            ...item,
            remaining: this.tickTock(item.date),
        }));
        this.setProductData = formattedData;
        console.log(this.setProductData);
    },
}
}
</script>

<style lang="scss" scoped></style>