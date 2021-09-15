//education.js

$(document).ready(function(){
   
    $('.cupping').css({
       opacity: '0' 
    });
    
    $(window).scroll(function(){
        
        var winTop = $(window).scrollTop();
        
        if(winTop > 300){
          $('.cupping').animate({
               opacity: '1' 
          }, 800);
        };
    });
    
}); //jq