"use strict";

const isPrime = (x) => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

// console.log(isPrime(5));
