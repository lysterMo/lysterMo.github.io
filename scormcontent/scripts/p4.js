// JavaScript Document

$(function () {
var $foo = $('.foo');

      var done = false;
      function onPlayerStateChange(event) {
        //$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up
$foo.t = setTimeout((function() {
                    $("#ella").animate({'marginTop' : "-=40px"},10000); //moves up
                }), 1000);
      }
jwplayer().onPlay(function(){
//$("#ella").animate({'marginTop' : "-=40px"},10000); //moves up
$foo.t = setTimeout((function() {
                    $("#ella").animate({'marginTop' : "-=40px"},10000); //moves up
                }), 1000);
});

jwplayer().onComplete(function() {
	
clearTimeout($foo.t);

                $('#pg4-col2').css('background-image','url(../images/pg4_new.png)');		
				$('#pg4-col2').css('background-repeat','no-repeat');
				$('#playergqzisgwL').hide();
				$('#nav-backnext').replaceWith('<div id="nav-backnext"><ul><li><a href="page3.html" title="previous page" class="back-btn">back</a></li><li><a href="page4a.html" title="next page"class="next-btn-highlight">next</a></li></ul></div>');
				
				});
				
});
            
