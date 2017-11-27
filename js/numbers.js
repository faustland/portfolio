
$(document).ready(function(){
    var h = $(window).height();


    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#num").offset().top) {


            var currentNumber = $('.number').text();
            var currentNumber1 = $('.number1').text();
            var currentNumber2 = $('.number2').text();
            var currentNumber3 = $('.number3').text();
            var currentNumber4 = $('.number4').text();
            var currentNumber5 = $('.number5').text();
            var currentNumber6 = $('.number6').text();
            var currentNumber7 = $('.number7').text();

            $({numberValue: currentNumber}).animate({numberValue: 90}, {
                duration: 3000,
                easing: 'linear',
                step: function() {
                    $('.number').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber1}).animate({numberValue: 80}, {
                duration: 3100,
                easing: 'linear',
                step: function() {
                    $('.number1').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber2}).animate({numberValue: 55}, {
                duration: 3200,
                easing: 'linear',
                step: function() {
                    $('.number2').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber3}).animate({numberValue: 65}, {
                duration: 3300,
                easing: 'linear',
                step: function() {
                    $('.number3').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber4}).animate({numberValue: 80}, {
                duration: 3400,
                easing: 'linear',
                step: function() {
                    $('.number4').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber5}).animate({numberValue: 75}, {
                duration: 3500,
                easing: 'linear',
                step: function() {
                    $('.number5').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber6}).animate({numberValue: 85}, {
                duration: 3600,
                easing: 'linear',
                step: function() {
                    $('.number6').text(Math.ceil(this.numberValue));
                }
            });

            $({numberValue: currentNumber7}).animate({numberValue: 20}, {
                duration: 3700,
                easing: 'linear',
                step: function() {
                    $('.number7').text(Math.ceil(this.numberValue));
                }
            });

        }
    });
});
