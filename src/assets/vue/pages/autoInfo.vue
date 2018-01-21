<template>


	<f7-pages>
		<f7-page>
			<div v-show="updateOK">

				<p> aggiornato è andato a buon fine</p>
				<p><f7-button  href="/home/">Home</f7-button></p>

			</div>
			<div v-show="!updateOK">
            <f7-navbar title="Auto" back-link="Back"></f7-navbar>
					<f7-list form>
			<f7-list-item>
				<f7-label>Targa</f7-label>
				<f7-input type="text" v-model="auto.plate"  placeholder="Targa"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Marca</f7-label>
				<f7-input type="text" v-model="auto.brend"  placeholder="Marca"></f7-input>
			</f7-list-item>
            <f7-list-item>
				<f7-label>Modello</f7-label>
				<f7-input type="text" v-model="auto.model"  placeholder="Modello"></f7-input>
			</f7-list-item>
			   <f7-list-item>
				<f7-label>Colore</f7-label>
				<f7-input type="text" v-model="auto.color"  placeholder="Colore"></f7-input>
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
import {updateUserAuto} from '../services/userServices'
export default {


	data() { return {
		auto:{
			plate: '',
			brend:'',
			model:'',
			color:'',
		},
		updateOK:false
		}},
		methods:{
		save() {
		  updateUserAuto(this.auto.plate, this.auto.brend, this.auto.model,this.auto.color)
		  .then(res=>{
			  console.log(res.data)
				this.$store.commit('UPDATE_USER_AUTO',res.data.auto);
				this.updateOK = true;
			  })
		  .catch(error=>console.log(error))
		}},	

		created() {
		console.log("created");
		this.auto.plate = this.$store.state.currentUser.auto.plate;
		this.auto.brend = this.$store.state.currentUser.auto.brend;
		this.auto.model = this.$store.state.currentUser.auto.model;
		this.auto.color = this.$store.state.currentUser.auto.color;
	}
		}

    
</script>
