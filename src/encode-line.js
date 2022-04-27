const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;

  for (let char = 0; char < str.length; char++) {
    if (str[char] === str[char + 1]) {
      count += 1;
    } else {
      result += count + str[char];
      count = 1;
    }
  }
  result = result.replace(/1/g, '');
  return result
}

module.exports = {
  encodeLine
};
