function showData(name, age) {
    alert(`안녕하세요. ${name}님은 나이가 ${age}살 이군요.`);
}

function getData(callback) {  // 함수안에 함수를 매개 변수로 사용
    let userName = prompt("이름을 입력하세요.");
    let userAge = prompt("나이를 입력하세요.");
    callback(userName, userAge);
}

getData(showData);  // 함수를 담아서 호출.