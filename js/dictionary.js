$('header > .all > .top > .logo > p').text("생활 쏙 법 용어");

$.ajax({
    url: './api/worddictionary.json',
    success: function (word) {
        console.log('loading_fin');

        let list = [];
        let open = '';
        let more = [];
        let result= '';

        $.each(word.data, function (key, value) {
            list.push(`<li>
                    <div class="word">
                        <p>${value.용어명}</p>
                        <span>+</span>
                    </div>
                    <div class="ex">
                        <p>${value.설명}</p>
                    </div>
                </li>`);
        })
        open = list.slice(0, 5);
        // console.log(open);
        $('.wl > ul').html(open);
        


        $('.wl > .more').on('click', function () {
            for (let i = 6; i < list.length; i += 5) {
                $.each(list,function(i,v){
                    if(more.indexOf(v) == -1){
                        more = list.slice(i, i + 5);
                    };
                });
            };
            open = open.concat(more);
            $('.wl > ul').html(open);
            console.log(open);
        })
        //더보기할때마다 배열값 추가되도록 하기
        //반복되는 것만 빼면 됨 아즈아


        $('li > .word > span').on('click', function () {

            $('li > .ex').removeClass('plus');
            $(this).parent().next().addClass('plus');
            //this의 부모의 형제요소인 '.ex'를 선택해서 plus라는 class값 추가함.

        })
    }
})


