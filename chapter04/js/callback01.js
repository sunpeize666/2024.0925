const btn = document.querySelector("button");

function display() {
    alert("버튼을 클릭했습니다.");
}

btn.addEventListener("click", display); // display 뒤에 ()적지 않는다.