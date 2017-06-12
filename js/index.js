/*$.getScript('js/mexico.js'), function(){
	var resultado = mexico[0].name(1);
}*/

/*var photo = $('#photo-coder');

photo.attr("src") = mexico.imagen; */
'use strict';


/*const wrapper = $('<div class ="wrapper"></div>');
const container = $('<div class="codersSection"></div>');
const img = $('<img>'+state.selectedSede.imagen);
*/
const state = {
		sede1: mexico,
		sede2: peru,
		selectedSede: null
}
const namePeru = state.sede2;
const nameMexico = state.sede1;

$(document).ready(function(){	

	$(".sedesLab").change(function(){
		if($(".sedesLab").val() == "mexico"){
			$(".photo-coder").attr("src","img/mexico/"+mexico[0].image);
		}
		else if($(".sedesLab").val() == "lima" || $(".sedesLab").val() == "arequipa"){
			$(".photo-coder").attr("src","img/peru/"+peru[4].image);
		}
		else if($(".sedesLab").val() == "chile"){
			$(".photo-coder").parent().text("Sin datos, prueba de nuevo");
		}

	$(".btn").click(function(){
		if($("#name").val() == namePeru[7].name){
			alert("try again");
		};
	});


	});

	



});

	//var filter = function filterPerSede(state){	
