//brandstory
$(document).ready(function () {

    //전역변수 구역
    var pno = 0;
    const totcnt = 6;
    var prot = 0;

    $('html, body').stop().animate({
        scrollTop: '0'
    }, 100);

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();

        if (prot === 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.wheelDelta;
        console.log('마우스휠 델타값: ' + delta);

        if (delta > 0) {
            pno--;
            if (pno === -1) pno = 0;
        } else {
            pno++;
            if(pno === totcnt) pno = totcnt -1;
        }
        
        var footerPos = $('footer').offset().top;
        console.log('foorter상단: '+footerPos);
        console.log('페이지번호: ', pno);

        var pagepos = $('.page').eq(pno).offset().top;
        console.log('스크롤탑: ' + pagepos);

        $('html, body').stop().animate({
            scrollTop: pagepos + 'px'
        }, 800, function () {
            prot = 0;
        });

    })




}); //jQuery

