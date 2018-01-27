<template>
	<!-- App -->
	<div id="app">
				
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
	
				<!-- Pages -->
				<f7-pages>
					<f7-page>

				<f7-card>
				<f7-card-content><img src="./assets/images/logo.png" width="200"></f7-card-content>
				<f7-card-footer>Share Parking Spaces</f7-card-footer>
				</f7-card>

					<f7-block>
							
									<f7-button v-on:click="goLogin">Login</f7-button>
									<br/>
									 
									 <f7-button  href="/register/">Registrati</f7-button>

									  <f7-button  @click="getPosition">Get Current Position</f7-button>
									   <f7-button  @click="showMaps">Get Show Mapps</f7-button>
									   <f7-button  @click="showLocation">Show Location</f7-button>
									
						</f7-block>
						
					
				       <f7-preloader v-if="showPreloader"></f7-preloader>

					   <div id="map_canvas" style="height:400px; width:400px" ></div>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>	
	</div>
</template>

<script>

	export default {

		data(){return{
               showPreloader:false,
			 
		}},

		methods:{
			showLocation(){
				debugger;
				nativegeocoder.reverseGeocode(
					result =>{alert("The address is: \n\n" + JSON.stringify(result)+" \n\n Locality:   "+result.locality);}, 
					err=>{alert(JSON.stringify(err));}, 
					41.8559747, 12.557053);	
			},
			
			goRegister(){
				this.$f7.mainView.router.load({url: "/register"})
			},
			goLogin(){
				this.$f7.mainView.router.load({url: "/login"})
			},
			getPosition(){
				this.showPreloader = true;
				
				 navigator.geolocation.getCurrentPosition(
					 	(position)=>{
							 this.showPreloader = false;
							  alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
			  'Timestamp: '         + position.timestamp                + '\n');
			  
						 },
				(error)=>{
					this.showPreloader = false;
					  alert('code: '    + error.code    + '\n' +
                   'message: ' + error.message + '\n');
				});
			},
			showMaps(){
					
			var map;
			var div = document.getElementById("map_canvas");
			 map = plugin.google.maps.Map.getMap(div,
			 {
  camera: {
    target: {lat: -34.397, lng: 150.644},
    zoom: 19
  }
});
			 

		}
	}
	}
</script>

<style>
	.main-page-background{
		background-color: "09c6df"
	}
</style>

