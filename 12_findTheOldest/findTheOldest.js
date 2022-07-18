const findTheOldest = function(people) {
    return people.reduce((previousValue, currentValue) => {
        let lifespanPrevious = previousValue.yearOfBirth - (previousValue.yearOfDeath || new Date().getFullYear());
        let lifespanCurrent = currentValue.yearOfBirth - (currentValue.yearOfDeath || new Date().getFullYear());

        if (lifespanCurrent < lifespanPrevious) return currentValue;
        else return previousValue;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
