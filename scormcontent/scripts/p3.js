// JavaScript Document
	
$(function () {

function toggle(div){

	document.getElementById(div).style.display="none";	
	if(div == 'divdisplay1'){

document.getElementById(div).style.display="block";	
document.getElementById('divdisplay2').style.display="none";	
document.getElementById('divdisplay3').style.display="none";	
document.getElementById('divdisplay4').style.display="none";
document.getElementById('porter_btn').style.backgroundPosition ="top";
document.getElementById('doctor_btn').style.backgroundPosition ="bottom";
document.getElementById('nurse_btn').style.backgroundPosition ="bottom";
document.getElementById('receptionist_btn').style.backgroundPosition ="bottom";	
	}else if(div == 'divdisplay2'){

document.getElementById(div).style.display="block";	
document.getElementById('divdisplay1').style.display="none";	
document.getElementById('divdisplay3').style.display="none";	
document.getElementById('divdisplay4').style.display="none";
document.getElementById('receptionist_btn').style.backgroundPosition ="top";	
document.getElementById('doctor_btn').style.backgroundPosition ="bottom";
document.getElementById('nurse_btn').style.backgroundPosition ="bottom";
document.getElementById('porter_btn').style.backgroundPosition ="bottom";	
	}else if(div == 'divdisplay3'){

document.getElementById(div).style.display="block";	
document.getElementById('divdisplay2').style.display="none";	
document.getElementById('divdisplay1').style.display="none";	
document.getElementById('divdisplay4').style.display="none";
document.getElementById('nurse_btn').style.backgroundPosition ="top";
document.getElementById('doctor_btn').style.backgroundPosition ="bottom";
document.getElementById('porter_btn').style.backgroundPosition ="bottom";
document.getElementById('receptionist_btn').style.backgroundPosition ="bottom";		
	}else if(div == 'divdisplay4'){

document.getElementById(div).style.display="block";	
document.getElementById('divdisplay1').style.display="none";	
document.getElementById('divdisplay3').style.display="none";	
document.getElementById('divdisplay2').style.display="none";
document.getElementById('doctor_btn').style.backgroundPosition ="top";
document.getElementById('porter_btn').style.backgroundPosition ="bottom";
document.getElementById('nurse_btn').style.backgroundPosition ="bottom";
document.getElementById('receptionist_btn').style.backgroundPosition ="bottom";		
	}
}
function out(div){
	document.getElementById(div).style.display="none";
	document.getElementById('porter_btn').style.backgroundPosition ="top";
document.getElementById('nurse_btn').style.backgroundPosition ="top";
document.getElementById('receptionist_btn').style.backgroundPosition ="top";	
	document.getElementById('doctor_btn').style.backgroundPosition ="top";	
}
$('#porter_btn').click(function(){toggle('divdisplay1')});
$('#receptionist_btn').click(function(){toggle('divdisplay2')});
$('#nurse_btn').click(function(){toggle('divdisplay3')});
$('#doctor_btn').click(function(){toggle('divdisplay4')});
});