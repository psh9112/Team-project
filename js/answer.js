async function data(dataUrl){
    
    let d = await fetch(dataUrl);
    let e = await d.json();
    
    return e;

}

let exec = async ()=>{
    qna1( await data('./api/law_QnA1.json') );
    qna2( await data('./api/law_QnA2.json') );
}
exec();

function qna1(data){
    console.log(data)
}


function qna2(data){
    console.log(data)
}


/*
fetch('data3.json')
.then(function(data3제이슨 파일의 데이터를 전달받는다.){
    데이터를 문자로 인식하기때문에
    데이터 객체타입을 변경해주는 공간
})
.then(function(변경된 겍체타입을 전달받는다.){
    화면에 출력될 작업들을 입력하는 공간
});
*/

/* 
fetch('./api/law_QnA1.json')
    .then(function (data) { return data.json() })
    .then(function (realData) {
        // console.log(realData.item[0]);

        const elQna = document.querySelector('.box01 > ul');

        function sortDcd() { //내림차순
            realData.product.sort(function (a, b) {
                if (a.price < b.price) return 1;
                if (a.price > b.price) return -1;
                return 0;
            });
            printFun();
        };

        function sortAcd() { //오름차순
            realData.product.sort(function (a, b) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            });
            printFun();
        };

        function printFun() {

            let tags = [];
            let list = '';

            realData.product.forEach(function (v) {
                tags.push(`<li>
                            <div class="container">
                                <p class="question">
                                    <span>Q.</span>
                                    <span></span>
                                </p>
                                <p class="plus"><span></span><span></span></p>
                            </div>
                            <div class="answer"></div>
                        </li>`);
            });

            tags.forEach(function (v) {
                list += v;
            });

            elUl.innerHTML = list;
        };

        printFun();

        const btn = document.querySelectorAll('button');

        btn[0].addEventListener('click', sortAcd);
        btn[1].addEventListener('click', sortDcd);


    }); */