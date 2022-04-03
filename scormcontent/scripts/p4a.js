// JavaScript Document

$(function () {
	
		if($.browser.msie){
		setTimeout(function(){$('#fader1').fadeIn('slow').css("display","inline");}, 5000);
	setTimeout(function(){$('#fader2').fadeIn('slow').css("display","inline");}, 9000);
	setTimeout(function(){$('#fader3').fadeIn('slow').css("display","inline");}, 15000);
	setTimeout(function(){$('#fader4').fadeIn('slow', function(){$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page4.html" title="previous page" class="back-btn">back</a></li><li><a href="page5.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}).css("display","inline");}, 21000);
}else{
	setTimeout(function(){$('#fader1').fadeIn('slow').css("display","inline-block");}, 5000);
	setTimeout(function(){$('#fader2').fadeIn('slow').css("display","inline-block");}, 9000);
	setTimeout(function(){$('#fader3').fadeIn('slow').css("display","inline-block");}, 15000);
	setTimeout(function(){$('#fader4').fadeIn('slow', function(){$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page4.html" title="previous page" class="back-btn">back</a></li><li><a href="page5.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}).css("display","inline-block");}, 21000);
		//$('#fader1').delay(5000).fadeIn('slow', function(){$('#fader1').css("display", "inline-block");});
		//$('#fader2').delay(9000).fadeIn('slow', function(){$('#fader2').css("display", "inline-block");});
		//$('#fader3').delay(15000).fadeIn('slow', function(){$('#fader3').css("display", "inline-block");});
		//$('#fader4').delay(20000).fadeIn('slow', function(){$('#fader4').css("display", "inline-block");});
	
		/*$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page4.html" title="previous page" class="back-btn">back</a></li><li><a href="page5.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}, 6000);*/
	
		
		
}
	
});
            
