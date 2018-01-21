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
	
	export default {
	
            beforeMount(){

				console.log("crreater")
            if (!this.$store.state.isLogged) {
				  //this.$router.push('/login')
				 this.$f7.mainView.router.load({url: "/login"})
				
				}
			else if(!this.$store.state.userInfoComplete) {
		    try {
				this.$f7.mainView.router.load({url: "/autoInfo"})
			}catch(erro){
            console.log(erro);
			}
				 
				  return;
				 
			}
			else if(!this.$store.state.autoInfoComplete) {
				this.$f7.mainView.router.load({url: "/autoInfo"})
			}
							
			}
			
        
    }
</script>