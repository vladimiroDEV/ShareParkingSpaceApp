<template>
<f7-block>
<f7-login-screen-title>Login</f7-login-screen-title>
						<f7-list form>
							<f7-list-item>
								<f7-label>Username</f7-label>
								<f7-input name="username" placeholder="Username" type="text"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
								<f7-input name="password" type="password" placeholder="Password"></f7-input>
							</f7-list-item>
						</f7-list>
						<f7-list>
							<f7-button @click="login">Sign In</f7-button>
					
						</f7-list>
                        </f7-block>
                        
</template>

<script>
import {loginServices} from '../services/auth'
export default {

	methods:{
		login(){

			console.log("ok");
			// this.$https.post('https://localhost:44334/api/AccountApi/login',{"Email":"test2@mail.it", "Password":"password", "RememberMe":false })
			// .then(function(resp) { console.log(rest)},function(error){console.log(error)});
		    loginServices("user", "pass");
		}
	}
   
}
    
</script>
