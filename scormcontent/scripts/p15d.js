// JavaScript Document

$(function () {
	var count = 0;
	$('#c01').click(function(){
		
		$('.c1').fadeIn("fast");
		count++;
		check(count);
	
	})
	$('#c02').click(function(){
		
		$('.c2').fadeIn("fast");
		count++;
		check(count);
	
	})
	$('#c03').click(function(){
		
		$('.c3').fadeIn("fast");
	count++;
		check(count);
	})
	$('#c04').click(function(){
		
		$('.c4').fadeIn("fast");
	count++;
		check(count);
	})
	$('#c05').click(function(){
		
		$('.c5').fadeIn("fast");
	count++;
		check(count);
	})
	$('#c06').click(function(){
		
		$('.c6').fadeIn("fast");
	count++;
		check(count);
	})
	$('#c07').click(function(){
		
		$('.c7').fadeIn("fast");
	count++;
		check(count);
	})
	$('#c08').click(function(){
		
		$('.c8').fadeIn("fast");
	count++;
		check(count);
	})
	$('#c09').click(function(){
		
		$('.c9').fadeIn("fast");
	count++;
		check(count);
	})
	
	function check(s){
		if(s == 9){
			$('#page-content').append('<div id="feedback-new">Well done!</div>');
		$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page15c.html" title="previous page" class="back-btn">back</a></li><li><a href="page16.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');	
		}
	}
	$('#wrong01').click(function(){
		
		$('.fade_div1').fadeIn("fast").delay(1000).fadeOut("slow");
	
	})
	$('#wrong02').click(function(){
		
		$('.fade_div2').fadeIn("fast").delay(1000).fadeOut("slow");
	
	})
	$('#wrong03').click(function(){
		
		$('.fade_div3').fadeIn("fast").delay(1000).fadeOut("slow");

	})
	$('#wrong04').click(function(){
		
		$('.fade_div4').fadeIn("fast").delay(1000).fadeOut("slow");
	
	})
	$('#wrong05').click(function(){
		
		$('.fade_div5').fadeIn("fast").delay(1000).fadeOut("slow");
	
	})
});
            
