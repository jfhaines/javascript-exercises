const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numArray) {
  let total = 0;
	for (let num of numArray) {
    total += num
  }
  return total;
};

const multiply = function(numArray) {
  let total = 1;
  for (let num of numArray) {
    total = total * num;
  }
  return total;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) return 1;

  let total = 1;

  for (let i=1; i <= num; i++) {
    total = total * i;
  };

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
