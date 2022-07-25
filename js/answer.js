

async function data(dataUrl) {

    let d = await fetch(dataUrl);
    let e = await d.json();

    return e;

}

let exec = async () => {
    qna1(await data('./api/law_QnA1.json'));
    qna2(await data('./api/law_QnA2.json'));
}
exec();


function qna1(data) {
    let elBox1 = document.querySelector('.qna .box01 > ul');
    let elData;
    data.item.forEach(function (v) {
        try {
            if (v.question.cdata.match('건물의 소유')) {
                elData = `<li>
                <div class="container">
                    <p class="question">Q. ${v.question.cdata}</p>
                    <p class="plus">
                    <button><span></span><span></span></button>
                    </p>
                </div>
                <div class="answer">${v.answer.cdata}</div>
            </li>
                `;
                // console.log(elData);
                elBox1.innerHTML += elData;
            }
        } catch { }
        openFun();

    })
} //qna1 end

function qna2(data) {
    let elBox1 = document.querySelector('.qna .box01 > ul');
    let elData;
    data.item.forEach(function (v) {
        try {
            if (v.question.cdata.match('건물의 소유')) {
                elData = `<li>
                <div class="container">
                    <p class="question">Q. ${v.question.cdata}</p>
                    <p class="plus">
                    <button"><span></span><span></span></button>
                    </p>
                </div>
                <div class="answer">${v.answer.cdata}</div>
            </li>
                `;
                // console.log(elData);
                elBox1.innerHTML += elData;
            }
        } catch { }

        openFun();
    })
} //qna2 end


function openFun() {

    const elPlus = document.querySelectorAll('.qna .box01 > ul > li .container .plus > button');
    const elAnswer = document.querySelectorAll('.qna .box01 > ul > li .answer');

    let val = 0;
    elPlus.forEach(function (el, key) {
        el.addEventListener('click', function () {
            if(!this.classList.contains('active')){
                elPlus[val].classList.remove('active');
                elPlus[key].classList.add('active');
    
                elAnswer[val].classList.remove('active');
                elAnswer[key].classList.add('active');
            }else{
                elPlus[val].classList.remove('active');
                elAnswer[val].classList.remove('active');
            }

            val = key;

        });
    });
    
};//openFun end
































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

    }); */


