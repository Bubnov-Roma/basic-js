const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let counter = 1
  let arrMap = new Map()
  for (let i = 0; i < domains.length; i++) {
    let newArr = domains[i].split('.').reverse()
    let str = ''
    for (let j = 0; j < newArr.length; j++) {
      str += '.' + newArr[j]
      if (!arrMap.has(str)) {
        arrMap.set(str, counter)
      } else {
        counter = arrMap.get(str) + 1
        arrMap.set(str, counter)
      }
      counter = 1
    }
  }
  return Object.fromEntries(arrMap)
}

module.exports = {
  getDNSStats
};
