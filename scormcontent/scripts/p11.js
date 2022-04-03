// JavaScript Document
$(function () {
var score = 0;
$('#cell_01').click(function(){ 

$('#cell_01').replaceWith('<a href="#" class="disable">this</a>');
$('#feed01').css('display', 'block');

$('#pg11-col1').css('background-image', 'url(../images/rude.png)');


});

$('#cell_02').click(function(){ 
$('#cell_02').replaceWith('<a href="#" class="disable">this</a>');
$('#feed02').css('display', 'block');
/*$('#tip').replaceWith('<div id="tip"><span class="new-tip"><strong>Tip:</strong><p>Think about the atmosphere you create.</p></span></div>');*/
$('#pg11-col1').css('background-image', 'url(../images/friendly.png)');
score++;
check(score);
});

$('#cell_03').click(function(){ 
$('#cell_03').replaceWith('<a href="#" class="disable">this</a>');
$('#feed03').css('display', 'block');


$('#pg11-col1').css('background-image', 'url(../images/rude.png)');
});

$('#cell_04').click(function(){ 
$('#cell_04').replaceWith('<a href="#" class="disable">this</a>');
$('#feed04').css('display', 'block');

$('#pg11-col1').css('background-image', 'url(../images/friendly.png)');
score++;
check(score);
});

$('#cell_05').click(function(){ 
$('#cell_05').replaceWith('<a href="#" class="disable">this</a>');
$('#feed05').css('display', 'block');

$('#pg11-col1').css('background-image', 'url(../images/rude.png)');
});

$('#cell_06').click(function(){ 
$('#cell_06').replaceWith('<a href="#" class="disable">this</a>');
$('#feed06').css('display', 'block');
//$('#tip').replaceWith('<div id="tip"><span class="new-tip"><strong>Tip:</strong><p>Use their name to create rapport.</p></span></div>');
$('#pg11-col1').css('background-image', 'url(../images/rude.png)');
});

$('#cell_07').click(function(){ 
$('#cell_07').replaceWith('<a href="#" class="disable">this</a>');
$('#feed07').css('display', 'block');

$('#pg11-col1').css('background-image', 'url(../images/friendly.png)');
score++;
check(score);

});

$('#cell_08').click(function(){ 
$('#cell_08').replaceWith('<a href="#" class="disable">this</a>');
$('#feed08').css('display', 'block');
$('#pg11-col1').css('background-image', 'url(../images/friendly.png)');
score++;
check(score);
});

$('#cell_09').click(function(){ 
$('#cell_09').replaceWith('<a href="#" class="disable">this</a>');
$('#feed09').css('display', 'block');

$('#pg11-col1').css('background-image', 'url(../images/rude.png)');
});

function check(score){
if(score ==4){
	$('#feed01').replaceWith('');
	$('#feed03').replaceWith('');
	$('#feed05').replaceWith('');
	$('#feed06').replaceWith('');
	$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page10b.html" title="previous page" class="back-btn">back</a></li><li><a href="page12.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
$('#pg11-col1').css('background-image', 'none');
	$('#feedback-text-pg11').fadeIn();
	$('#cell_01').replaceWith('<a href="#" class="disable">this</a>');
	$('#cell_02').replaceWith('<a href="#" class="disable">this</a>');$('#cell_04').replaceWith('<a href="#" class="disable">this</a>');
	$('#cell_03').replaceWith('<a href="#" class="disable">this</a>');
	$('#cell_05').replaceWith('<a href="#" class="disable">this</a>');
	$('#cell_06').replaceWith('<a href="#" class="disable">this</a>');$('#cell_07').replaceWith('<a href="#" class="disable">this</a>');
	$('#cell_09').replaceWith('<a href="#" class="disable">this</a>');
}
}
});