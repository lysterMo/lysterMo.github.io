// JavaScript Document

$(function () {

jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up

                    $("#ella-new").animate({'marginTop' : "+=20px"},5000); //moves up
        
});

jwplayer().onComplete(function() {
	
$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page5.html" title="previous page" class="back-btn">back</a></li><li><a href="page7.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');

                $('#pg4-col2').css('background-image','url(../images/pg6_back.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#player5AKSugNZ').hide();
				$('#pg4-col1').replaceWith("<div id='pg4-col1'><p class='feedback-new'>What a difference!<br/><br/>Ella is feeling much less anxious.</p></div>")
				});
});
            
