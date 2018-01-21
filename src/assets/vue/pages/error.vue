<template>


	<f7-pages>
		<f7-page>
			<f7-navbar title="Error" back-link="Back" sliding></f7-navbar>
		  
		   <P> Si è verificato un errore </P>
           <f7-button  v-on:click="goHome">Register</f7-button>

			
		</f7-page>
	</f7-pages>

                      
                        
</template>

<script>
import {loginServices} from '../services/auth'
//import router from '@/router'
    import store from '../../../main'
export default {

	methods:{
		
			goHome() {
                this.$f7.mainView.router.load({url: "/home"});
            }	
		
	}
   
}
    
</script>
