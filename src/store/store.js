import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loggedIn: false,
    token: null,
    user: null,
  },
  getters: {
    getLoginStatus: state => state.loggedIn,
    getToken: state => state.token,
    getUser: state => state.user,
  },
  mutations: {
    loginUser(state, payload) {
      state.loggedIn = true;
      state.token = payload.data.token;
      state.user = payload.data.user;
    },
    logoutUser(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = null;
    },
    signupUser(state, payload) {
      state.loggedIn = true;
      state.token = payload.data.token;
      state.user = payload.data.user;
    }
  },
  actions: {
    async loginUser({ commit }, userData) {
      const response = await Axios({
        method: 'post',
        url: `/users/login`,
        data: userData,
        headers: { 'Content-Type': 'application/json' },
      });
      commit('loginUser', response)
    },
    async logoutUser({ commit }, userData) {
      const response = await Axios({
        method: 'post',
        url: '/users/logout',
        data: userData,
        headers: { 'Content-Type': 'application/json' },
      })
      commit('logoutUser', response);
    },
    async signupUser({ commit }, userData) {
      const response = await Axios({
        method: 'post',
        url: '/users',
        data: userData,
        headers: { 'Content-Type': 'application/json' },
      });
      commit('signupUser', response)
    }
  }
})