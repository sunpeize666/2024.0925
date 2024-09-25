// 함수 선언. - 결과 돌려주는 함수.
function multiple(n1, n2) {
    return n1 * n2;
}

// 함수 호출.
let num1 = parseInt(prompt("첫 번째 수 입력"));
let num2 = parseInt(prompt("두 번째 수 입력"));

document.write(`<h2>${num1} x ${num2} = ${multiple(num1, num2)}</h2>`);