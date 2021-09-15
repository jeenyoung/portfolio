//wholesale-aboutblend.js

$(document).ready(function(){
    
    $(window).scroll(function(){
        
        var winTop = $(window).scrollTop();
        console.log(winTop);
        
        if(winTop > 300) {
            $('.content:first').addClass('on');
        }if(winTop>350) {
            $('.content:nth-child(2)').addClass('on');
        }if(winTop>400) {
            $('.content:last').addClass('on');
        }
    });
});