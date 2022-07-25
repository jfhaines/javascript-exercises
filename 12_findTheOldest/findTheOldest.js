const findTheOldest = function(people) {
    return people.reduce((previousValue, currentValue) => {
        let lifespanPrevious =  (previousValue.yearOfDeath || new Date().getFullYear()) - previousValue.yearOfBirth;
        let lifespanCurrent = (currentValue.yearOfDeath || new Date().getFullYear()) - currentValue.yearOfBirth;

        if (lifespanCurrent > lifespanPrevious) return currentValue;
        else return previousValue;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
