const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, a) => total + a, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, a) => product * a, 1);
};

const power = function(a, exp) {
  return a ** exp;
};

const factorial = function(a) {
  let res = 1;
  for(let i=a; i>1; i--) {
    res *= i;
  }
  return res;
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
