function sum(a, b) {
    var result = a + b;  // 지역 변수(지역 스코프)
}

sum(10, 20);
document.write(`${result}`);