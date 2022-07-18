const reverseString = function(string) {
    string = string.split('')
    reverse = [];
    for (let char of string) {
        reverse.unshift(char);
    }
    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;