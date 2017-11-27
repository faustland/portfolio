
$(document).ready(function(){
    var h = $(window).height();

    $("#hello").addClass('fadeLeft');
    $("#hello2").addClass('fadeRight');
    $("#mainAuto").addClass('fadeUp');

    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#main").offset().top) {
            $("#main").eq(0).addClass('fadeUp');
        };

        if ( ($(this).scrollTop()+h) >= $("#main2").offset().top) {
            $("#main2").eq(0).addClass('fadeLeft');
        };

        if ( ($(this).scrollTop()+h) >= $("#main3").offset().top) {
            $("#main3").eq(0).addClass('fadeRight');
        };

        if ( ($(this).scrollTop()+h) >= $("#main4").offset().top) {
            $("#menucolor").eq(0).addClass('menu-color-js');
            $("#burgercolor").eq(0).addClass('burger-color-js');
            $("#logocolor").eq(0).addClass('logo-color-js');
        };

        if ( ($(this).scrollTop()+h) < $("#main4").offset().top) {
            $("#menucolor").eq(0).removeClass('menu-color-js');
            $("#burgercolor").eq(0).removeClass('burger-color-js');
            $("#logocolor").eq(0).removeClass('logo-color-js');
        };

    });

});
