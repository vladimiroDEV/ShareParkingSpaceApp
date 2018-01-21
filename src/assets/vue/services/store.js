import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);


const state = {
    isLogged: !!localStorage.getItem('token'),
    userInfoComplete:false,
    currentUser:{
        DisplayName:'',
        Name:'',
        Surname:'',
        Credit:'',
        auto:{
                plate: '',
                brend:'',
                model:'',
                color:'',
            },
        }
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

     UPDATE_USER_PROFILE(state, payload){
         state.currentUser.DisplayName = payload.displayName;
         state.currentUser.Name = payload.name;
         state.currentUser.Surname = payload.surname;
     },
     UPDATE_USER_AUTO(state, auto){
        state.currentUser.auto.plate= auto.numberPlate;
        state.currentUser.auto.brend= auto.carBrend;
        state.currentUser.auto.model= auto.carModel;
        state.currentUser.auto.color= auto.carColor;
    },
     UPDATE_USER_CREDIT(state, credit){
         state.currentUser.Credit= credit;
     }

     

  }

  
  export const  store = new   Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations
  })