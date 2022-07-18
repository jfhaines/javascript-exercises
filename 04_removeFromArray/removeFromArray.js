
const removeFromArray = function(unfilteredArray, ...removedItemsArray) {
    let filteredArray = [];
    firstLoop:
    for (let item of unfilteredArray) {
        for (let removedItem of removedItemsArray) {
            if (item === removedItem) {
                continue firstLoop
            }
        }
        filteredArray.push(item);

    };
    return filteredArray;
};


// Do not edit below this line
module.exports = removeFromArray;
