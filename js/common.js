$('header').load('inc.html > header > .all', hello);
$('.popup').load('inc.html > .popup > .pop_bg', pop);
$('footer').load('inc.html > footer > .footer');


function hello() {
    let scrolltop = '';

    $(document).on('scroll', function () {
        scrolltop = $(document).scrollY;

        $('header').addClass('fixedH');
        $('.tab').css('padding-top', '130px');
    })
    $('.burger').on('click', function () {
        $('.popup').addClass('active');
        $('.pop_bg').addClass('left');

        $('.right').on('click', function () {
            $('.popup').removeClass('active');
            $('.pop_bg').css('transform', 'translateX(100%)');
        })
    })
}

function pop() {
    //버거popup 스크립트만
    $('.burger').on('click', function () {
        $('.popup').addClass('active');
        $('.pop_bg').addClass('left');

        $('.right').on('click', function () {
            $('.popup').removeClass('active');
            $('.pop_bg').css('transform', 'translateX(100%)');
        })
    })
}
