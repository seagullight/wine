$(document).ready(function() {
	
$(".navigat li:last").click(function(){
$(this).find("input").animate({"width":"75vh"}, 1000);
$(this).find("input").css({"background":"transparent url(../img/icon.png) no-repeat 300px -338px","cursor":"text"});
$(this).siblings().hide();

});

		   });