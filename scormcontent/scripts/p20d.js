// JavaScript Document

$(function () {
	var count = 0;
	$('#y01').click(function(){
		
		$('.y1').fadeIn("fast");
		count++;
		check(count);
	
	})
	$('#y02').click(function(){
		
		$('.y2').fadeIn("fast");
		count++;
		check(count);
	
	})
	$('#y03').click(function(){
		
		$('.y3').fadeIn("fast");
	count++;
		check(count);
	})
	$('#y04').click(function(){
		
		$('.y4').fadeIn("fast");
	count++;
		check(count);
	})

	
	function check(s){
		if(s == 4){
			$('#page-content').append('<div id="feedback-new">Well done!</div>');
		$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page20c.html" title="previous page" class="back-btn">back</a></li><li><a href="page21.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');	
		}
	}
	$('#w01').click(function(){
		
		$('.w01').fadeIn("fast").delay(1000).fadeOut("slow");
	
	})
	$('#w02').click(function(){
		
		$('.w02').fadeIn("fast").delay(1000).fadeOut("slow");
	
	})
	$('#w03').click(function(){
		
		$('.w03').fadeIn("fast").delay(1000).fadeOut("slow");

	})
	
});
            
