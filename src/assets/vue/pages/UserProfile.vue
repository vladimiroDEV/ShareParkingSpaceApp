<template>


	<f7-pages>
		<f7-page>

		<div v-show="updateOK">

				<p>Il profilo è stato aggiornato</p>
				<p><f7-button  href="/home/">Home</f7-button></p>

			</div>
			<div v-show="!updateOK">
			<f7-navbar title="Profilo" back-link="Back"></f7-navbar>
			
		<f7-list form>
			<f7-list-item>
				<f7-label>Display Name</f7-label>
				<f7-input type="text" v-model="user.displayName"  placeholder="Display name"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Nome</f7-label>
				<f7-input type="text" v-model="user.name"  placeholder="Nome"></f7-input>
			</f7-list-item>
            	<f7-list-item>
				<f7-label>Cognome</f7-label>
				<f7-input type="text" v-model="user.surname"  placeholder="Cognome"></f7-input>
			</f7-list-item>

		</f7-list>

        	<f7-block inner>
                <p><f7-button fill @click="save"  color="green">Salva</f7-button></p>

        	</f7-block>
			</div>
	
			
				
		</f7-page>
	</f7-pages>

                      
                        
</template>

<script>

import {updateUser} from '../services/userServices'

export default {
	
	data: function() { return {
		
		user:{
			displayName: '',
			name:'',
			surname:'',
		},
		updateOK:false
	}
	},
	methods:{
		save() {
		  updateUser(this.user.displayName, this.user.name, this.user.surname)
		  .then(res=>{
			  console.log(res.data)
				this.$store.commit('UPDATE_USER_PROFILE',res.data);
				this.updateOK = true;
			  })
		  .catch(error=>console.log(error))
		},		
	},
	created() {
		console.log("created");
		this.user.displayName = this.$store.state.currentUser.DisplayName;
		this.user.name = this.$store.state.currentUser.Name;
		this.user.surname = this.$store.state.currentUser.Surname;
	}
	


	
  }
 
</script>
