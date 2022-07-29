

function init() {
    let data, tag;

    async function dataFn(u1, u2) {
        let a = await fetch(u1);
        let b = await a.json();
        let c = await fetch(u2);
        let d = await c.json();
        data = await b.item.concat(d.item);

        list('근로기준');
    }
    dataFn('./api/law_QnA1.json', './api/law_QnA2.json');

    // async function wordFn(w1) {
    //     let e = await fetch(w1);
    //     let f = await e.json();s
    //     tag = await f.data;

    //     hashTag('근로');
    // }
    // wordFn('./api/worddictionary.json');

    const elBox1 = document.querySelector('.qna .box01 > ul');
    const elTag = document.querySelector('.relative .three');
    const elShow = document.querySelector('.search > p > button');
    const elNum1 = document.querySelectorAll('.pagenum .num');
    const elPrev = document.querySelector('.pagenum .prev');
    const elNext = document.querySelector('.pagenum .next');

    function list(param) {
        //data print 
        let elData = [], elList = [], elPush = '';

        data.forEach(function (v) {
            try {
                if (v.question.cdata.match(param)) {
                    elData.push(`<li>
                        <div class="container section">
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

            if (k % 10 == 0 && k) {
                elList.push(elPush);
                elPush = '';
            }
        });

        elBox1.innerHTML = elList[0];


        //numbtn / previous=이전
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
            }); //click Event END

        }); //elNum1 forEach END

        // Next button
        elNext.addEventListener('click', function () {

            if (next < elNum1.length - 1) {
                elNum1[next += 1].click();
            }
            console.log(elNum1.length - 1);
        });
        // Next button END

        //previous button
        elPrev.addEventListener('click', function () {
            if (elNum1.length > prev) {
                elNum1[prev -= 1].click();
            }
        });
        //previous button END
        openFun();

    }; //list END

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

    };//List openFun END




    // function hashTag(param) {

    //     let elHash = [], elEx = [], elPush = '';

    //     tag.forEach(function (v) {
    //         if (v.match(param)) {
    //             elHash.push(`<li> #${v.용어명} </li>`);
    //         };
    //     });

    //     elHash.forEach(function (a, b) {
    //         elPush += a;
    //     });

    //     setTimeout(function () {
    //         elTag.innerHTML(`${elPush[b]}`);
    //         elTag.innerHTML(`${elPush[b]}`);
    //         elTag.innerHTML(`${elPush[b]}`);
    //     }, 1000);
    // };
    //hashTag END


    elShow.addEventListener('click', function () {
        console.log(search.value)
        list(search.value);
        // hashTag(search.value);
    })

}
window.addEventListener('load', init);

