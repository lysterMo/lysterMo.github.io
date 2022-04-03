// JavaScript Document
// JavaScript Document

$(function () {
jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up

                    $("#ella").delay(4000).animate({'marginTop' : "+=20px"},5000); //moves up
        
});
jwplayer().onComplete(function() {
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page24b.html" title="previous page" class="back-btn">back</a></li><li><a href="page25.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	$('#pg4-col2').css('background-image','url(../images/happy_final.png)')
	//$('#caption-overlay').css('display', 'block');		
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#pg4-col2').fadeIn(10);
				$('#playeriIow7JtH').fadeOut(30);

				});
});
            


            
