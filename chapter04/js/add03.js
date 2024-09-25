// 1~입력 받은 수까지 합계를 계산하는 함수.
// 계산 결과를 돌려주는 함수.
// 함수 선언.
function calcSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;  // 함수를 호출한 곳으로 sum 값을 돌려준다.
  }
  
  // 사용자로부터 값 입력 받기.
  let num = parseInt(prompt("정수 입력하시오."));
  
  // 함수 호출하여 돌려 받은 값을 출력.
  document.write(`<h2>1부터 ${num}까지 합은 ${calcSum(num)}입니다.</h2>`);
  