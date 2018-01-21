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

