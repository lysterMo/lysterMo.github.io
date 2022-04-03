// JavaScript Document
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
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page18.html" title="previous page" class="back-btn">back</a></li><li><a href="page20b.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
$('#pg4-col2').css('background-image','url(../images/doctor_unhappy.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playerpTohdFeA').fadeOut(30);
				

				});
});
            


            
