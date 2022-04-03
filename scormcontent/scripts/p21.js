// JavaScript Document

$(function () {
	
	function hideQuestion(){
		$('#pg5-col4').replaceWith('');
		//change the class on them to show inactive

}
	var clicked1 = 0;
	var clicked2 = 0;
	var clicked3 = 0;
	$('#feedback-text-21').hide();
	
	function showQuestion(){
		$('#feedback-text-21').hide();
clicked3 = 1;
if(clicked2 == 1){
	$('#pg21-btn2').replaceWith('<div id="pg21-btn2"><a href="#"  class="disabled"><span class="btn-text">I appreciate that it is confusing. Do you understand?</span></a></div>');
}
if(clicked1 == 1){
	$('#pg21-btn1').replaceWith('<div id="pg21-btn1"><a href="#" class="disabled"><span class="btn-text">I am not sure you really understand what I am saying, so can you explain it back  to me?</span></a></div>');
}
$('#pg21-btn3').replaceWith('<div id="pg21-btn3"><a href="#"  class="highlight"><span class="btn-text">I want to make sure I’ve explained things clearly. How are you going to take the pills?</span></a></div>');
$('#pg21-btn3').css('background-position','-100px');

//change the class on them to show inactive
//-----------------------------------------------------------------------
$('#pg21-col1').css('background-image','url(../images/pg21.png)');
$('#pg21-col1').css('background-position','left top');
$('#pg21-col1').append("<div id='pg5-col4'><p>CORRECT!<br/><br/>What else can you do to make communication clear?<p><input type='checkbox' name='radio' id='rad_01' value='rad_01' /><label for='rad_01'>Use jargon</label></p><p><input type='checkbox' name='radio' id='rad_02' value='rad_02' /><label for='rad_02'>Use simple language</label></p><p><input type='checkbox' name='radio' id='rad_03' value='rad_03' /><label for='rad_03'>Use short sentences</label></p><p><input type='checkbox' name='radio' id='rad_04' value='rad_03' /><label for='rad_03'>Speak fast</label></p><p><input type='checkbox' name='radio' id='rad_05' value='rad_05' /><label for='rad_03'>Leave pauses to allow the patient to gather their thoughts</label></p><p id='submit_btn'><a href='#' >submit</a></p></div>");
//-----------------------------------------------------------------------
$('#submit_btn').click(function(){ 

document.getElementById('rad_01').disabled = "true";
document.getElementById('rad_02').disabled = "true";
document.getElementById('rad_03').disabled = "true";
document.getElementById('rad_04').disabled = "true";
document.getElementById('rad_05').disabled = "true";

if($("#rad_03").is(":checked") && $("#rad_05").is(":checked") && $("#rad_02").is(":checked") && !$("#rad_01").is(":checked") && !$("#rad_04").is(":checked")){
$(submit_btn).replaceWith('<div id="feedback">That is correct</div>');
$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page20.html" title="previous page" class="back-btn">back</a></li><li><a href="page23.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
}else{
	$(submit_btn).replaceWith('<P>THAT IS NOT CORRECT! - </p><p id="try_btn"><a href="#" >try again</a></p>');
	$('#try_btn').click(function(){
		hideQuestion();
		showQuestion();
		
		});
}
});

	}
$('#pg21-btn3').click(function(){ 
showQuestion();

});
//-----------------------------------------------------------------------
$('#pg21-btn2').click(function(){ 
hideQuestion();
$('#pg21-btn3').replaceWith('<div id="pg21-btn3"><a href="#" class="pg5btn3"><span class="btn-text">I want to make sure I’ve explained things clearly. How are you going to take the pills?</span></a></div>');
$('#pg21-btn3').click(function(){ 
	showQuestion();
});
clicked2 = 1;
if(clicked1 == 1){
		$('#pg21-btn1').replaceWith('<div id="pg21-btn1"><a href="#" class="disabled"><span class="btn-text">I am not sure you really understand what I am saying, so can you explain it back  to me?</span></a></div>');
}
$('#pg21-col1').css('background-image','url(../images/embarrass.png)');
$('#feedback-text-21').replaceWith('<p id="feedback-text-21">When patients are asked the yes-or-no question “Do you understand?” they may be embarrassed to admit that they do not. Ask patients to put the information in their own words to make sure that they understand.<strong>See if you can find a stronger response.</strong></span>');
$('#pg21-btn2').replaceWith('<div id="pg21-btn2"><a href="#"  class="disabled"><span class="btn-text">I appreciate that it is confusing. Do you understand?</span></a></div>');
});
//-----------------------------------------------------------------------
$('#pg21-btn1').click(function(){ 
hideQuestion();
$('#pg21-btn3').replaceWith('<div id="pg21-btn3"><a href="#" class="pg5btn3"><span class="btn-text">I want to make sure I’ve explained things clearly. How are you going to take the pills?</span></a></div>');
$('#pg21-btn3').click(function(){ 
	showQuestion();
});
clicked1 = 1;
if(clicked2 == 1){
	$('#pg21-btn2').replaceWith('<div id="pg21-btn2"><a href="#"  class="disabled"><span class="btn-text">I apprieciate that it is confusing. Do you understand?</span></a></div>');
}
$('#pg21-col1').css('background-image','url(../images/embarrass.png)');
$('#feedback-text-21').replaceWith('<p id="feedback-text-21">It is important that when checking patients understanding of instructions, clinicians do so in a manner that does not embarrass patients. This response implies that Ella is at fault for not understanding the information. <strong>See if you can find a stronger response.</strong></span>');
$('#pg21-btn1').replaceWith('<div id="pg21-btn1"><a href="#" class="disabled"><span class="btn-text">I am not sure you really understand what I am saying, so can you explain it back to me?</span></a></div>');
});

});
