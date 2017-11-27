
$(document).ready(function(){
    var h = $(window).height();

    $("#imgStart1").eq(0).addClass('fade-in-up');
    $("#imgStart2").eq(0).addClass('fade-in-right');
    $("#imgStart3").eq(0).addClass('fade-in-right');
    $("#imgStart4").eq(0).addClass('fade-in-up');

    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#img1").offset().top) {
            $("#img1").eq(0).addClass('fade-in-up');
            $("#logo-color").eq(0).addClass('logo-hidden-js');
        } else {
            $("#logo-color").eq(0).removeClass('logo-hidden-js');
        }
        if ( ($(this).scrollTop()+h) >= $("#img2").offset().top) {
            $("#img2").eq(0).addClass('fade-in-down2');
        }
        if ( ($(this).scrollTop()+h) >= $("#text1").offset().top) {
            $("#text1").eq(0).addClass('fade-in-down');
        }
        if ( ($(this).scrollTop()+h) >= $("#text2").offset().top) {
            $("#text2").eq(0).addClass('fade-in-down');
        }
        if ( ($(this).scrollTop()+h) >= $("#text3").offset().top) {
            $("#text3").eq(0).addClass('fade-in-up');
        }
        if ( ($(this).scrollTop()+h) >= $("#text4").offset().top) {
            $("#text4").eq(0).addClass('fade-in-down2');
        }


    });
});
