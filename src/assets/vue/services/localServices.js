export {getLocalUser}

  function getLocalUser() {
    if(localStorage.getItem('user')){
      return  JSON.parse(localStorage.getItem('user'));
    }else return null;
}