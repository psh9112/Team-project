
$.ajax({
    url: './api/worddictionary.json',
    success: function (word) {
        console.log('loading_fin');

        let list = [];
        let open = '';
        let result = '';
        let count = 0;

        $.each(word.data, function (key, value) {

            if (key % 5 == 0 && key) {
                list.push(result);
                result = '';
            }
            result += `<li>
                        <div class="word">
                            <p>${value.용어명}</p>
                            <span>+</span>
                        </div>
                        <div class="ex">
                            <p>${value.설명}</p>
                        </div>
                    </li>`;
        })

        $('.wl > ul').html(list[0]);

        $('li > .word').on('click', function () {
            $('li > .ex').removeClass('plus');
            $(this).next().addClass('plus');
        })

        $('.wl > .more').on('click', function () {
            count++;
            $('.wl > ul').append(list[count]);

            $('li > .word').on('click', function () {
                console.log(0);
                $('li > .ex').removeClass('plus');
                $(this).next().addClass('plus');
            })
        })
    }
})


