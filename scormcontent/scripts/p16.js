// JavaScript Document
	
$(function () {
var score = 0;
	$('select').change(function(){

		if($(this).val() == "The doctor isn't available now" || $(this).val() == "You can't see the doctor until later"){
		$('#tick01').replaceWith('<div id="tick01"><img src="../images/cross.png" width="20" height="20" /></div>');	
		}else if($(this).val() == "I will let you know when the doctor can see you"){
			$(this).attr('disabled', 'disabled');
			score++;
			check(score);
			$('#tick01').replaceWith('<div id="tick01"><img src="../images/tick.png" width="25" height="19" /></div>');
		}
		
		/*--------------------------------------------*/
			if($(this).val() == "Your blood pressure is too high"){
		$('#tick02').replaceWith('<div id="tick02"><img src="../images/cross.png" width="20" height="20" /></div>');	
		}else if($(this).val() == "Your blood pressure is high"){
			$(this).attr('disabled', 'disabled');
					score++;
			check(score);
			$('#tick02').replaceWith('<div id="tick02"><img src="../images/tick.png" width="25" height="19" /></div>');
		}
		/*--------------------------------------------*/
			if($(this).val() == "No drinking!" || $(this).val() == "Sorry, no drinks allowed"){
		$('#tick03').replaceWith('<div id="tick03"><img src="../images/cross.png" width="20" height="20" /></div>');	
		}else if($(this).val() == "You can drink in the cafe or outside of this room"){
			$(this).attr('disabled', 'disabled');
					score++;
			check(score);
			$('#tick03').replaceWith('<div id="tick03"><img src="../images/tick.png" width="25" height="19" /></div>');
		}	
	/*--------------------------------------------*/
			if($(this).val() == "I don't have that information" || $(this).val() == "Unfortunately, I can't help you"){
		$('#tick04').replaceWith('<div id="tick04"><img src="../images/cross.png" width="20" height="20" /></div>');	
		}else if($(this).val() == "As soon as I have that information I will let you know"){
			$(this).attr('disabled', 'disabled');
					score++;
			check(score);
			$('#tick04').replaceWith('<div id="tick04"><img src="../images/tick.png" width="25" height="19" /></div>');
		}
/*--------------------------------------------*/
			if($(this).val() == "Unfortunately the answer is no" || $(this).val() == "Absolutely not"){
		$('#tick05').replaceWith('<div id="tick05"><img src="../images/cross.png" width="20" height="20" /></div>');	
		}else if($(this).val() == "No, but what can I do for you..."){
			$(this).attr('disabled', 'disabled');
					score++;
			check(score);
			$('#tick05').replaceWith('<div id="tick05"><img src="../images/tick.png" width="25" height="19" /></div>');
		}					
		});
function check(s){
	if(s == 5){
		$('#feedback-text-pg11').css('display','block');
		$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page15c.html" title="previous page" class="back-btn">back</a></li><li><a href="page17.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	}
}
});