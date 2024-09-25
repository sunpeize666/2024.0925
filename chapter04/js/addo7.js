// 매개 변수가 없는 기본 익명 함수
let hi1 = function() {
    return '안녕하세요';
}

// 매개 변수가 없는 화살표 함수
let hi2 = () => {return '안녕하세요.'; }

let hi3 = () => '안녕하세요';

document.write(`hi1 : ${hi1()}<br>`);
document.write(`hi2 : ${hi2()}<br>`);
document.write(`hi3 : ${hi3()}<br>`);

document.write(`<hr>`);

// 매개 변수가 1개인 함수
let hi4 = function(user) {
    document.write(`${user}님 안녕하세요.<br>`);
}

let hi5 = user => document.write(`${user}님 안녕하세요.<br>`);

hi4('김지연');
hi5('김지연');

// 매개 변수가 2개인 함수
let sum1 = function(a, b) {
    return a + b;
}

let sum2 = (a, b) => a * b;

document.write(`<hr>`);

// 두 수를 입력 받아 
num1 = parseInt(prompt('첫 번째 수 입력'));
num2 = parseInt(prompt('두 번째 수 입력'));

// sum1 함수 호출하여 출력
document.write(`${num1} + ${num2} = ${sum1(num1, num2)}<br>`);

// sum2 함수 호출하여 출력
document.write(`${num1} * ${num2} = ${sum2(num1, num2)}`);