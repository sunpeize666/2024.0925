let count = 0;

let timer = setInterval(() => {
    document.write(`안녕하세요.<br>`);
    count++;

    if(count === 5) {
        clearInterval(timer);
    }
}, 2000);

