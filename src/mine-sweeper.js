const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let result = matrix.map(el => el.map(el => 0));

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      // near
      if (matrix[row] && matrix[row][column - 1]) {
        result[row][column] += 1;
      }
      if (matrix[row] && matrix[row][column + 1]) {
        result[row][column] += 1;
      }
      // up
      if (matrix[row - 1] && matrix[row - 1][column - 1]) {
        result[row][column] += 1;
      }
      if (matrix[row - 1] && matrix[row - 1][column]) {
        result[row][column] += 1;
      }
      if (matrix[row - 1] && matrix[row - 1][column + 1]) {
        result[row][column] += 1;
      }
      // down
      if (matrix[row + 1] && matrix[row + 1][column - 1]) {
        result[row][column] += 1;
      }
      if (matrix[row + 1] && matrix[row + 1][column]) {
        result[row][column] += 1;
      }
      if (matrix[row + 1] && matrix[row + 1][column + 1]) {
        result[row][column] += 1;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
