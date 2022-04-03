// JavaScript Document

$(function () {
	var clicked1 = 0;
	var clicked2 = 0;
	var clicked3 = 0;
	$('#feedback-text-blue').hide();
	
	function check(q){
		
		if(q == 1){
			clicked1 = 1;
if(clicked3 == 1){
	$('#pg12-btn3').replaceWith('<div id="pg12-btn3"><a href="#" class="pg12btn3"><span class="btn-text">It’s very busy today and we have staff off sick.</span></a></div>');
	//check(3);
	$('#pg12-btn3').click(function(){ 
check(3);

});
}
if(clicked2 == 1){
	$('#pg12-btn2').replaceWith('<div id="pg12-btn2"><a href="#"  class="pg12btn2"><span class="btn-text">There are four in the queue before you...</span></a></div>');
	$('#pg12-btn2').click(function(){ 
check(2);

});
}
$('#feedback-text-blue').show();
$('#feedback-text-blue').replaceWith('<p id="feedback-text-blue">This is a good response. Most people wait patiently for their appointments.<br/><br/> It is always a good idea to inform patients of delays; they are much more likely to be patient if they understand the reason behind a delay.</p>');
$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page11.html" title="previous page" class="back-btn">back</a></li><li><a href="page14.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
//change the class on them to show inactive
$('#pg12-btn1').replaceWith('<div id="pg12-btn1"><a href="#"  class="highlight"><span class="btn-text">At the moment, people are waiting about 30 minutes.</span></a></div>');
//
//
		}else if(q==2){
			clicked2 = 1;
if(clicked1 == 1){
	$('#pg12-btn1').replaceWith('<div id="pg12-btn1"><a href="#" class="pg12btn1"><span class="btn-text">At the moment, people are waiting about 30 minutes.</span></a></div>');
	$('#pg12-btn1').click(function(){ 
check(1);

});
}
if(clicked3 == 1){
	$('#pg12-btn3').replaceWith('<div id="pg12-btn3"><a href="#" class="pg12btn3"><span class="btn-text">It’s very busy today and we have staff off sick.</span></a></div>');
	$('#pg12-btn3').click(function(){ 
check(3);

});
}
$('#feedback-text-blue').show();
$('#feedback-text-blue').replaceWith('<p id="feedback-text-blue">This is a good response. Most people wait patiently for their appointments.<br/><br/> It is always a good idea to inform patients of delays; they are much more likely to be patient if they understand the reason behind a delay.</p>');
$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page11.html" title="previous page" class="back-btn">back</a></li><li><a href="page14.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
//change the class on them to show inactive
//
$('#pg12-btn2').replaceWith('<div id="pg12-btn2"><a href="#"  class="highlight"><span class="btn-text">There are four in the queue before you... </span></a></div>');
//
		}else if(q==3){
			clicked3 = 1;
if(clicked1 == 1){
	$('#pg12-btn1').replaceWith('<div id="pg12-btn1"><a href="#" class="pg12btn1"><span class="btn-text">At the moment, people are waiting about 30 minutes.</span></a></div>');
	$('#pg12-btn1').click(function(){ 
check(1);

});
}
if(clicked2 == 1){
	$('#pg12-btn2').replaceWith('<div id="pg12-btn2"><a href="#"  class="pg12btn2"><span class="btn-text">There are four in the queue before you...</span></a></div>');
	$('#pg12-btn2').click(function(){ 
check(2);

});
}
$('#feedback-text-blue').show();
$('#feedback-text-blue').replaceWith('<p id="feedback-text-blue">This is not a good response.<br/><br/>Avoid making excuses, instead make suggestions of what the patient can do – tea, television, magazines.</p>');
$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page11.html" title="previous page" class="back-btn">back</a></li><li><a href="page14.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
//change the class on them to show inactive
//
//
$('#pg12-btn3').replaceWith("<div id='pg12-btn3'><a href='#' class='highlight'><span class='btn-text'>It’s very busy today and we have staff off sick.</span></a></div>");
		}
	}
$('#pg12-btn1').click(function(){ 
check(1);

});
//----------------------------------------------------------------------
//-----------------------------------------------------------------------
$('#pg12-btn2').click(function(){ 
check(2);
});
//-----------------------------------------------------------------------
$('#pg12-btn3').click(function(){ 
check(3);
});

});
