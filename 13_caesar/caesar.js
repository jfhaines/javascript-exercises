function shiftUnicode(code, shift) {
    let start;
    let end;
    if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
        start = 'a'.charCodeAt(0)
        end = 'z'.charCodeAt(0)
    } else if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
        start = 'A'.charCodeAt(0)
        end = 'Z'.charCodeAt(0)
    }

    let continueLoop = true;
    while (continueLoop) {
        if (code + shift > end) {
            let distanceToEnd = end - code;
            code = start;
            shift = shift - (distanceToEnd + 1);
        } else if (code + shift < start) {
            let distanceToStart = code - start;
            code = end;
            shift = shift + (distanceToStart + 1);
        } else {
            code = code + shift;
            continueLoop = false;
        };
    };
    return code;

};



const caesar = function(text, shift) {
    return text.replace(/[a-zA-Z]/g,
        (char) => {
            let currentUnicode = char.charCodeAt(0);
            let newUnicode = shiftUnicode(currentUnicode, shift);
            let newChar = String.fromCharCode(newUnicode);
            return newChar;
        });
};

// Do not edit below this line
module.exports = caesar;


/*

convert string to array
create encoded array
loop over array
    if char is a letter
        get unicode number
        convert unicode number + int to string
        push to encoded array
    else push encoded array


*/