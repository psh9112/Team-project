

function init() {
    let data;

    async function dataFn(u1, u2) {
        let a = await fetch(u1);
        let b = await a.json();
        let c = await fetch(u2);
        let d = await c.json();
        data = await b.item.concat(d.item);

        list('근로기준');
    }
    dataFn('./api/law_QnA1.json', './api/law_QnA2.json');

    const elBox1 = document.querySelector('.qna .box01 > ul');
    const elNum1 = document.querySelectorAll('.pagenum .num');
    const elPrev = document.querySelector('.pagenum .img:nth-of-type(1)');
    const elNext = document.querySelector('.pagenum .img:nth-of-type(2)');

    function list(param) {
        //data print 
        let elData = [], elList = [], elPush = '';

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

        elData.forEach(function (t, k) {
            elPush += t;

            if (k % 5 == 0 && k) {
                elList.push(elPush);
                elPush = '';
            }
        });

        elBox1.innerHTML = elList[0];

        //numbtn
        let idx = 0, next = 0, prev = 0;
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
                openFun();
            });
            //next btn
        });

        // elNum1.forEach(function (e, key) {
        //     elNext.addEventListener('click', function () {
        //         elNum1[idx].classList.remove('active');
        //         elNum1[key].classList.add('active');

        //         idx = key;

        //         let val = Number(this.textContent);
        //         elBox1.innerHTML = elList[val]++;
        //         openFun();
        //     });

        // });
        openFun();

    }; //list end


    // //preview btn
    // elPrev.addEventListener('click', function () { });




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
    // const elSearch = document.querySelector('.search > p >  ');

    elShow.addEventListener('click', function () {
        console.log(search.value)
        list(search.value);
    })

}
window.addEventListener('load', init);


