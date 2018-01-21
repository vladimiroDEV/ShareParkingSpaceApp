<template>
	<f7-page>
		<f7-navbar title="Registrazione" back-link="Back"></f7-navbar>
		<div  v-if="!registerSuccess">
		<f7-list form>
			<f7-list-item>
				<f7-label>E-mail</f7-label>
				<f7-input name="email" type="email" v-model="email"  placeholder="E-mail"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Password</f7-label>
				<f7-input type="password" v-model="password"  placeholder="Password"></f7-input>
			</f7-list-item>
            	<f7-list-item>
				<f7-label>Ripeti Password</f7-label>
				<f7-input type="password" v-model="confirmPassword" placeholder="Password"></f7-input>
			</f7-list-item>

		</f7-list>

        	<f7-block inner>
                <p><f7-button fill @click="register"  color="green">Registrati</f7-button></p>

        	</f7-block>
		</div>

		<div  v-if="registerSuccess">
			<p>La registrazione è avvenuta con successo </p>
			<p><f7-button  href="/login/">Login</f7-button></p>
		</div>
	</f7-page>
</template>

<script>
	import {registreUserServ} from '../services/auth'
	export default {
        data:function(){
			return{
				email:'',
				password:'',
				confirmPassword:'',
				registerSuccess : false


			}
		},
		methods: {
			register(){
				registreUserServ(this.email, this.password, this.confirmPassword)
				.then(res=> {this.registerSuccess =true;}
				)
				.catch(err=>console.log(err))
			}
		}
		
 
    }
</script>