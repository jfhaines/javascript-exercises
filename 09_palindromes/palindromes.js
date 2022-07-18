const palindromes = function (text) {
    text = text.toLowerCase()
    let textArray = text.split('');
    textArray = textArray.filter(char => char.match(/[a-z]/i))
    text = textArray.join('');

    let reverseArray = [];
    for (let char of textArray) {
        reverseArray.unshift(char);
    }
    let reverse = reverseArray.join('');

    if (text === reverse) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
