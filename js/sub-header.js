//sub-header.js 

$(document).ready(function(){
    
    //메뉴
    $('.submenu').hide();

    $('nav ul li, .submenu').mouseover(function () {
        $('.submenu').stop().slideDown();
    });

    $('nav ul li, .submenu').mouseout(function () {
        $('.submenu').stop().slideUp();
    }); //메뉴
    
});