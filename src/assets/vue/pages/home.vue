<template>
	<f7-page>
		 <f7-navbar>
              <f7-nav-center sliding>Home</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>

		<f7-block inner>
			<p> Per poter utilizare il servizio  completa il tuo profilo <f7-link href="/userProfile/">Profilo</f7-link></p>
			<p> Per poter utilizare il servizio inserisci i dati relativi alla tua auto <f7-link href="/autoInfo/">Auto</f7-link></p>

			<button @click="shareParking">Cedi Posto </button>
		</f7-block>

	 <f7-panel right cover>
            <f7-block>
              <p>Menu</p>
            </f7-block>
            
            <f7-list>
              <f7-list-item link="/userProfile/" title="Profilo"></f7-list-item>
              <f7-list-item link="/autoInfo/" title="Auto"></f7-list-item>
			  <f7-list-item link="/credits/" title="Credito"></f7-list-item>
			  <f7-list-item link="/logout/" title="Logout"></f7-list-item>
            </f7-list>      
     
    </f7-panel>
	
	</f7-page>
</template>

<script>
	import {shareParking} from '../services/userServices'
	export default {
		

		data() {return{
         currentPosition:{
					 lat:'',
					 long:'',
					 location:''
				 }
		}},
	
            beforeMount(){
            if (!this.$store.state.isLogged) {
				 this.$f7.mainView.router.load({url: "/login"})
				
				}
			else if(!this.$store.state.userInfoComplete) {
		    try {
				this.$f7.mainView.router.load({url: "/autoInfo"})
			}catch(erro){
            console.log(erro);
			}	 
			}
			else if(!this.$store.state.autoInfoComplete) {
				this.$f7.mainView.router.load({url: "/autoInfo"})
			}
							
			},
			methods:{
				shareParking() {
		 //		this.showPreloader = true;
				
				 navigator.geolocation.getCurrentPosition(
					 	(position)=>{
							 this.showPreloader = false;
							 this.currentPosition.lat = position.coords.latitude;
							 this.currentPosition.long = position.coords.longitude;

							 alert("getPositionok");

							 // location 
							 	nativegeocoder.reverseGeocode(
					result =>{
					//	alert("The address is: \n\n" + JSON.stringify(result)+" \n\n Locality:   "+result.locality);
					this.currentPosition.location = result.locality;
					alert("getlocality" + result.locality);
					// api 
					shareParking(this.currentPosition.lat, this.currentPosition.long, this.currentPosition.location)
					then(res=>{ alert("la segnalazione è andata a buon fine");

					}).catch(err=>{alert("Error:  "+ err)})
					

						}, 
					err=>{alert(JSON.stringify(err));}, 
					 this.currentPosition.lat, this.currentPosition.long);	

						 },
				(error)=>{
					this.showPreloader = false;
					  alert('code: '    + error.code    + '\n' +
                   'message: ' + error.message + '\n');
				});
			},
				
			}
			
        
    }
</script>