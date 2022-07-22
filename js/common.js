$('header').load('inc.html > header > .all',hello);
$('.popup').load('inc.html > .popup > .pop_bg');
$('footer').load('inc.html > footer > .footer');


function hello() {

    $('.burger').on('click', function () {
        $('.popup').addClass('active');
        $('.pop_bg').addClass('left');
        // setAttribute는 나중에

        $('.right').on('click',function(){
            $('.popup').removeClass('active');
            $('.pop_bg').css('transform','translateX(100%)');
        })

    })

    
}
