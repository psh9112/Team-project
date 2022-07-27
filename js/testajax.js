// const word = document.querySelectorAll('.dic > ul > li > p');
// const explain = document.querySelectorAll('.dic > ul > li > div');

$.ajax({
    url: "./api/worddictionary.json",
    // data:{serviceKey:'',pageNum:1,},외부에 있는 데이터 갖고올때 필요한 parameter
    dataType: "json",
    success: function dataType(dic) {
        console.log(dic);
        let words = '';

        $.each(dic.data, function (key, value) {
            words += `<li>
                        <p>${value.용어명}</p>
                        <div>${value.설명}</div>
                    </li>`;
        });
        $('main > .dic > ul').html(words);
    }
})



