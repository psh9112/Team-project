$('header').load('inc.html > header > .all');
$('footer').load('inc.html > footer > .footer');


$.ajax({
    url: './api/youtube_video.json',
    success: function (data) {
        let source = '';

        $.each(data.video, function (key, value) {
            source += `<div class="slide">
                            <iframe src="${value.src}"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>`
        });
        $('.section03 > .slide-wrapper').html(source);

        $('.section03 > .slide-wrapper').slick({
            dots:true
        })
    }
})
