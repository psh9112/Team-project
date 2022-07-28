


const elBtn1 = document.querySelector('.contain .law-work');
const elBtn2 = document.querySelector('.contain .law-protect');
const elBtns = document.querySelectorAll('.contain p');
const elTabs = document.querySelectorAll('.object > ul');
const elList = document.querySelectorAll('.object > ul > li');
const elBox1 = document.querySelector('.qna .box01 > ul');
let infoData, txt;

$.ajax({
    url: './api/information.xml',
    success: function (data) {
        infoData = data;

        selectFun();

        //초기세팅--------------------------------------------------------------------     

        elBtns.forEach(function (el, key) {
            elBtns[key].classList.remove('active');
            elTabs[key].classList.remove('active');
        });

        elBtns[localStorage.number].classList.add('active');
        elTabs[localStorage.number].classList.add('active');


        $('.object > ul > li').each(function (k) {
            if ($(this).text() == localStorage.name + '법' || $(this).text() == localStorage.name + '보장법') {
                exe(k);
            }
        });
        //초기세팅 end--------------------------------------------------------------------     




    }//success end

}); //ajax-success.end


// 카테고리 선택 시 해당 리스트 목록 보여주기
function selectFun() {

    let idx = 0;
    elBtns.forEach(function (el, key) {
        el.addEventListener('click', function () {

            elBtns[idx].classList.remove('active');
            elBtns[key].classList.add('active');

            elTabs[idx].classList.remove('active');
            elTabs[key].classList.add('active');

            idx = key;

            (key == 0) ? exe(0) : exe(18);
        });
    });

    elList.forEach(function (v, k) {
        v.addEventListener('click', function () {
            exe(k);
            list(this.textContent.trim());
            localStorage.name = this.textContent.trim();
        });
    });

}; //selectFun end

//법률지식 내용 출력
function exe(idx) {
    elList.forEach(function (v) {
        v.classList.remove('active');
    })
    elList[idx].classList.add('active');


    let liThis = elList[idx].textContent;
    let titThis;

    $(infoData).find('items').each(function () {
        titThis = $(this).find('title').text()
        if (liThis == titThis) {
            printFun($(this));
        }

    });
}

//법률지식 내용 가져오기
function printFun(data) {

    let tag = '', title, smallword, info;

    title = data.find('title').html()
    smallword = data.find('smallword').html()
    info = data.find('info').html()


    tag = `<article class="word">
        <h3 class="h3">${title}</h3>
        <p class="split">${smallword}</p>
        <P class="string">${info}</P>
    </article>`;

    $('.explain >div').html(tag);

    //텍스트 500자 보여주기
    txt = $('.contains .string').text().trim();
    $('.contains .string').text(strFun(txt, 500));


}// printFun end


//더보기 버튼----------------------------------------------


function strFun(str, len) {

    let realStr = '';

    if (str.length > len) {
        realStr = str.substring(0, len) + '...';
    } else {
        realStr = str;
    }
    return realStr;
}

$('.explain .btn').on('click', function () {
    $(this).toggleClass('active');
    $('.contains .string').text(txt);

    if (!$(this).hasClass('active')) {
        $('.contains .string').text(strFun(txt, 500));
    }
});



//더보기 버튼 END----------------------------------------------





//QnA-----------------------------------------------------------
// 법률지식과 관련된 QnA 보여주기







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


//QnA END-----------------------------------------------------------