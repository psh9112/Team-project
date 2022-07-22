
$.ajax({
    url: './api/information.xml',

    success: function (infoData) {

        let tag = '',title,smallword,info;

        $('.object .work > li').on('click',function(){
            let liThis = $(this).text();
            let titThis;

            $(infoData).find('items').each(function(i){
                titThis = $(this).find('title').text()
                if(liThis == titThis){
                    printFun( $(this) );
                }
            })
        });

        function printFun(data){
            title = data.find('title').html()
            smallword = data.find('smallword').html()
            info = data.find('info').html()        


            tag = `<article class="word">
                <h3 class="h3">${title}</h3>
                <p class="split">${smallword}</p>
                <P class="string"> ${info}</P>
            </article>`;        

            $('.explain >div').html(tag);
        }

    }
});

