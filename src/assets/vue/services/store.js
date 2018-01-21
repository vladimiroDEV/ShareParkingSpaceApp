import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);


const state = {
    isLogged: !!localStorage.getItem('token'),
    userInfoComplete:false
  }
  const mutations = {
    LOGIN_USER (state) {
        state.isLogged = true
    },
    
    LOGOUT_USER (state) {
        state.isLogged = false
    },
    USER_INFO_COMPLETE (state){
       state.userInfoComplete= true;
    },
    USER_INFO_INCOMPLETE (state){
        state.userInfoComplete= false;
     },
     AUTO_INFO_COMPLETE (state){
        state.autoInfoComplete= true;
     },
     AUTO_INFO_INCOMPLETE (state){
        state.autoInfoComplete= true;
     },

  }

  
  export const  store = new   Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations
  })