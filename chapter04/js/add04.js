// 함수 선언.
function multi(n1, n2=50, n3=40) {
    return n1 * n2 + n3;
}

document.write(`<h2> 결과 : ${multi(10,20,30)}</h2>`);
document.write(`<h2> 결과 : ${multi(10,20)}</h2>`);
document.write(`<h2> 결과 : ${multi(10)}</h2>`);