import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import  MainBody  from './components/MainBody.vue';

const routes = [
    {
        path: '/',
        component: MainBody,
        name:'Home'
    }
]

const router = new VueRouter({
    mode:'history',
    routes,
})

export default router;