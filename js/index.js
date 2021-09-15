//index.js

$(document).ready(function () {
    
   /* alert('포트폴리오 진행 중 입니다!');*/

    //메뉴
    $('.submenu').hide();

    $('nav ul li, .submenu').mouseover(function () {
        $('.submenu').stop().slideDown();
    });

    $('nav ul li, .submenu').mouseout(function () {
        $('.submenu').stop().slideUp();
    });

    //메인

    function action() {
        $('.banner-txt > p, .banner-txt > a').animate({
            left: '18%'
        }, 800);
    }

    action();

    var autocall; //인터벌용 변수

    autocall = setInterval(fadeImg, 3000);

    $('main').hover(function () {
        clearInterval(autocall);
    }, function () {
        autocall = setInterval(fadeImg, 3000);
    });



    function fadeImg() {

        var fimg = $('.main .main-banner').first();
        var limg = fimg.next();

        limg.hide().addClass('active').fadeIn(800, function () {
            $('.main').append(fimg);

            fimg.removeClass('active');

               //
    var i = Number($('.main-banner').height());

    $('main').css({
        height: i + 'px'
    });

    var f = $('main').height();
    console.log(f, i);
    //
            
            var chg = $('.active').attr('data-seq');
            /*console.log(chg);*/
            
            if(chg == 1 ){
                 $('ul.m-btngrp li:first').removeClass('selB');
                 $('ul.m-btngrp li:last').addClass('selB');
                
            }if(chg == 0) {
                 $('ul.m-btngrp li:last').removeClass('selB');
                 $('ul.m-btngrp li:first').addClass('selB');
            }
        });
    } //fadeImg
    

    //커피클럽
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        var topNum = $('.coffee-club-wrap').offset().top - 900;

        if (scTop > topNum) {
            $('.coffee-club>p, .coffee-club>a').animate({
                left: '490px'
            }, 800);
        };

    }); //커피클럽
    
 //스토어
    
    //초기설정
    $('.store-photo>li:last').prependTo('.store-photo');

    //var chW = $('.store-photo li').height();
    //높잇값을 구하는 변수면 목적이 맞게 변수이름을 변경하세요
    
    var chH = $('.store-photo li').height();
    $('.store-photo').css('margin-top', -chH); //-410
    

    $('.prevBtn').click(function (e) {
        e.preventDefault();

        $('.store-photo').animate({
            //marginTop: '-=' + chH
            marginTop: '+=' + chH
        }, 'slow', function () {
            //$('.store-photo>li:first').appendTo('.store-photo');
            //$('.store-photo').css('margin-top', -chH);
            
            $('.store-photo>li:last').prependTo('.store-photo');
            $('.store-photo').css('margin-top', -chH);
        });
        
        //메뉴변경 함수
        
        seq = $('.store-photo li').eq(0).attr('data-seq');
        chgMenu(Number(seq)); //함수실행
    }); //prevBtn

    $('.nextBtn').click(function (e) {

        e.preventDefault();

        $('.store-photo').animate({
            //marginTop: "+=" + chH
            marginTop: "-=" + chH
        }, 'slow', function () {
            //$('.store-photo>li:last').prependTo('.store-photo');
            //$('.store-photo').css('margin-top', -chH);
            
            $('.store-photo>li:first').appendTo('.store-photo');
            $('.store-photo').css('margin-top',-chH);
        });
        
        //메뉴변경 함수
        
        seq = $('.store-photo li').eq(2).attr('data-seq');
        chgMenu(Number(seq)); //함수실행
    }); //nextBtn



}); //jQuery

//store 메뉴변경 함수
function chgMenu(n){
    $('.store-txt ul li').eq(n).addClass('il').siblings().removeClass('il');
}
