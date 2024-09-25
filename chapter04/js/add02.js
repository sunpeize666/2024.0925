// 1~입력 받은 수까지 합계를 계산하는 함수.
// 계산 결과를 돌려주는 함수.
// 함수 선언.
function calcSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    document.write(`<h2>1부터 ${num}까지 합은 ${sum}입니다.</h2>`);
  }
  
  // 함수 호출.
  calcSum(10);   // 인수 값을 가지고 함수 호출.
  