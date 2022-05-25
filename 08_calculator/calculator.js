const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(num => sum += num);
  return sum;
};

const multiply = function(array) {
  return array.reduce((prev, current) => prev *= current, 1);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  if (num === 0) return 1;
	let count = num - 1;
  while (count > 0) {
    num *= count;
    count--;
  }
  return num;
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
