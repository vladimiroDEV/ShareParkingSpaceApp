import axios from 'axios';
import {BASE_URL} from '../utils/config'


//axios.defaults.headers.common['Authorization'] = store.getState().auth.user.token;
axios.defaults.headers.common['Content-Type'] =  'application/json';

export {loginServices, getPrivateStartupBattles};




  function loginServices(email, password) {
  const url = `${BASE_URL}/AccountApi/login`;

  return axios.post(url,{
    "Email":email, 
    "Password":password, 
    "RememberMe":false 
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