
$.ajax({
    url: './api/information.xml',

    success: function (infoData) {

        let tag = '', title, smallword, info;

        $('.object .work > li').on('click', function () {
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

        } //end


        function strFun(str, len) {

            let realStr = '';

            if (str.length > len) {
                realStr = str.substring(0, len) + '...';
            } else {
                realStr = str;
            }
            return realStr;
        }
        let txt = $(this).find('info').text().trim();
        console.log(txt.length);
        $('.word .strimg').text(strFun(txt, 50));
        //end

        
    }//ajax-success.end
});



// $('.contain >p').on('click', function (i, v) {

//     if ($(this).eq(v) = "임대차보호법") {
//         $('.object .protect')
//         console.log()
//     }


// });


