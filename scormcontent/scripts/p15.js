// JavaScript Document

$(function () {



jwplayer().onComplete(function() {
	


                $('#pg4-col2').css('background-image','url(../images/nurse_happy.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playerY74WXFoR').fadeOut(30);
				$('#pg10-col1').replaceWith("<div id='pg10-col1'><p><strong>What happened?</strong></p><p>The nurse: </p><ul><li>Looks at her watch</li><li>Rolls her eyes</li><li>Moves away before Ella reaches her</li><li>Doesn't show any interest in Ella</li><li> Doesn't inform Ella of what she's doing</li><li>Doesn't smile</li><li>Is not physically gentle with Ella</li></div>");
				});
});
            
