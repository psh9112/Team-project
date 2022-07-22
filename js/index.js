$('header').load('inc.html > header > .all');
$('footer').load('inc.html > footer > .footer');


$.ajax({
    url: './api/youtube_video.json',
    success: function (data) {
        let source = '';

        $.each(data.video, function (key, value) {
            source += `<li>
                            <iframe src="${value.src}" 
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </li>`
        });
        $('.section03 > .video > .slide').html(source);

        $(".slide").slick({
            prevArrow: false,
            nextArrow: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            arrows: true,
            draggable: true,
            easing: 'linear',
            infinite: true,
            edgeFriction: 0.35,
            fade: false,
            focusOnSelect: false,
            focusOnChange: false,
            initialSlide: 0,
            lazyLoad: 'ondemand',
            mobileFirst: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            pauseOnDotsHover: false,
            respondTo: 'window',
            responsive: null,
            rows: 1,
            rtl: false,
            slide: '',
            slidesPerRow: 1,
            speed: 500,
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            touchThreshold: 5,
            useCSS: true,
            useTransform: true,
            variableWidth: false,
            vertical: false,
            verticalSwiping: false,
            waitForAnimate: true,
            zIndex: 1000
        });
    }
})

