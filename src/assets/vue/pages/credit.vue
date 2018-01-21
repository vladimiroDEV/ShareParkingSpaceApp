<template>


	<f7-pages>
		<f7-page>
			<div v-show="updateOK">

				<p> La ricarica è andata  a buon fine</p>
				<p><f7-button  href="/home/">Home</f7-button></p>

			</div>
			<div v-show="!updateOK">
            <f7-navbar title="Ricarica" back-link="Back"></f7-navbar>

            <p> Il tuo credito è {{currentCredit}} € </p>
					<f7-list form>
			<f7-list-item>
				<f7-label>Targa</f7-label>
				<f7-input type="number" v-model="aaCredit" placeholder="0,0" ></f7-input>
			</f7-list-item>

		</f7-list>
		
			<f7-block inner>
                <p><f7-button fill @click="refill"  color="green">Ricarica</f7-button></p>

        	</f7-block>
			</div>
			
				
		</f7-page>
	</f7-pages>

                      
                        
</template>

<script>
import {refillCredit} from '../services/userServices'
export default {

	data() { return {
        currentCredit:0,
        aaCredit:0,
		updateOK:false
		}},
		methods:{
		refill() {
            if(this.aaCredit > 0) {
                  console.log(this.aaCredit)
          refillCredit(this.aaCredit)
		    .then(res=>{
              console.log(res.data)
				this.$store.commit('UPDATE_USER_CREDIT',res.data.credits);
				this.updateOK = true;
			  })
          .catch(error=>console.log(error))
            }
		}},	

		created() {
		console.log("created");
		this.currentCredit = this.$store.state.currentUser.Credit;
	}
		}

    
</script>
