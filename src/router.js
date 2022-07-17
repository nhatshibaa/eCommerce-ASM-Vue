import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/",
        name: "Home",
        component: () => import("./components/Home")
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("./components/Shop")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("./components/About")
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("./components/Contact")
    },
    {
        path: "/blog",
        name: "blog",
        component: () => import("./components/Blog")
    },
    {
        path: "/faq",
        name: "faq",
        component: () => import("./components/Faq")
    },

    // shopping cart
    {
        path: "/cart",
        name: "cart",
        component: () => import("./components/Cart")
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () => import("./components/Checkout")
    },
    {
        path: "/wishlist",
        name: "wishlist",
        component: () => import("./components/Wishlist")
    },

    // auth
    {
        path: "/login",
        name: "login",
        component: () => import("./components/Login")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("./components/Register")
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
