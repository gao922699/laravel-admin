import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
    },
    getters: {
        getUser(state) {
            if (!state.user) {
                state.user = JSON.parse(localStorage.getItem('user'));
            }
            return state.user;
        },
    },
    mutations: {
        login(state, payload) {
            state.user = payload;
            localStorage.setItem('user', JSON.stringify(payload));
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});

export default store;