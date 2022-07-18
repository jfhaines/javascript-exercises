function underscoreReplace(text) {
    return text.replace(/[^a-zA-z]+/g, '_');
}

function cutOffEnds(text) {
    if (text.match(/^_/)) {
        text = text.slice(1);
    };
    
    if (text.match(/_$/)) {
        text = text.slice(0, text.length - 1);
    };

    return text;
}

function camelCaseToUnderscore(text) {
    if (text.match(/[a-zA-Z][^a-zA-z]+[a-zA-Z]/g)) {
        return text;
    } else if (!text[0].match(/[A-Z]/)) {
        return text.replace(/([a-z])([A-Z])([a-z])/g, (match, group1, group2, group3) => group1 + '_' + group2 + group3)
    } else {
        return text;
    }
}

const snakeCase = function(text) {
    return cutOffEnds(camelCaseToUnderscore(underscoreReplace(text))).toLowerCase();
};

// Do not edit below this line
module.exports = snakeCase;

/*

string replace non letter groups with underscore
replace capital letters with lowercase either side with same letters but with _ inserted
to lowercase
cut off ends



*/