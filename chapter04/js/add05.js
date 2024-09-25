// 변수에 함수를 할당하여 사용. => 하나의 값처럼 사용.
// 익명 함수.   function sum(a,b) {}
let sum = function(a, b) {
    return a + b;
}

document.write(`함수 실행 결과 : ${sum(10,20)}`);