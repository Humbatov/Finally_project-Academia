//read more button
$('.moreButton').click(function(event) {
	$(this).css('display','none');
	$(this).siblings('.paperText').css('height', '200px');
    var fullHeight = $(this).siblings('.paperText').height();
	$(this).siblings('.paperText').animate({height: fullHeight}, 500);

});

//active class
$(document).ready(function () {
    $('.ulBtn li a').click(function () {
          $('.ulBtn li').removeClass('active');
        $(this).parent().addClass('active');
           return true;
    });
 });
//menu
$(document).ready(function(){
	var touch = $('#touch-menu');
    var menu = $('.navig');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.css('display','none');
            
        }
        
    });
});
//fixed jobBoard
$(document).ready(function(){

        $(window).scroll(function(){
    	var Top = $(this).scrollTop();
		if ( Top >= 100 ) {
			$("#jobBoard").addClass('fixed')
		};

        if ( Top < 100 ) {
        	$("#jobBoard").removeClass('fixed')
        };

    })
})