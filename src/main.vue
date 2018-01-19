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
							<f7-grid>
								<f7-col width="50">
									<f7-button open-login-screen="#login-screen">Login</f7-button>
									<br/>
									 
									 <f7-button  href="/register/">Register</f7-button>
									<f7-button  v-on:click="goRegister">Register</f7-button>
								</f7-col>
							</f7-grid>
						</f7-block>
						
					
				
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
				
		<!-- Login Screen -->
		<f7-login-screen id="login-screen">
			<f7-view>
				<f7-pages>
					<f7-page login-screen>
						<app-login></app-login>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-login-screen>
	
	</div>
</template>

<script>
import Login from './assets/vue/components/login.vue'
	export default {
		
        components:{
			'app-login': Login
		}	,	
		methods:{
			
			goRegister(){
				this.$f7.mainView.router.load({url: "/register"})
			}
		
		}
	}
</script>

<style>
	.main-page-background{
		background-color: "09c6df"
	}
</style>

