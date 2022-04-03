// JavaScript Document

$(function () {
	jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up

                    $("#ella").delay(3000).animate({'marginTop' : "+=20px"},5000); //moves up
        
});

jwplayer().onComplete(function() {
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page15b.html" title="previous page" class="back-btn">back</a></li><li><a href="page15d.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	$('#pg4-col2').css('background-image','url(../images/happy_nurse.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				  
				$('#playerDqzUbVZb').hide();

				});
});
            
