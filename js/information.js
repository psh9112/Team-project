
$.ajax({
    url: './api/information.xml',

    success: function (infoData) {

        selectFun();


        function strFun(str, len) {

            let realStr = '';

            if (str.length > len) {
                realStr = str.substring(0, len) + '...';
            } else {
                realStr = str;
            }
            return realStr;
        }//strFun end



        let tag = '', title, smallword, info;

        $('.object > ul > li').on('click', function () {
            $('.object > ul > li')[0].removeClass('active');
            exe($(this));
        });

        
        //초기세팅        
        elBtns.forEach(function (el, key) {
            el.classList.remove('active');
            elTabs[key].classList.remove('active');
        });
        elBtns[1].classList.add('active');
        elTabs[1].classList.add('active');
        $('.object > ul > li').each(function () {
            if ($(this).text() == localStorage.name + '법') {
                exe($(this));
            }
        });
        //초기세팅 end       


        function exe(_this) {
            console.log(_this)
            _this.addClass('active');


            let liThis = _this.text();
            let titThis;

            $(infoData).find('items').each(function (i) {
                titThis = $(this).find('title').text()
                if (liThis == titThis) {
                    printFun($(this));
                }

            });
        }


        function printFun(data) {
            title = data.find('title').html()
            smallword = data.find('smallword').html()
            info = data.find('info').html()


            tag = `<article class="word">
                <h3 class="h3">${title}</h3>
                <p class="split">${smallword}</p>
                <P class="string"> ${info}</P>
            </article>`;

            $('.explain >div').html(tag);

            let txt = $('.contains .string').text().trim();
            $('.contains .string').text(strFun(txt, 500));

            //더보기 버튼
            $('.explain .btn').on('click', function () {
                $(this).toggleClass('active');
                $('.contains .string').text(txt);

                if(!$(this).hasClass('active')){
                    $('.contains .string').text(strFun(txt, 500));
                }
            });
        } 
        

        

        elBtn1.addEventListener('click', function () {
            printFun($(infoData).find('items').eq(0));
        });

        elBtn2.addEventListener('click', function () {
            printFun($(infoData).find('items').eq(18));
        });
    }// printFun end




}); //ajax-success.end

const elBtns = document.querySelectorAll('.contain p');
const elTabs = document.querySelectorAll('.object > ul');
const elList = document.querySelectorAll('.object > ul > li');
// 카테고리 선택 시 해당 리스트 목록 보여주기
function selectFun() {

    let idx = 0, val = 0;

    elBtns.forEach(function (el, key) {
        el.addEventListener('click', function () {

            elBtns[idx].classList.remove('active');
            elBtns[key].classList.add('active');

            elTabs[idx].classList.remove('active');
            elTabs[key].classList.add('active');

            idx = key;

        });
    });

    elList.forEach(function (v, k) {

        v.addEventListener('click', function () {

            elList[val].classList.remove('active');
            elList[k].classList.add('active');

            val = k;

        });

    });



}; //selectFun end


//QnA 데이터 불러오기
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

//불러온 데이터 출력
function list(param) {
    //data print 
    const elBox1 = document.querySelector('.qna .box01 > ul');

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

    openFun();
};


//QnA open/close
function openFun() {
    //list open
    const elPlus = document.querySelectorAll('.qna .box01 > ul > li .container .plus > button');
    const elAnswer = document.querySelectorAll('.qna .box01 > ul > li .answer');

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

}