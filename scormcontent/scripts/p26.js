// JavaScript Document

$(function () {
$('#pg26-btn2').click(function(){ 
 $('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page25.html" title="previous page" class="back-btn">back</a></li><li><a href="page27.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
$('#feedback-t').hide();
//change the class on them to show inactive
$('#pg26-btn2').replaceWith('<div id="pg26-btn1"><a href="#"  class="highlight"><span class="btn-text">That sounds really difficult. Tell me more...</span></a></div>');
$('#pg26-btn1').replaceWith('<div id="pg26-btn2"><a href="#"  class="disabled"><span class="btn-text">Poor you! How awful.</span></a></div>');
$('#pg26-btn3').replaceWith('<div id="pg26-btn3"><a href="#" class="disabled"><span class="btn-text">I know how you must feel; it must be terrible.</span></a></div>');
$('#feedback-t').replaceWith("<p id='feedback-t'>Well done! You have choosen the empathetic response. Being compassionate towards patient's can mean using empathy and sympathy. Sympathy is expressing concern for a patient's feelings. Empathy is trying to put yourself in your patient's shoes.<br/><br/></span>");
//-----------------------------------------------------------------------
$('#pg5-col1').css('background-image','url(../images/pg5_back_q_pan.png)');
$('#pg5-col1').css('background-position','left top');
$('#pg5-col1').append("<div id='pg5-col4' class='question-icon-blue'><p>Why is it important for the porter to ask Ella if she wants to be shown the way?</p><br/><p><input type='radio' name='radio' id='rad_01' value='rad_01' /><label for='rad_01'>To show that he is good at his job</label></p><p><input type='radio' name='radio' id='rad_02' value='rad_02' /><label for='rad_02'>To show that he is listening carefully</label></p><p><input type='radio' name='radio' id='rad_03' value='rad_03' /><label for='rad_03'>To make sure that Ella feels consulted about what is going to happen</label></p><br/><p id='submit_btn'><a href='#' >submit</a></p></div>");
//-----------------------------------------------------------------------
$('#submit_btn').click(function(){ 
if(document.getElementById('rad_01').checked){ 
$('#feedback').hide();
document.getElementById('rad_01').disabled = "true";
document.getElementById('rad_02').disabled = "true";
document.getElementById('rad_03').disabled = "true";
$('#submit_btn').replaceWith("<div id='feedback'>That's not correct - It is important to make sure that Ella feels that she has been consulted about what is about to happen. </div>");
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
});
//-----------------------------------------------------------------------
$('#pg26-btn1').click(function(){ 

$('#pg5-col1').css('background-image','url(../images/pg5_back_answer2.png)');
$('#feedback-t').replaceWith('<p id="feedback-t">This is the pity response.<br/><br/><strong>See if you can find the empathetic response.</strong></span>');
$('#pg26-btn1').replaceWith('<div id="pg26-btn2"><a href="#"  class="disabled"><span class="btn-text">Poor you! How awful.</span></a></div>');
});
//-----------------------------------------------------------------------
$('#pg26-btn3').click(function(){ 
$('#pg5-col1').css('background-image','url(../images/pg5_back_answer3.png)');
$('#feedback-t').replaceWith('<p id="feedback-t">This is the sympathetic response.<br/><br/><strong>See if you can find the empathetic response.</strong></span>');
$('#pg26-btn3').replaceWith('<div id="pg26-btn3"><a href="#" class="disabled"><span class="btn-text">I know how you must feel; it must be terrible.</span></a></div>');
});

});
