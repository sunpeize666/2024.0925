function displayFavor(first, ...favs) {
    let str1 = `가장 좋아하는 과일은 "${first}"이군요.<br>`;
    let str2 = `나머지 과일은 "${favs}"이군요.`;

    return str1 + str2;
}

document.write(displayFavor("사과","포도", "수박", "망고"));