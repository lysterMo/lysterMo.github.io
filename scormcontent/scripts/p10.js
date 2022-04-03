// JavaScript Document

$(function () {
var $foo = $('.foo');
jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up
$foo.t = setTimeout((function() {
                    $("#ella").delay(4000).animate({'marginTop' : "-=40px"},10000); //moves up
                }), 1000);
});
//before this stop video at pause frame show image. Click continue to play video again.
//this at end

jwplayer().onComplete(function() {
	clearTimeout($foo.t);
$('#caption-overlay-video').css('display','block');			
				
				$('#playerPJQaF3E7').css('display','none');
				$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page8.html" title="previous page" class="back-btn">back</a></li><li><a href="page10a.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	
 /*$('#pg4-col2').css('background-image','url(../images/happy_recpt.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playerPJQaF3E7').hide();*/

                
				});
});
            
