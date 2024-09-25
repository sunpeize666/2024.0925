/*
  함수에서 변수를 선언할 때 
  변수 이름 앞에 var를 붙이지 않으면 전역변수로 인식한다.
*/
var hi = "hello";  // 전역 변수.

function greeting() {
  hi = 'bye';  // 함수 안에서 사용되는 전역 변수
}

document.write(`${hi}<br>`);  // hello

greeting();
document.write(`${hi}`);  // bye
