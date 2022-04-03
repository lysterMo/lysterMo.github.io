// JavaScript Document

$(function () {
var $foo = $('.foo');
jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up
$foo.t = setTimeout((function() {
                    $("#ella").delay(4000).animate({'marginTop' : "-=40px"},10000); //moves up
                }), 1000);
});
jwplayer().onComplete(function() {
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page14.html" title="previous page" class="back-btn">back</a></li><li><a href="page15b.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	$('#pg4-col2').css('background-image','url(../images/happy_nurse.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				   $('#caption-overlay-video').css('display','block');	
				$('#playerjaDpqgrd').hide();

				});
});
            
