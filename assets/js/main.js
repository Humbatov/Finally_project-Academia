//read more button
$('.moreButton').click(function(event) {
    $(this).css('display', 'none');
    $(this).siblings('.paperText').css('height', '100%');

});

//active class
$(document).ready(function() {
    $('.ulBtn li a').click(function() {
        $('.ulBtn li').removeClass('active');
        $(this).parent().addClass('active');
        return true;
    });
});
//menu
$(document).ready(function() {
    var touch = $('#touch-menu');
    var menu = $('.navig');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 760 && menu.is(':hidden')) {
            menu.css('display', 'none');

        }

    });
});
//fixed jobBoard
$(document).ready(function() {

    $(window).scroll(function() {
        var Top = $(this).scrollTop();
        if (Top >= 200) {
            $(".jobBoard").addClass('fixed')
        };

        if (Top < 200) {
            $(".jobBoard").removeClass('fixed')
        };

    })
})

//collapse profil menu
$(document).ready(function() {
    $('a').on('click', function(e) {
        e.preventDefault();
    });
    $('.profileImg ').hover(function() {
        clearTimeout($.data(this, 'timer'));

        $('ul', this).stop(true, true).slideDown(200);
    }, function() {
        $.data(this, 'timer', setTimeout($.proxy(function() {

            $('ul', this).stop(true, true).slideUp(200);
        }, this), 400));
    });

});

// Collapse menu

$(document).ready(function() {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));

    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));

    $('#slide-nav.navbar-custom').after($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '70%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function(e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#page-content, #slidemenu, body, .navbar, .navbar-header';



    $(window).on("resize", function() {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            console.log($(window).width());
            $(selected).removeClass('slide-active');

        }
    });




});
