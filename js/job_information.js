$.ajax({
    url: './js/test.json',
    success: function (workData) {
        console.log(workData);

        let data='';

        $.each(workData.GetJobInfo.row, function (key, value) {
            data += `<p>${value.CMPNY_NM.$t}</p>`
        });

        console.log(data);
        $('main').html(data);
    }
})