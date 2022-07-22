$('header').load('inc.html > header > .all', hello);
$('footer').load('inc.html > footer > .footer');
$('.popup').load('inc.html > .popup > .pop_bg');



function hello() {
    const burger = document.querySelector('.burger');
    const pop = document.querySelector('.popup');
    const popAll = document.querySelector('.popup > .pop_bg');

    burger.addEventListener('click', function () {
        pop.classList.add('active');
        popAll.classList.add('left');

        // setAttribute는 나중에
    })

    
}

