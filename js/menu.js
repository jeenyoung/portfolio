//menu.js

//21.09.13 페이지 이동 후 애니메이트
$(document).ready(function () {
    var page_url = window.location.href;
    console.log(page_url);

    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    console.log(page_id);

    //string.substring( start, end )
    //end 지정되지 않으면 문자열 끝까지 반환

    if (page_id == 'bread') {
        $('.contents-box').addClass('on');

        $('html,body').animate({
            scrollTop: $('#'+page_id).offset().top - 200
        }, 800);


    } else if (page_id == 'coffee') {
        $('html,body').animate({
            scrollTop: $('#'+page_id).offset().top -800
        }, 800);
    } else if (page_id == 'beverage') {
        $('html, body').animate({
            scrollTop: $('#'+page_id).offset().top -1100
        }, 800);
    };


});





$(document).ready(function () {

    var breadT = $('.breadT').offset().top; //870
    var coffeeT = $('.coffeeT').offset().top; //4125
    var beverT = $('.beverT').offset().top; //5880
    console.log(breadT, coffeeT, beverT);

    var winTop = $(window).scrollTop();
    console.log(winTop);

    $('.mbtn ul li:first, .smenu.menu li:first').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: breadT - 200
        }, 800);

        $('.contents-box').addClass('on');

    });

    /*$('.submenu .menu li:first').click(function () {
        $('html, body').animate({
            scrollTop: breadT - 200
        }, 800);
    });*/

    $('.mbtn ul li:nth-child(2), .smenu.menu li:nth-child(2)').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: coffeeT - 800
        }, 700);

    });

    $('.mbtn ul li:last, .smenu.menu li:last').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: beverT - 1100
        }, 600);

    });

    $(window).scroll(function () {
        var winTop = $(window).scrollTop();

        if (winTop > 670) {
            $('.contents-box').addClass('on');
        }
    });


}); //jq