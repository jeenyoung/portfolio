//team.js

$(document).ready(function () {

    //모달
    $('body').append('<div id="black"></div><div id="Main"></div>');

    $('a.modal').click(function (e) {
        e.preventDefault();

        var imgsrc = $(this).attr('href');
        var imgtxt = $(this).children('p').html();
        console.log(imgtxt);

        $('#black').show();
        $('#Main').show().html('<img src="' + imgsrc + '"><p>'+imgtxt+'</p>');
        //$('#Main').show().html('<p>'+imgtxt+'</p>');
        
    }); //a.modal
    
    $('#black').click(function(){
       $(this).hide();
        $('#Main').hide();
        
    });
    
}); //jq
