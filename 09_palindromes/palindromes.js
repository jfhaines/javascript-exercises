const palindromes = function (text) {
    text = text.toLowerCase().replace(/[^a-z]/g, '');
    let textReverse = text.split('').reverse().join('');
    return text === textReverse;
};

// Do not edit below this line
module.exports = palindromes;
