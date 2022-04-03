// JavaScript Document

$(function () {
	var score = 0;
	init();
	
function init() {
	// Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
  
  
   $(function() {
	   $("#makeMeDraggable7").click(function(){
  alert('Try again');
});
		$("#makeMeDraggable4").click(function(){
  alert('Try again');
});
		$("#makeMeDraggable5").click(function(){
  alert('Try again');
});
		$("#makeMeDraggable2").click(function(){
  alert('Try again');
});
	   $("#makeMeDraggable").click(function(){
  		this.style.background = '#00acff';
		score+=1;
		this.click(function(){return false;});
		checkScore();
});
	   $("#makeMeDraggable9").click(function(){
  		this.style.background = '#00acff';
		score+=1;
		this.click(function(){return false;});
		checkScore();
});
		  $("#makeMeDraggable8").click(function(){
  		this.style.background = '#00acff';
		score+=1;
		this.click(function(){return false;});
		checkScore();
});
        $("#makeMeDraggable3").click(function(){
 		this.style.background = '#00acff';
		score+=1;
		this.click(function(){return false;});
		checkScore();
});
		$("#makeMeDraggable6").click(function(){
  		this.style.background = '#00acff';
		score+=1;
		this.click(function(){return false;});
		checkScore();
});
	
		
      });
}

function checkScore() {
	
   if(score == 5){
$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page6.html" title="previous page" class="back-btn">back</a></li><li><a href="page9.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
	   $('#feedback-message').css('display','block');
   }

}
/*$('#makeMeDraggable').click(function(){alert('bingou!')});*/

});
            
