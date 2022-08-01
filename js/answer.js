

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

    async function wordFn(w1) {
        let e = await fetch(w1);
        let f = await e.json();
        tag = await f.data;

        hashTag('근로');
    }
    wordFn('./api/worddictionary.json');

    const elTag = document.querySelector('.relative .three');
    const elBox1 = document.querySelector('.qna .box01 > ul');
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
            if (k % 10 == 0 && k) {
                elList.push(elPush);
                elPush = '';
            }
            elPush += t;
        });

        elBox1.innerHTML = elList[0];
        if(!search.value == elList){
            elBox1.innerHTML = '검색값과 일치한 값이 없습니다';
        }
        /* 
        con의 갯수에 맞춰서 aside의 갯수가 늘어나고 줄어들게 만드시오!
        for로
        
        $('.con').length
        
        $('aside').html('<a></a>')
        
        console.log(
        $('.con').eq(0).offset().top,
        $('.con').eq(1).offset().top,
        $('.con').eq(2).offset().top
        )
        */
        //numbtn
        let idx = 0, move = 0;
        elNum1.forEach(function (e, key) {

            e.addEventListener('click', function () {
                move = key;
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

        //previous button
        elPrev.addEventListener('click', function () {

            if (move < elNum1.length && !0 <= move) {
                elNum1[move -= 1].click();
            } else {
                alert('더이상 값이 없습니다!')
            }
        });
        //previous button END

        // Next button
        elNext.addEventListener('click', function () {
            if (move < elNum1.length - 1) {
                elNum1[move += 1].click();
            } else {
                alert('더이상 값이 없습니다!')
            }
        });
        // Next button END

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



    function hashTag(param) {


        let elHash = [], elWord = [], elIdx = '';
        let mySet = new Set(), n;

        tag.forEach(function (v) {
            if (v.용어명.match(param)) {
                elHash.push(`<li> #${v.용어명} </li>`);
            };
        });

        for (let i = 0; i < elHash.length; i++) {
            let ran = Math.floor(Math.random() * 15);
            
            if(mySet.size < 3){
                if (!mySet.has(ran)) {
                    mySet.add(ran);
                } else {                
                    mySet.add(Math.floor(Math.random() * 15));
                }
            }
        }
        console.log(mySet.size);

        mySet.forEach(function (i) {
            elIdx += elHash[i];       

        });

        elTag.innerHTML = elIdx;
        if(!search.value == elIdx){
            elTag.innerHTML = '값이 없습니다';
        }


    };
    //hashTag END


    elShow.addEventListener('click', function () {
        hashTag(search.value);
        list(search.value);
        if(!search.value == elIdx){
            elTag.innerHTML = '값이 없습니다';
        }
    })

}
window.addEventListener('load', init);