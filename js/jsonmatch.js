
$.ajax({
    url: "../api/law_QnA1.json",
    success: function (data) {
        let dd = '';
        // let test = '';
        let containA = data.item;



        let c = containA.filter((d) => {
            for (let i in d) {
                let str = d[i].cdata;
                let reg = /유언/g;
                if (reg.test(str)) return true;
            }
        });
        console.log(c);
    }

})


