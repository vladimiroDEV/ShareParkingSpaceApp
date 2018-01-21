import axios from 'axios';
import {BASE_URL} from '../utils/config'
const AuthStr = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.common['Content-Type'] =  'application/json';
axios.defaults.headers.common['Authorization'] =AuthStr;


export {GetCurrentUserDataServ, updateUser,updateUserAuto, refillCredit} ; 

function GetCurrentUserDataServ(){
    const url = `${BASE_URL}/ManageAccount/GetUserInfo`;
    return axios.get(url);
}

function updateUser(displayName, name, surname) {
    const url = `${BASE_URL}/ManageAccount/UpdateUserProfile`;
  
    return axios.post(url,{
      "DisplayName":displayName, 
      "Name":name, 
      "Surname":surname 
    });

}
function updateUserAuto(plate, brend, model,color){
    const url = `${BASE_URL}/ManageAccount/UpdateAutoInfo`;
  
    return axios.post(url,{
      "CarBrend":brend, 
      "CarModel":model, 
      "CarColor":color,
      "NumberPlate":plate
    });
}

function refillCredit(newCredit){
    const url = `${BASE_URL}/ManageAccount/UpdateUserCredit`; 
    return axios.post(url,{
      "Credit":newCredit, 
      "Action":1 /// 1= ricarica 
    });
}

