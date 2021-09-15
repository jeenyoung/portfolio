//shop.js

$(document).ready(function () {

    var coffeeT = $('.coffeeT').offset().top; //870
    var goodsT = $('.goodsT').offset().top; //4725
    var giftT = $('.giftT').offset().top; //9180
    console.log(coffeeT, goodsT, giftT);

    var winTop = $(window).scrollTop();
    console.log(winTop);

    $('.mbtn ul li:first').click(function () {
        $('html, body').animate({
            scrollTop: coffeeT - 200
        }, 800);

        $('.contents-box').addClass('on');

    });

    /*$('.submenu .menu li:first').click(function () {
        $('html, body').animate({
            scrollTop: breadT - 200
        }, 800);
    });*/

    $('.mbtn ul li:nth-child(2)').click(function () {
        $('html, body').animate({
            scrollTop: goodsT - 800
        }, 700);

    });

    $('.mbtn ul li:last').click(function () {
        $('html, body').animate({
            scrollTop: giftT - 1100
        }, 600);

    });

    $(window).scroll(function () {
        var winTop = $(window).scrollTop();

        if (winTop > 200) {
            $('.contents-box').addClass('on');
        }
        
        //top보이기
        if($(this).scrollTop()>1600) {
            $('p.totop').fadeIn();
        }else{
             $('p.totop').fadeOut();
        }
        
        if(7340 > $(this).scrollTop() > 7000) {
            $('p.totop').animate({
                bottom: '268px'
            },800);
        }
    });//scroll
    
    //top
    $('.totop>a').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });


}); //jq
