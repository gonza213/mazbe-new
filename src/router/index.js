import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/index.vue'),
  },
  {
    path: "/index-two",
    name: "index-two",
    component: () => import('@/pages/index/index-two.vue'),
  },
  {
    path: "/index-three",
    name: "index-three",
    component: () => import('@/pages/index/index-three.vue'),
  },
  {
    path: "/index-four",
    name: "index-four",
    component: () => import('@/pages/index/index-four.vue'),
  },
  {
    path: "/index-five",
    name: "index-five",
    component: () => import('@/pages/index/index-five.vue'),
  },
  {
    path: "/explore-one",
    name: "explore-one",
    component: () => import('@/pages/explore/explore-one.vue'),
  },
  {
    path: "/explore-two",
    name: "explore-two",
    component: () => import('@/pages/explore/explore-two.vue'),
  },
  {
    path: "/explore-three",
    name: "explore-three",
    component: () => import('@/pages/explore/explore-three.vue'),
  },
  {
    path: "/auction",
    name: "auction",
    component: () => import('@/pages/explore/auction.vue'),
  },
  {
    path: "/item-detail",
    name: "item-details",
    component: () => import('@/pages/explore/item-detail.vue'),
  },
  {
    path: "/item-detail/:id",
    name: "item-detail",
    component: () => import('@/pages/explore/item-detail.vue'),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import('@/pages/explore/activity.vue'),
  },
  {
    path: "/collections",
    name: "collections",
    component: () => import('@/pages/explore/collections.vue'),
  },
  {
    path: "/upload-work",
    name: "upload-work",
    component: () => import('@/pages/explore/upload-work.vue'),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import('@/pages/wallet.vue'),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import('@/pages/contact.vue'),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import('@/pages/aboutus.vue'),
  },
  {
    path: "/creators",
    name: "creators",
    component: () => import('@/pages/creators/creators.vue'),
  },
  {
    path: "/creator-profile",
    name: "creator-profile",
    component: () => import('@/pages/creators/creator-profile.vue'),
  },
  {
    path: "/creator-profile-edit",
    name: "creator-profile-edit",
    component: () => import('@/pages/creators/creator-profile-edit.vue'),
  },
  {
    path: "/become-creator",
    name: "become-creator",
    component: () => import('@/pages/creators/become-creator.vue'),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import('@/pages/terms.vue'),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import('@/pages/privacy.vue'),
  },
  {
    path: "/helpcenter-overview",
    name: "helpcenter-overview",
    component: () => import('@/pages/help-center/helpcenter-overview.vue'),
  },
  {
    path: "/helpcenter-faqs",
    name: "helpcenter-faqs",
    component: () => import('@/pages/help-center/helpcenter-faqs.vue'),
  },
  {
    path: "/helpcenter-guides",
    name: "helpcenter-guides",
    component: () => import('@/pages/help-center/helpcenter-guides.vue'),
  },
  {
    path: "/helpcenter-support",
    name: "helpcenter-support",
    component: () => import('@/pages/help-center/helpcenter-support.vue'),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import('@/pages/blog/blogs.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-details",
    component: () => import('@/pages/blog/blog-detail.vue'),
  },
  {
    path: "/blog-detail/:id",
    name: "blog-detail",
    component: () => import('@/pages/blog/blog-detail.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/pages/auth-pages/login.vue'),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('@/pages/auth-pages/signup.vue'),
  },
  {
    path: "/signup-success",
    name: "signup-success",
    component: () => import('@/pages/auth-pages/signup-success.vue'),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import('@/pages/auth-pages/reset-password.vue'),
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import('@/pages/auth-pages/lock-screen.vue'),
  },
  {
    path: "/comingsoon",
    name: "comingsoon",
    component: () => import('@/pages/special-pages/comingsoon.vue'),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import('@/pages/special-pages/maintenance.vue'),
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: () => import('@/pages/special-pages/thankyou.vue'),
  },
  {
    path: "/:error(.*)",
    name: "error",
    component: () => import('@/pages/special-pages/error.vue'),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;