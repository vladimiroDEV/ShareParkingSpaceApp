<template>


	<f7-pages>
		<f7-page>
			<f7-login-screen-title>Login</f7-login-screen-title>
			<f7-list form>
				<f7-list-item>
					<f7-label>Username</f7-label>
					<f7-input name="username"  v-model="username" placeholder="Username" type="text"></f7-input>
				</f7-list-item>
				<f7-list-item>
					<f7-label>Password</f7-label>
					<f7-input name="password"  v-model="password" type="password" placeholder="Password"></f7-input>
				</f7-list-item>
			</f7-list>
			<f7-list>
				<f7-button @click="login">Sign In</f7-button>
		
			</f7-list>
		</f7-page>
	</f7-pages>

                      
                        
</template>

<script>
import {loginServices} from '../services/auth'
//import router from '@/router'
  //  import store from '../../../main'
export default {

	data: {
	   'password':null,
	   'username':null  
	},

	methods:{
		login(){

			console.log("ok");
			// this.$https.post('https://localhost:44334/api/AccountApi/login',{"Email":"test2@mail.it", "Password":"password", "RememberMe":false })
			// .then(function(resp) { console.log(rest)},function(error){console.log(error)});
			loginServices(this.username, this.password)
			.then(response =>{
					localStorage.setItem('token', response.data);
					this.$store.commit('LOGIN_USER');
					console.log(response.data);
				
					this.$f7.mainView.router.load({url: "/home"})					
				})
				.catch(function (error) {
					console.log(error)
				});
			
				
		}
	}
   
}
    
</script>
