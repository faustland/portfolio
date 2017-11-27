
$(document).ready(function(){
    var h = $(window).height();

    $("#imgStart1").eq(0).addClass('fadeLeft');
    $("#imgStart2").eq(0).addClass('fadeRight');
    $("#imgStart3").eq(0).addClass('fadeLeft');
    $("#imgStart4").eq(0).addClass('fadeRight');


    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#img1").offset().top) {
            $("#img1").eq(0).addClass('slide-in-right');
        };

    });
});
