let page ='';
let data = '';

let elText = '';
let text = document.querySelectorAll('.section01 .list p');
let chu = '';

$.ajax({
	url: './js/html.json',
	success: function (dd) {
		console.log(dd.url[0].information);

		localStorage.setItem('url', JSON.stringify(dd.url[0]));
		localStorage.setItem('node', JSON.stringify(dd.object));

		data = JSON.parse(localStorage.getItem('url'));

		page = data.information;
		console.log(page);
	}
})



text.forEach(function (el, idx) {
	el.addEventListener('click', function () {
		
		localStorage.name = this.textContent;
		location.replace('../information.html');

		// elText += chu;

	})
})


$.ajax({
    url: './api/worddictionary.json',
    success: function (num) {
        let ranNum = Math.floor(Math.random() * 1000);
        let word = '';
        let mean = '';

        console.log(num.data[ranNum]);

        $.each(num.data, function (i, v) {
            if (i == ranNum) {
                word = `${num.data[i].용어명}`;
                mean = `${num.data[i].설명}`;
                
                $('.todayWord p').html(word);
                $('.wordEx').html(mean);
            }
        })


    }
})


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

