$.ajax({
    url: './api/worddictionary.json',
    success: function (word) {
        console.log('loading_fin');

        let list = [];
        let result = '';
        let count = 0;

        let option = '';


        $.each(word.data, function (key, value) {

            if (key % 5 == 0 && key) {
                list.push(result);
                result = '';
            }
            result += `<li>
                        <div class="word">
                            <p>${value.용어명}</p>
                            <div class="du">
                                <button> 
                                    <span></span>
                                    <span></span>
                                <button>
                            </div>
                        </div>
                        <div class="answer">
                            <p>${value.설명}</p>
                        </div>
                    </li>`;

            $('.wl > ul').html(list[0]);
        });


        $('li > .word').on('click', function () {
            $('li').find('button').removeClass('active');
            $(this).find('button').toggleClass('active');
            
            $('li > .answer').removeClass('plus');
            $(this).next().toggleClass('plus');
        })

        $('.wl > .more').on('click', function () {
            count++;

            $('.wl > ul').append(list[count]);

            $('li > .word').on('click', function () {
                $('li').find('button').removeClass('active');
                $(this).find('button').toggleClass('active');

                $('li > .answer').removeClass('plus');
                $(this).next().toggleClass('plus');
            })
        })


        // 검색기능
        $('.search p button').on('click', function () {
            count = 0;
            option = $('#search').val();
            console.log(option);

            print(option);


            $('li > .word').on('click', function () {
                $(this).find('button').toggleClass('active');
                $(this).next().toggleClass('plus');

                $('li').find('button').removeClass('active');
                $('li > .answer').removeClass('plus');
            })

        }

        );

        // ----------------------------------------------------------
        function print(param) {
            //data print 
            let elData = [], elList = [], elPush = '';

            word.data.forEach(function (v) {
                try {
                    if (v.용어명.includes(param)) {
                        elData.push(`<li>
                        <div class="word">
                            <p>${v.용어명}</p>
                            <div class="du">
                                <button> 
                                    <span></span>
                                    <span></span>
                                <button>
                            </div>
                        </div>
                        <div class="answer">
                            <p>${v.설명}</p>
                        </div>
                    </li>`);
                    }
                } catch { }

            })

            elData.forEach(function (t, k) {
                if (k % 6 == 0 && k) {
                    elList.push(elPush);
                    elPush = '';
                }
                elPush += t;
            });


            $('.wl > ul').html(elList);

            if (!option == elList) {
                $('.wl > ul').html('<li>검색결과 일치한 값이 없습니다</li>');
            }
        }

    }
})







