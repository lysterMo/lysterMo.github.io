// JavaScript Document
// JavaScript Document

$(function () {

jwplayer().onTime(function(e) {

	if((e.position>=30 && e.position <31)){
		jwplayer().pause();
      $('#pg4-col2').css('background-image','url(../images/doctor_unhappy.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playerztx5NAUa').fadeOut(30);
				$('#pg10-col1').replaceWith("<div id='pg10-col1'><p><strong>What happened?</strong></p><p>The doctor: </p><ul><li>Doesn't use Ella's name</li><li>Uses jargon when consulting with Ella</li><li>Doesn't do anything to try and reassure Ella</li><li><a id='better' href='#'>View an example of clear patient communication</a></li></div>");
		$('#better').click(function(){
			jwplayer().seek(32);
			
			$('#playerpTohdFeA').fadeIn(50);jwplayer().play();
			$('#pg10-col1').fadeOut(500);
			});
			
		
	}
				});

jwplayer().onComplete(function() {
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page18.html" title="previous page" class="back-btn">back</a></li><li><a href="page21.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	$('#pg4-col2').css('background-image','url(../images/happy_doctor.png)')			
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#pg4-col2').fadeIn(30);
				$('#playerpTohdFeA').fadeOut(30);

				});
});
            


            
