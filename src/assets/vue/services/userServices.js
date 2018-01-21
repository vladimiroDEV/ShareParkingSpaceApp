import axios from 'axios';
import {BASE_URL} from '../utils/config'
const AuthStr = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.common['Content-Type'] =  'application/json';
axios.defaults.headers.common['Authorization'] =AuthStr;


export {GetCurrentUserDataServ} ; 

function GetCurrentUserDataServ(){
    const url = `${BASE_URL}/ManageAccount/GetUserInfo`;
    return axios.get(url);
}

