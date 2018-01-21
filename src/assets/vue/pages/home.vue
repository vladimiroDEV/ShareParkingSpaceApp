<template>
	<f7-page>
		<f7-navbar title="About" back-link="Back" sliding></f7-navbar>
		<f7-block inner>
			<p>Home</p>
			
		</f7-block>
	</f7-page>
</template>

<script>
	import {store} from '../../../main'
	export default {
	
            beforeCreate () {
            if (!this.$store.state.isLogged) {
                router.push('/login')
			}
			}
        
    }
</script>