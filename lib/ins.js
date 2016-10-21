'use strict';

const product = function () {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
};

const max = function () {
  let result = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (result < arguments[i]){
      result = arguments[i];
    }
  }
  return result;
};

const arrayTimes2 = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    // for (let j = 0; i < array[i].length; i++) {
    //   result.push(array[i].map(array[j] * 2));
    //   }
    result[i] = array[i] * 2;
  }
    return result;
};


const addProperty = function (obj, property, value) {
  obj[property] = value;
};


const transform = function (value, predicate, mutator) {
  if (predicate(value)) {
    return mutator(value);
  }
  return value;
};

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
