// JavaScript Document

$(function () {
	$('#tit1').fadeIn(1000);
	$('#tit2').delay(2500).fadeIn( 1000 );
	$('#tit3').delay(8000).fadeIn( 1000 );
	$('#tit4').delay(11000).fadeIn( 1000, function(){
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page1.html" title="previous page" class="back-btn">back</a></li><li><a href="page3.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>')
	} );
	
});