// JavaScript Document

$(function () {
	
		if($.browser.msie){
			setTimeout(function(){$('#fader1').fadeIn('slow').css("display","inline");}, 5000);
	setTimeout(function(){$('#fader2').fadeIn('slow').css("display","inline");}, 12000);
	setTimeout(function(){$('#fader3').fadeIn('slow').css("display","inline");}, 18000);
	setTimeout(function(){$('#fader4').fadeIn('slow', function(){$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page24.html" title="previous page" class="back-btn">back</a></li><li><a href="page24c.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}).css("display","inline");}, 22000);
   
}else{
	setTimeout(function(){$('#fader1').fadeIn('slow').css("display","inline-block");}, 5000);
	setTimeout(function(){$('#fader2').fadeIn('slow').css("display","inline-block");}, 12000);
	setTimeout(function(){$('#fader3').fadeIn('slow').css("display","inline-block");}, 18000);
	setTimeout(function(){$('#fader4').fadeIn('slow', function(){$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page24.html" title="previous page" class="back-btn">back</a></li><li><a href="page24c.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');}).css("display","inline-block");},22000); 
	
}
	
});
            
