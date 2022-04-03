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
  $("#mmD").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });
$("#mmD3").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD3',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });
		$("#mmD9").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD9',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });
  	$("#mmD8").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD8',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });
    
        	$("#mmD6").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD8',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });
      
      	$("#mmD2").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD2',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });
  	$("#mmD3").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD3',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });

$("#mmD4").draggable({
			containment: $('#page-content'),
  			cursor:'move',
  			stack: '#mmD4',
			revert: 'invalid',
            start: function() {
                $('.frameOverlay').fadeIn('fast');
				
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
				
            }
        });

$('#mmD5').draggable({
  containment: $('#page-content'),
  cursor:'move',
    revert: true,
	stack: '#mmD5'
});

$('#makeMeDroppable1').droppable( {
	accept: '#mmD',
    drop: handleDropEvent
	
  } );
  $('#makeMeDroppable2').droppable( {
	accept: '#mmD2',
    drop: handleDropEvent
  } );
  $('#makeMeDroppable3').droppable( {
	accept: '#mmD3',
    drop: handleDropEvent
  } );
  $('#makeMeDroppable4').droppable( {
	accept: '#mmD4',
    drop: handleDropEvent
  } );
  $('#makeMeDroppable5').droppable( {
	accept: '#mmD5',
    drop: handleDropEvent
  } );
}

function handleDropEvent( event, ui ) {

	score++;
	
   if(score == 5){
	   $('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page24c.html" title="previous page" class="back-btn">back</a></li><li><a href="page25B.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
$('#replace').replaceWith("<td rowspan = '5'></td>");
	   $('#feedback-message').css('z-index','32000');
	   $('#feedback-message').css('position','absolute');
	   $('#feedback-message').css('top','430px');
	  $('#feedback-message').css('left','80px');
	     $('#feedback-message').css('width','600px');
	   $('#feedback-message').css('display','block');
   }

  var draggable = ui.draggable;
ui.draggable.position( { of: $(this), my: 'left center', at: 'left center' } );
    ui.draggable.draggable( 'option', 'revert', false );
	ui.draggable.draggable( 'option', 'disabled', true);
 $(ui.draggable).css('background','#00acff');
   //$(this).droppable( 'disable' );

}
$('#reset_btn').click(function(){
	score =0;
	$('#mmD').draggable( 'option', 'disabled', false);
	$('#mmD3').draggable( 'option', 'disabled', false);
	$('#mmD9').draggable( 'option', 'disabled', false);
	$('#mmD8').draggable( 'option', 'disabled', false);
	$('#mmD6').draggable( 'option', 'disabled', false);
	$('#mmD').css({'left': $('#mmD').data('originalLeft'),'top': $('#mmD').data('originalTop'),'background' : '#636363'});
	$('#mmD3').css({'left': $('#mmD3').data('originalLeft'),'top': $('#mmD3').data('originalTop'),'background' : '#636363'});
	$('#mmD9').css({'left': $('#mmD9').data('originalLeft'),'top': $('#mmD9').data('originalTop'),'background' : '#636363'});
	$('#mmD8').css({'left': $('#mmD8').data('originalLeft'),'top': $('#mmD8').data('originalTop'),'background' : '#636363'});
	$('#mmD6').css({'left': $('#mmD6').data('originalLeft'),'top': $('#mmD6').data('originalTop'),'background' : '#636363'});
	$('#feedback-message').css('display','none');
	
	});
});
            
