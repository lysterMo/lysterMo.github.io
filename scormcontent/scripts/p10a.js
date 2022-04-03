// JavaScript Document

$(function () {

jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up

                    $("#ella-new").animate({'marginTop' : "+=20px"},5000); //moves up
        
});

jwplayer().onComplete(function() {
	


                $('#pg4-col2').css('background-image','url(../images/happy_recpt.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playerz0Lf3W75').fadeOut(30);
				$('#pg10-col1').replaceWith("<div id='pg10-col1'><p><strong>What happened?</strong></p><p>The receptionist: </p><ul><li>Pays Ella no attention</li><li>Doesn't greet Ella - unwelcoming, bored facial expression</li><li>No eye contact</li><li>Holds her hand up in front of Ella as a gesture to wait</li><li>Snatches the appointment letter</li><li>Doesn't give any information</li><li>Focusing on the computer not the person</li><li>Embarrassing Ella/the patient by saying their date of birth out loud</li><li>Not letting Ella/the patient know about the waiting time</div>");
				});
});
            
