// JavaScript Document
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		$('#b1').tap(function(){//tap es para dar click en los dispositivos móviles
			navigator.notification.beep(1);
		});
		
	});//device ready
});//ready
