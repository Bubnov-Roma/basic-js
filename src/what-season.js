const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'

  const isDate = obj => Object.prototype.toString.call(obj) === '[object Date]'
  const isValidDate = date => {
    try {
      return isDate(date) && !isNaN(date) && typeof date.getMonth === 'function'
    } catch {
      throw new Error('Invalid date!')
    }
  }

  isValidDate(date)

  isDateDuckTyped = obj => typeof obj.getMonth === 'function'

  if (!isDateDuckTyped(date)) throw new Error('Invalid date!')

  let month = date.getMonth()

  switch (month) {
    case 2:
    case 3:
    case 4:
      console.log('spring')
      return 'spring'
      break
    case 5:
    case 6:
    case 7:
      console.log('summer')
      return 'summer'
      break
    case 8:
    case 9:
    case 10:
      console.log('autumn')
      return 'autumn'
      break
    case 11:
    case 12:
    case 1:
    case 0:
      console.log('winter')
      return 'winter'
      break
    default:
      return null
  }
}

module.exports = {
  getSeason
};
