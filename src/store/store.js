import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loggedIn: false,
    },
    getters: {
        getLoginStatus: state => state.loggedIn,
    },
    mutations: {
        loginUser(state) {
            state.loggedIn = true
        },
        logoutUser(state) {
            state.loggedIn = false
        },
    },
    actions: {
        loginUser(context) {
            setTimeout(() => {
                context.commit('loginUser');
            }, 1000)
        },
        logoutUser(context) {
            context.commit('logoutUser');
        },
    }
})