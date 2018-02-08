<template>


	
		<f7-page page @page:init="loadMap" data-page="maps">
				<!-- <f7-page> -->
		
            <f7-navbar title="Mappa" back-link="Back"></f7-navbar>
					<f7-list form>
			<f7-list-item>
				<f7-label>Targa</f7-label>
				<f7-input type="text"  placeholder="Targa"></f7-input>
			</f7-list-item>
		</f7-list>
		<div id="map_canvas" style="height:400px; width:400px;" ></div>
				
		</f7-page>

                      
                        
</template>

<script>

export default {


	methods: {
//  onF7Init() {  
      loadMap(){
		  var $$ = Dom7;
	//    onF7Ready(f7) {
		// onF7Ready() {
			//document.addEventListener("deviceready", function() {
				this.$f7.onPageAfterAnimation('maps',function(page){
					// $$(document).on('deviceready', function() {

  
          var div = document.getElementById("map_canvas");
        		
			var map;
			//var div = document.getElementById("map_canvas");
			 map = plugin.google.maps.Map.getMap(div,
			 {
				camera: {
					target: {lat: 41.90278349999999, lng: 12.496365500000024},
					zoom: 19
				}
				});
			});
}
	 }
}

    
</script>
