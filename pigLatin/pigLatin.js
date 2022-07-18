function pigLatin(string) {
    let wordArray = string.split(' ');
    let wordSplitArray = []
    for (let word of wordArray) {
        let chars = word.split('')
        wordSplitArray.push(chars)
    };
    
    let output = [];

    for (let word of wordSplitArray) {
        let pigLatinEncoded = [];
        let consonantBegining = [];
        let vowelEncountered = false;

        for (let i=0; i < word.length; i++) {
            if (word[i].match(/[aeiou]/)) {
                if (word[i] === 'u' && word[i-1] === 'q') {
                    consonantBegining.push(word[i]);
                    continue;
                };
                vowelEncountered = true;
                pigLatinEncoded.push(word[i])
            } else if (word[i].match(/[bcdfghjklmnpqrstvwxy]/)) {
                if (vowelEncountered === true) pigLatinEncoded.push(word[i]);
                else consonantBegining.push(word[i]);
            } else {
                return 'ERROR';
            };
        }
        output.push(pigLatinEncoded.concat(consonantBegining).join('') + 'ay')
    };

    return output.join(' ');
};
  
// Do not edit below this line
module.exports = pigLatin;

