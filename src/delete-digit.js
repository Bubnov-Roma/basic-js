const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = [];
  let min = 0;

  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < arr.length; i++) {
    let item = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (j !== i) {
        item = item * 10 + arr[j];
      }
    }
    min = Math.max(item, min);
  }

  return min;
}

module.exports = {
  deleteDigit
};
