// 1~10까지 합계를 계산하는 함수.
// 함수 선언.
function calcSum() {
    let sum = 0;
    for(let i = 1; i <= 10; i++) {
        sum += i;
    }
    document.write(`<h2>1부터 10까지 합은 ${sum}입니다.</h2>`);
}

// 함수 호출.
calcSum();