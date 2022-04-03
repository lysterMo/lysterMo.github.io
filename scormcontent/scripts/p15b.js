// JavaScript Document

$(function () {
	
		if($.browser.msie){
			
    setTimeout(function(){$('#fader1').fadeIn('slow').css("display","inline");}, 5000);
	setTimeout(function(){$('#fader2').fadeIn('slow').css("display","inline");}, 9000);
	setTimeout(function(){$('#fader3').fadeIn('slow').css("display","inline");}, 15000);
	setTimeout(function(){$('#fader4').fadeIn('slow', function(){$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page15.html" title="previous page" class="back-btn">back</a></li><li><a href="page15c.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}).css("display","inline");}, 20000);
		
}else{
	setTimeout(function(){$('#fader1').fadeIn('slow').css("display","inline-block");}, 5000);
	setTimeout(function(){$('#fader2').fadeIn('slow').css("display","inline-block");}, 9000);
	setTimeout(function(){$('#fader3').fadeIn('slow').css("display","inline-block");}, 15000);
	setTimeout(function(){$('#fader4').fadeIn('slow', function(){$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page15.html" title="previous page" class="back-btn">back</a></li><li><a href="page15c.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}).css("display","inline-block");},20000); 
		
		
	
}
	
});
            
