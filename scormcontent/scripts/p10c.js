// JavaScript Document

$(function () {

//before this stop video at pause frame show image. Click continue to play video again.
//this at end
jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up

                    $("#ella").delay(3000).animate({'marginTop' : "+=20px"},5000); //moves up
        
});

jwplayer().onComplete(function() {
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page10a.html" title="previous page" class="back-btn">back</a></li><li><a href="page11.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');

	
 $('#pg4-col2').css('background-image','url(../images/happy_recpt.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playereiw31QJf').hide();

                
				});
});
            
