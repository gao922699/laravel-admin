import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers.js';
import store from '../vuex';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if(store.getters.getUser){
            next();
        } else {
            next({path: '/login'});
            return false;
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router;
