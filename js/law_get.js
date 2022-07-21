
let a,b;
function dataFun(dataUrl, pageNum){        
    $.ajax({
        url: dataUrl,
        success: function (data) {
            if(pageNum == 1){
                a = data.response.body.items.item;
            }
            else{ 
                b = data.response.body.items.item; 
            }
        }
    });
}

dataFun('./api/law_QnA1.json',1);
dataFun('./api/law_QnA2.json',2);


setTimeout(function(){
    console.log(a);
},2000);