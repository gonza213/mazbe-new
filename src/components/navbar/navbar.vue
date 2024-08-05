<template><!-- Start Navbar -->
<nav id="topnav" class="defaultscroll is-sticky">
    <div class="container">
        <!-- Logo container-->
        <router-link v-if="logoLight" class="logo ps-0" to="/">
            <!-- <img src="../../assets/images/logo-icon-28.png" class="inline-block sm:hidden" alt="">
            <div class="sm:block hidden">
                <span class="inline-block dark:hidden">
                    <img src="../../assets/images/logo-dark.png" class="l-dark h-7" alt="">
                    <img src="../../assets/images/logo-light.png" class="l-light h-7" alt="">
                </span>
                <img src="../../assets/images/logo-white.png" height="24" class="hidden dark:inline-block" alt="">
            </div> -->
        </router-link>

        <router-link v-else class="logo ps-0" to="/">
            <!-- <img src="../../assets/images/logo-icon-28.png" class="inline-block sm:hidden" alt="">
            <div class="sm:block hidden">
                <img src="../../assets/images/logo-dark.png" class="inline-block dark:hidden h-7" alt="">
                <img src="../../assets/images/logo-white.png" class="hidden dark:inline-block h-7" alt="">
            </div> -->
            <span class="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">MAZBE</span>
        </router-link>
        <!-- End Logo container-->


        <div class="menu-extras" @click="handler">
            <div class="menu-item">
                <!-- Mobile menu toggle-->
                <a class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </div>
        </div>

        <!--Login button Start-->
        <ul class="buy-button list-none mb-0">
            <!-- <li class="sm:inline-block hidden mb-0"> -->
            <!-- <li class="inline-block mb-0 me-1">
                    <div class="form-icon relative">
                        <i class="uil uil-search text-lg absolute top-1/2 -translate-y-1/2 start-3"></i>
                        <input type="text"
                            class="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 bg-white"
                            name="s" id="searchItem" placeholder="Search...">
                    </div>
                </li> -->

            <!-- <li class="inline-block ps-1 mb-0 me-1">
                    <a @click="connect" href="#!" id="connectWallet"
                        class="btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            class="uil uil-wallet"></i></a>
                            <VueMetamask ref="metamask" :initConnect="false" />
                </li> -->

            <!-- <li class="dropdown inline-block relative ps-1">
                    <button ref="dropdownToggle" @click="dropdownOpen = !dropdownOpen"
                        class="dropdown-toggle btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white inline-flex"
                        type="button">
                        <img src="../../assets/images/client/05.jpg" class="rounded-full" alt="">
                    </button>
            
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                        v-show="dropdownOpen">
                        <div class="relative">
                            <div class="py-8 bg-gradient-to-tr from-violet-600 to-red-600"></div>
                            <div class="absolute px-4 -bottom-7 start-0">
                                <div class="flex items-end">
                                    <img src="../../assets/images/client/05.jpg"
                                        class="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700" alt="">

                                    <span class="font-semibold text-[15px] ms-1">Jenny Jimenez</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 px-4">
                            <h5 class="font-semibold text-[15px]">Wallet:</h5>
                            <div class="flex items-center justify-between">
                                <span class="text-[13px] text-slate-400">qhut0...hfteh45</span>
                                <a href="" class="text-violet-600"><i class="uil uil-copy"></i></a>
                            </div>
                        </div>

                        <div class="mt-4 px-4">
                            <h5 class="text-[15px]">Balance: <span
                                    class="text-violet-600 font-semibold">0.00045ETH</span></h5>
                        </div>

                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="/creator-profile"
                                    class="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"><i
                                        class="uil uil-user text-[16px] align-middle me-1"></i> Profile</router-link>
                            </li>
                            <li>
                                <router-link to="/creator-profile-edit"
                                    class="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"><i
                                        class="uil uil-setting text-[16px] align-middle me-1"></i>
                                    Settings</router-link>
                            </li>
                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                                <router-link to="/login"
                                    class="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"><i
                                        class="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>
                                    Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </li> -->
        </ul>
        <!--Login button End-->

        <div id="navigation" :class="toggle === false ? 'none' : 'block'">
            <!-- Navigation Menu-->
            <ul class="navigation-menu justify-end" :class="navLight">

                <li :class="activeIndex === '/' ? 'active' : ''"><router-link to="/"
                        class="sub-menu-item">Home</router-link></li>
                <li :class="activeIndex === '/store' ? 'active' : ''"><router-link to="/store"
                        class="sub-menu-item">Store</router-link></li>

                <li :class="activeIndex === '/contact' ? 'active' : ''"><router-link to="/contact"
                        class="sub-menu-item">Contacto</router-link></li>
            </ul><!--end navigation menu-->
        </div><!--end navigation-->
    </div><!--end container-->
</nav><!--end header-->
<!-- End Navbar -->
</template>

<script>
import vClickOutside from 'v-click-outside';
import feather from 'feather-icons';
// import VueMetamask from 'vue-metamask';
export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    props: {
        navLight: {
            type: String,
            required: true
        },
        logoLight: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            toggle: false,
            activeIndex: '',
            menu: true,
            openMenu: '',
            dropdownOpen: false,
            metamask: null,
            isActive: false
        }
    },
    created() {
        this.activeIndex = window.location.pathname
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('click', this.handleClickOutside);
        feather.replace();
        this.scrollToTop()
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('click', this.handleClickOutside);
    },

    methods: {
        handler() {
            this.toggle = !this.toggle;
        },
        submenu(item) {
            this.menu = !this.menu
            this.openMenu = item
        },
        handleScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
            }
        },
        handleClickOutside(event) {
            console.log(event);
            // if (!this.$refs.dropdownToggle.contains(event.target)) {
            //     this.dropdownOpen = false;
            // }
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        connect() {
            if (window.ethereum) {
                window.ethereum.enable().then(() => {
                }).catch((error) => {
                    console.error(error);
                });
            } else {
                this.toggles();
                // const metaMaskInstallLink = "https://metamask.io/download/";
                // window.open(metaMaskInstallLink, "_blank");
            }
        },

        toggles() {
            this.isActive = !this.isActive;
        }
    },

}

</script>
<style lang="scss" scoped></style>