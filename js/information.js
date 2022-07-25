
$.ajax({
    url: './api/information.xml',

    success: function (infoData) {


        function strFun(str, len) {

            let realStr = '';

            if (str.length > len) {
                realStr = str.substring(0, len) + '...';
            } else {
                realStr = str;
            }
            return realStr;
        }//strFun end


        let tag = '', title, smallword, info;

        $('.object > ul > li').on('click', function () {
            $(this).addClass('active');


            let liThis = $(this).text();
            let titThis;

            $(infoData).find('items').each(function (i) {
                titThis = $(this).find('title').text()
                if (liThis == titThis) {
                    printFun($(this));
                }

            });

        }); //click end



        function printFun(data) {
            title = data.find('title').html()
            smallword = data.find('smallword').html()
            info = data.find('info').html()


            tag = `<article class="word">
                <h3 class="h3">${title}</h3>
                <p class="split">${smallword}</p>
                <P class="string"> ${info}</P>
            </article>`;

            $('.explain >div').html(tag);

            let txt = $('.contains .string').text().trim();
            $('.contains .string').text(strFun(txt, 500));


        } printFun($(infoData).find('items').eq(0))
        // printFun end


        $('.explain .btn').on('click', function () {
            printFun();
            $('.contains .string').text();
        });





    }//ajax-success.end
});
