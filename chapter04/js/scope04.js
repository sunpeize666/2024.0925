var hi = "hello"; // 전역 변수.

function greeting() {
  var hi = "bye";   // 변수 앞에 var가 있어서 지역변수이다.
}

document.write(`${hi}<br>`); // hello

greeting();
document.write(`${hi}`); // hello
