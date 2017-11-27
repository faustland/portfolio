
$(document).ready(function(){
    var h = $(window).height();

    $("#imgStart1").eq(0).addClass('fade-in-up');
    $("#img2").eq(0).addClass('fade-in-right');
    $("#img3").eq(0).addClass('fade-in-left');


    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#img1").offset().top) {
            $("#logo-color").eq(0).addClass('logo-hidden-js');
        } else {
            $("#logo-color").eq(0).removeClass('logo-hidden-js');
        }
        if ( ($(this).scrollTop()+h) >= $("#img4").offset().top) {
            $("#img4").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img5").offset().top) {
            $("#img5").eq(0).addClass('fade-in-left');
        }
        if ( ($(this).scrollTop()+h) >= $("#img6").offset().top) {
            $("#img6").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img7").offset().top) {
            $("#img7").eq(0).addClass('fade-in-left');
        }
        if ( ($(this).scrollTop()+h) >= $("#img8").offset().top) {
            $("#img8").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img9").offset().top) {
            $("#img9").eq(0).addClass('fade-in-left');
        }
        if ( ($(this).scrollTop()+h) >= $("#skills").offset().top) {
            $("#skills").eq(0).addClass('bounce-in2');
        }
        if ( ($(this).scrollTop()+h) >= $("#langs").offset().top) {
            $("#lang1").eq(0).addClass('strachRight');
            $("#lang2").eq(0).addClass('strachRightEsp');
        }
        if ( ($(this).scrollTop()+h) >= $("#num").offset().top) {
            $("#num").eq(0).addClass('bounce-in2');
        }

    });
});
