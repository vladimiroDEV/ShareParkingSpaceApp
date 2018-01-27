<template>


	<f7-pages>
		<f7-page>
			<f7-navbar title="Login" back-link="Back"></f7-navbar>
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
import {GetCurrentUserDataServ} from '../services/userServices'

export default {

	data: function() { return {
	   password:'',
	   username:''  
	}
	},

	methods:{
		login(){
			loginServices(this.username, this.password)
			//loginServices("test2@mail.it", "password")
			.then(response =>{
				 console.log("response token");
				 console.log("token " + response.data)
					localStorage.setItem('token', response.data);
					GetCurrentUserDataServ()
				.then(res=> {
					var user = res.data;
					console.log("response user ");
					console.log(user);
					// user info 
					if(user.DisplayName == null) {
						this.$store.commit('USER_INFO_INCOMPLETE');	
					}else {
						this.$store.commit('USER_INFO_COMPLETE');
					}

					// auto info
					if(user.auto == null) {
						this.$store.commit('AUTO_INFO_INCOMPLETE');	
					}else {
						this.$store.commit('AUTO_INFO_COMPLETE');
						console.log(user.auto);
						this.$store.commit('UPDATE_USER_AUTO', user.auto)
					}

					this.$store.commit('UPDATE_USER_PROFILE',user)
					this.$store.commit('UPDATE_USER_CREDIT',user.credits);
				    this.$store.commit('LOGIN_USER');	
					this.$f7.mainView.router.load({url: "/home"})	
							

						})
				.catch(function (error) {
					console.log(error)
				});	
									
				})
				.catch(function (error) {
					console.log(error)
				});
		}
	}
   
}
    
</script>
