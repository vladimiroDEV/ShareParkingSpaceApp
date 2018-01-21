import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);


const state = {
    isLogged: !!localStorage.getItem('token')
  }
  const mutations = {
    LOGIN_USER (state) {
        state.isLogged = true
    },
    
    LOGOUT_USER (state) {
        state.isLogged = false
    }
  }


  export const  store = new   Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations
  })