const fibonacci = function(num) {
    if (num < 1) return 'OOPS';
    let sequence = [];
    for (let i=0; i < num; i++) {
        if (i < 2) sequence.push(1);
        else sequence.push(sequence[i-1] + sequence[i-2])
    }
    return sequence[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;


/*
create empty array
for loop starting at 1

    if index - 2 < 0
        return 1
    else 
        push array[index-1] + array[index-2]


*/