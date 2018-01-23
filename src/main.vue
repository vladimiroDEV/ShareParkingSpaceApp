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
									
						</f7-block>
						
					
				
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>	
	</div>
</template>

<script>

	export default {

		data(){return{
               
		}},

		created() {
			  document.addEventListener("deviceready", onDeviceReady, false);
    		function onDeviceReady() {
       			var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
		},
			
		methods:{
			
			goRegister(){
				this.$f7.mainView.router.load({url: "/register"})
			},
			goLogin(){
				this.$f7.mainView.router.load({url: "/login"})
			}
		
		}
	}
</script>

<style>
	.main-page-background{
		background-color: "09c6df"
	}
</style>

