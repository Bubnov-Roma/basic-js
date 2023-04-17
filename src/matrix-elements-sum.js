const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let c = i + 1; c < matrix.length; c++) {
          matrix[c][j] = 0;
        }
      }
    }
  }
  for (let column = 0; column < matrix.length; column++) {
    for (let row = 0; row < matrix[column].length; row++) {
      result += matrix[column][row];
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
