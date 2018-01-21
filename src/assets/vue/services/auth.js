import axios from 'axios';
import {BASE_URL} from '../utils/config'


//axios.defaults.headers.common['Authorization'] = store.getState().auth.user.token;
axios.defaults.headers.common['Content-Type'] =  'application/json';

export {loginServices, getPrivateStartupBattles, registreUserServ};




  function loginServices(email, password) {
  const url = `${BASE_URL}/AccountApi/login`;

  return axios.post(url,{
    "Email":email, 
    "Password":password, 
    "RememberMe":false 
  });
}

function registreUserServ(email, password ,confirmPassword){
  const url = `${BASE_URL}/AccountApi/register`;
  
  return axios.post(url,{
    "Email":email, 
    "Password":password, 
    "ConfirmPassword":confirmPassword 
  });
}

function logout(){
  localStorage.removeItem('token');
}
export class User {
  
 
}

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public`;
  return axios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private`;
  return axios.get(url).then(response => response.data);
}