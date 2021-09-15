//news-faq.js 

$(document).ready(function () {
    $('.btn').click(function (e) {
        
        e.preventDefault();
        $(this).prev().children('.answer').slideToggle();
        
        $(this).toggleClass('on');
    });  

});
