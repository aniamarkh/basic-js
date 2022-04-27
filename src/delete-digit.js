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
function deleteDigit(n) {
  let maxNum = 0;
  let arr = n.toString().split('')
  for (let i = 0; i < arr.length; i++) {
    let newNum = Number(arr.slice(0, i).concat(arr.slice(i + 1)).join(''));
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }
  return maxNum;
}


module.exports = {
  deleteDigit
};
