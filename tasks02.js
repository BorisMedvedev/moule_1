"use strict";

const generator2 = (n, m, count) => {
  let array = [];

  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * (m - n + 1) - n));
  }
  console.log(array);
  return array;
};

generator2(0, -50, 99);
