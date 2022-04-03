// JavaScript Document
$(function () {
	$("#sortable").sortable({
    start: function(event, ui) {
        
    },
    stop: function(event, ui) {
        is_dragging = false;
		$('#feedback-m').fadeIn('slow');
		$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page25.html" title="previous page" class="back-btn">back</a></li><li><a href="page26.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
    }
});
    $("#sortable").disableSelection();
	
	$("#sortable").on('mousemove',function(e){
    if(is_dragging) console.log('X:' + e.screenX + ' Y: '+e.screenY );
	
});
//$("#submit_btn").click(function(){this.hide();$('#feedback-m').fadeIn('slow');});
	


});
            
