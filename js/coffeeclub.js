//coffeeclub.js

$(document).ready(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        
        if(winTop > 300) {
            
           $('.contents-box:first').animate({
                marginTop: '0',
                opacity: '1'
            },2000);
            
        }if(winTop>500) {
            
            $('.contents-box:last').animate({
                marginTop: '0',
                opacity: '1'
            },2000);
        }
    });
});