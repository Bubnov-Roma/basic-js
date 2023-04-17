const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const k = 0.693 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity === "string" || sampleActivity instanceof String) { // проверка что передаваемое значение является числом 
    if (sampleActivity > 0 && sampleActivity < 15.1) {  // проверка на актуальность числа
      let result = Math.log(MODERN_ACTIVITY / sampleActivity) / k; // основная формула
      return Math.ceil(result); // округление результата
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
