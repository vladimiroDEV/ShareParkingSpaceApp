<template>
	<f7-page>
		<f7-navbar title="About" back-link="Back" sliding></f7-navbar>
		<f7-block inner>
			<p>Home</p>
			<f7-link href="/home/">home</f7-link>
			<f7-link href="/autoInfo/">autoInfo</f7-link>
			<f7-link href="/userProfile/">userProfile</f7-link>
			<f7-link href="/home/">home</f7-link>

			
			
		</f7-block>
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