
$(document).ready(function(){
    var h = $(window).height();

    $("#imgStart1").eq(0).addClass('fade-in-right');
    $("#imgStart2").eq(0).addClass('fade-in-left');

    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#img1").offset().top) {
            $("#logo-color").eq(0).addClass('logo-hidden-js');
        } else {
            $("#logo-color").eq(0).removeClass('logo-hidden-js');
        }
        if ( ($(this).scrollTop()+h) >= $("#img2").offset().top) {
            $("#img2").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img3").offset().top) {
            $("#img3").eq(0).addClass('fade-in-left');
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
        if ( ($(this).scrollTop()+h) >= $("#img10").offset().top) {
            $("#img10").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img11").offset().top) {
            $("#img11").eq(0).addClass('fade-in-left');
        }
        if ( ($(this).scrollTop()+h) >= $("#img12").offset().top) {
            $("#img12").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img13").offset().top) {
            $("#img13").eq(0).addClass('fade-in-left');
        }
        if ( ($(this).scrollTop()+h) >= $("#img14").offset().top) {
            $("#img14").eq(0).addClass('fade-in-right');
        }
        if ( ($(this).scrollTop()+h) >= $("#img15").offset().top) {
            $("#img15").eq(0).addClass('fade-in-left');
        }

    });
});
