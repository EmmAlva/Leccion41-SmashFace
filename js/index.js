/*$.getScript('js/mexico.js'), function(){
	var resultado = mexico[0].name(1);
}*/

/*var photo = $('#photo-coder');

photo.attr("src") = mexico.imagen; */
/*'use strict';

const state = {
	sede: mexico
}
const wrapper = $('<div class ="wrapper"></div>');
/*const container = $('<div class="codersSection"></div>');
const img = $('<img>'+state.selectedSede.imagen);
*/

$(document).ready(function(){
	$(".sedesLab").change(function(){
		$(this).css("background","peru");
		var filter = function filterPerSede(state){
		$(".photo-coder").attr("src","img/mexico/"+mexico[0].imagen);
	}
	});


});

