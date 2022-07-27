

function init() {
    let data;

    async function dataFn(u1, u2) {
        let a = await fetch(u1);
        let b = await a.json();
        let c = await fetch(u2);
        let d = await c.json();
        data = await b.item.concat(d.item);

        list('근로계약서');
    }
    dataFn('./api/law_QnA1.json', './api/law_QnA2.json');

    
    const elBox1 = document.querySelector('.qna .box01 > ul');
    const elNum1 = document.querySelectorAll('.pagenum .num');
    const elPrev = document.querySelector('.pagenum .img:nth-of-type(1)');
    const elNext = document.querySelector('.pagenum .img:nth-of-type(2)');

    function list(param) {
        //data print 
        let elData = [], elList = [], elPush = '';
        let idx = 0;

        data.forEach(function (v) {
            try {
                if (v.question.cdata.match(param)) {
                    elData.push(`<li>
                        <div class="container">
                            <p class="question">
                                <b>Q.</b>
                                <span>${v.question.cdata}</span>
                            </p>
                            <p class="plus">
                                <button><span></span><span></span></button>
                            </p>
                        </div>
                        <div class="answer">
                            <b>A.</b>
                            <span>${v.answer.cdata}</span>
                        </div>
                    </li>`);
                }
            } catch { }

        })

        elData.forEach(function (v, k) {
            elPush += v;

            if (k % 5 == 0 && k) {
                elList.push(elPush);
                elPush = '';
            }
        });

        elBox1.innerHTML = elList[0];
        
        //numbtn
        elNum1.forEach(function (e, key) {
            e.addEventListener('click', function () {
                if (!this.classList.contains('active')) {
                    elNum1[idx].classList.remove('active');
                    elNum1[key].classList.add('active');
                } else {
                    elNum1[idx].classList.remove('active');
                }
                idx = key;

                let val = Number(this.textContent);
                elBox1.innerHTML = elList[val];
            });
        });

        openFun();

    }; //list end

    
    //next btn
    elNext.addEventListener('click', function () {});

    //preview btn
    elPrev.addEventListener('click', function () {});



    function openFun() {
        //list open
        const elPlus = document.querySelectorAll('.container .plus > button');
        const elAnswer = document.querySelectorAll('.box01 .answer');

        let val = 0;
        elPlus.forEach(function (el, key) {
            el.addEventListener('click', function () {

                if (!this.classList.contains('active')) {
                    elPlus[val].classList.remove('active');
                    elPlus[key].classList.add('active');

                    elAnswer[val].classList.remove('active');
                    elAnswer[key].classList.add('active');
                    console.log('open')
                } else {
                    elPlus[val].classList.remove('active');
                    elAnswer[val].classList.remove('active');
                    console.log('close')
                }

                val = key;

            });
        });

    };//openFun end


    //search btn
    const elShow = document.querySelector('.search > p > button');
    const elSearch = document.querySelector('.search > p > input');
    elShow.addEventListener('click', function () {
        console.log(elSearch.value)
        list(elSearch.value);
    })

}
window.addEventListener('load', init);






















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


