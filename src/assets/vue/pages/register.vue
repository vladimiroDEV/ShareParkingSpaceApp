<template>
	<f7-page>
		<f7-navbar title="Registrazione"></f7-navbar>
		<f7-list form>
			<f7-list-item>
				<f7-label>E-mail</f7-label>
				<f7-input type="email" placeholder="E-mail"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Password</f7-label>
				<f7-input type="password" placeholder="Password"></f7-input>
			</f7-list-item>
            	<f7-list-item>
				<f7-label>Ripeti Password</f7-label>
				<f7-input type="password" placeholder="Password"></f7-input>
			</f7-list-item>

		</f7-list>

        	<f7-block inner>
                <p><f7-button fill  color="green">Registrati</f7-button></p>

        	</f7-block>
	</f7-page>
</template>

<script>
	export default {
 created() {
   
    console.log(this.$router)
  }
    }
</script>