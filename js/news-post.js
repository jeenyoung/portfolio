//news-post.js 

$(document).ready(function () {

    $('.contents-box').slice(0, 3).show();

    $('#more').on('click', function (e) {
        e.preventDefault();

        $('.contents-box:hidden').slice(0, 3).slideDown();

        if ($('.contents-box:hidden').length == 0) {
            $('#more').fadeOut();
        }

        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });
}); //jq
