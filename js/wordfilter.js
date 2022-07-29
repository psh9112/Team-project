$.ajax({
    url: './api/worddictionary.json',
    success: function findWord(word) {
        let allW = [];
        let filW = [];
        let inputT;

        $.each(word.data, function (idx, value) {
            allW.push(`${value.용어명}`);
        })
        // console.log(allW);


        function find(param) {
            allW.forEach(function (v,k) {
                if (v.match(param)) {
                    setTimeout(function () {
                        filW.push(v);
                        $('.relative .three li:nth-of-type(1)').text(`#${filW[1]}`);
                        $('.relative .three li:nth-of-type(2)').text(`#${filW[2]}`);
                        $('.relative .three li:nth-of-type(3)').text(`#${filW[3]}`);
                        $('.relative .three li:nth-of-type(4)').text(`#${filW[4]}`);
                    }, 1000);
                }
            })
        };

        $('.search p button').on('click', function () {
            filW=[];
            inputT = $('#search').val();

            find(inputT);
        })
    }

})