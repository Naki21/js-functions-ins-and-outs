'use strict';

const createArray = function (length, defeultValue) {
let result = [];

for (let i = 0; i < length; i++) {
  result[i] = defeultValue;
}

return result;
};

const arrayTransform = function (array, predicate, mutator) {
let result = [];

  for (let i = 0; i < array.length; i++) {
  if (predicate(array[i])) {
    result[i] = mutator(array[i]);
  } else {
    result[i] = array[i];
  }
}
return result;
};

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  return {
    givenName,
    surname,
    bornOn,
    height,
    weight,
    eyeColor
  };
};

const memoFactory = function () {

};

const counterFactory = function () {
  let count = 0;

  return function () {
    return count++;
  };

};


module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
