const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let copyArr = arr
  let result = []
  if (Array.isArray(arr)) {
    copyArr.map((e, i) => {
      if (e === '--double-next') {
        if (arr[++i] === undefined) return null
        result.push(arr[i])
      } else if (e === `--double-prev`) {
        if (arr[--i] === undefined) return null
        result.push(arr[i])
      } else if (e === '--discard-prev') {
        result.pop()
      } else if (e === '--discard-next') {
        copyArr.splice(i, 2)
      } else {
        result.push(e)
      }
    })
    return result
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
