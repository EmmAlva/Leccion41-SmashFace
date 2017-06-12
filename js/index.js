'use strict';

const state = {
		sede1: mexico,
		sede2: peru,
		selectedSede: null
}
const namePeru = state.sede2;
const nameMexico = state.sede1;

$.each(mexico, function(index, elem){

})

$(document).ready(function(){	
	const imgRandoMex = mexico[Math.floor(Math.random()*mexico.length)];
	const imgRandoPer = peru[Math.floor(Math.random()*peru.length)];
	console.log(imgRandoPer);
	console.log(imgRandoMex);

	var play = $(".sedesLab").change(function(){
			if($(".sedesLab").val() == "mexico"){
				$(".photo-coder").attr("src","img/mexico/"+ imgRandoMex.image);
			
				}
		else if($(".sedesLab").val() == "lima" || $(".sedesLab").val() == "arequipa"){
			$(".photo-coder").attr("src","img/peru/"+imgRandoPer.image);
		}
		else if($(".sedesLab").val() == "chile"){
			$(".photo-coder").parent().text("Sin datos, prueba de nuevo");
		}
	});

		$(".btn").click(function(){
					if($("#name").val() == imgRandoMex.name){
					$("#score") = $("#score").text(5);
					$(".photo-coder").attr("src","img/mexico/"+ imgRandoMex.image);

					}else{	alert("try again");}
					});

	
	


});

	//var filter = function filterPerSede(state){	
