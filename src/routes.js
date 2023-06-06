import TheAll from "./components/TheAll.vue";
import TheSub from "./components/TheSub.vue";
// import TheIndex from "./components/TheIndex.vue";
import NotFound from "./components/NotFound.vue";
import TheApril from "./components/TheApril.vue";


export default [
    {
        name: "TheApril",
        path: '/',
        component: TheApril
    },
    {
        name: "TheSub",
        path: '/thesub',
        component: TheSub,
    },
    {
        name: "TheAll",
        path: '/theall/:slug',
        component: TheAll,
    },
    {
        name: "TheAll",
        path: '/theall',
        component: TheAll,
    },
    {
        name: "NotFound",
        path: '*',
        component: NotFound,
    }
]