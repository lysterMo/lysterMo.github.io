// JavaScript Document

$(function () {

jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up

                    $("#ella").animate({'marginTop' : "+=20px"},5000); //moves up
        
});

jwplayer().onComplete(function() {
	


                $('#pg4-col2').css('background-image','url(../images/pg5a_back.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#player42X6cUM4').fadeOut(30);
				$('#pg4-col1').replaceWith("<div id='pg4-col1'><p class='feedback-new'>First impressions are important. <br/><br/>A friendly face can really help calm fear and anxiety.</p></div>")
				});
});
            
