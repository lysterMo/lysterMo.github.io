// JavaScript Document

$(function () {
	
function showQuestion(){
	$('#feedback-text').hide();

//change the class on them to show inactive
$('#pg5-btn1').replaceWith('<div id="pg5-btn1"><a href="#"  class="highlight"><span class="btn-text">Assessment unit? It’s the first on the left; straight down the corridor. If you don’t mind a bit of company. I’ll show you the way?</span></a></div>');

$('#pg5-btn1').css('background-position','-100px');
//$('#pg5-btn2').replaceWith('<div id="pg5-btn2"><a href="#"  class="disabled"><span class="btn-text">Okay sweetheart, walk this way. </span></a></div>');
//$('#pg5-btn3').replaceWith('<div id="pg5-btn3"><a href="#" class="disabled"><span class="btn-text">Yes, I can help you. It is first on the left; straight down the corridor. Follow me.</span></a></div>');

//-----------------------------------------------------------------------
$('#pg5-col1').css('background-image','url(../images/pg5_back_q_pan.png)');
$('#pg5-col1').css('background-position','left top');
$('#pg5-col1').append("<div id='pg5-col4' class='question-icon-blue'><p>CORRECT! - <strong style='color:black;'>Click on one of the options below:</strong><br/>Why is it important for the Porter to ask Ella if she wants to be shown the way?</p><br/><p><input type='radio' name='radio' id='rad_01' value='rad_01' /><label for='rad_01'>To show that he is good at his job</label></p><p><input type='radio' name='radio' id='rad_02' value='rad_02' /><label for='rad_02'>To show that he is listening carefully</label></p><p><input type='radio' name='radio' id='rad_03' value='rad_03' /><label for='rad_03'>To make sure that Ella feels consulted about what is going to happen</label></p><br/><div id='feedback'></div></div>");
$('#feedback').hide();
//-----------------------------------------------------------------------
$('#rad_01').click(function(){
	$('#feedback').replaceWith("<div id='feedback'>That's not correct - Try again</div>");
	
});
$('#rad_02').click(function(){
	$('#feedback').replaceWith("<div id='feedback'>That's not correct - Try again<br/></div>");
	$('#feedback').show();
});
$('#rad_03').click(function(){
	$('#feedback').replaceWith("<div id='feedback'>That's correct!</div>");
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page4a.html" title="previous page" class="back-btn">back</a></li><li><a href="page6.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	$('#feedback').show();
});
//-----------------------------------------------------------------------
$('#submit_btn').click(function(){ 

if(document.getElementById('rad_01').checked){ 

$('#feedback').hide();
document.getElementById('rad_01').disabled = "true";
document.getElementById('rad_02').disabled = "true";
document.getElementById('rad_03').disabled = "true";

}else if(document.getElementById('rad_02').checked){ 

$('#feedback').hide();
document.getElementById('rad_01').disabled = "true";
document.getElementById('rad_02').disabled = "true";
document.getElementById('rad_03').disabled = "true";
$('#submit_btn').replaceWith("<div id='feedback'>That's not correct - It is important to make sure that Ella feels that she has been consulted about what is about to happen.</div>");
}else if(document.getElementById('rad_03').checked){ 

$('#feedback').hide();
document.getElementById('rad_01').disabled = "true";
document.getElementById('rad_02').disabled = "true";
document.getElementById('rad_03').disabled = "true";
$('#submit_btn').replaceWith("<div id='feedback'>That's correct! </div>");
}else{
	$('#submit_btn').append("<div id='feedback'>Make a selection from the choices above</div>");
}
});
}
$('#pg5-btn1').click(function(){ 
	showQuestion();
});
//-----------------------------------------------------------------------
$('#pg5-btn2').click(function(){ 
$('#pg5-btn1').replaceWith('<div id="pg5-btn1"><a href="#" class="pg5btn1"><span class="btn-text">Assessment unit? It’s the first on the left; straight down the corridor. If you don’t mind a bit of company. I’ll show you the way?</span></a></div>');
$('#pg5-btn1').click(function(){ 
	showQuestion();
});
$('#pg5-col4').replaceWith('');
$('#pg5-col1').css('background-image','url(../images/pg5_back_answer2.png)');
$('#feedback-text').replaceWith('<p id="feedback-text">Although well intentioned, the over familiarity of this response has had an unintended consequence; Ella feels patronised. <strong>See if you can find a stronger response.</strong></span>');
$('#pg5-btn2').replaceWith('<div id="pg5-btn2"><a href="#"  class="disabled"><span class="btn-text">Okay sweetheart, walk this way. </span></a></div>');
});
//-----------------------------------------------------------------------
$('#pg5-btn3').click(function(){
	$('#pg5-btn1').replaceWith('<div id="pg5-btn1"><a href="#" class="pg5btn1"><span class="btn-text">Assessment unit? It’s the first on the left; straight down the corridor. If you don’t mind a bit of company. I’ll show you the way?</span></a></div>');
	$('#pg5-btn1').click(function(){ 
	showQuestion();
	});
	
	
	//$('#pg5-btn1').replaceWith('<div id="pg5-btn1"><a href="#"><span class="btn-text">Assessment unit? It’s the first on the left; straight down the corridor. If you don’t mind a bit of company. I’ll show you the way?</span></a></div>');

	$('#pg5-col4').replaceWith(''); 
$('#pg5-col1').css('background-image','url(../images/pg5_back_answer3.png)');
$('#feedback-text').replaceWith('<p id="feedback-text">Ella is reassured by this response, but you have not involved her in the decision making process and you have not checked that you have understood what she is asking you. <strong>See if you can find a stronger response.</strong></span>');
$('#pg5-btn3').replaceWith('<div id="pg5-btn3"><a href="#" class="disabled"><span class="btn-text">Yes, I can help you. It is first on the left; straight down the corridor. Follow me.</span></a></div>');
});

});