// greeting()함수를 선언 한 후 콜백 함수로 사용.
function greeting() {
    document.write(`1. 안녕하세요<br>`);
}

setInterval(greeting, 2000);  // 콜백함수인 greeting에는 () 안 쓴다.


// 직접 함수를 선언하여 실행.
setInterval(() => {
    document.write(`2. 안녕하세요<br>`);
}, 2000);