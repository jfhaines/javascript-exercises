function getNumbersBetween(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    };
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    let numberArray = [];
    let start;
    let end;

    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    };
    
    while (start <= end) {
        numberArray.push(start);
        start++
    }
    return numberArray;
}


const sumAll = function(num1, num2) {
    let numberArray = getNumbersBetween(num1, num2);

    if (numberArray === 'ERROR') return 'ERROR'

    total = 0;

    for (let num of numberArray) {
        total += num;
    }
    
    return total;
};



// Do not edit below this line
module.exports = sumAll;

