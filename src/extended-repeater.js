const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = new String(str); // проверяем ччто строка является строкой
  options.addition = new String(options.addition) // проверяем что addition является строкой

  let result = []; // итоговая строка
  let addition = []; // итоговый addition без разделителя
  let additionResult = ''; // итоговый addition 
  !(options.separator) ? options.separator = '+' : options.separator; // если нет разделителя для строки делаем его == '+'
  !(options.additionSeparator) ? options.additionSeparator = '|' : options.additionSeparator; // если нет разделителя для addition делаем его == '|'

  if (options.repeatTimes) { // если есть повторения строки 
    if (options.additionRepeatTimes != undefined) { // если есть повторения addition
      for (let i = 0; i < options.additionRepeatTimes; i++) { // колличество повторов addition 
        addition.push(options.addition); // здесь формируется один полный addition 
      }
      additionResult = addition.join(options.additionSeparator); // addition разбивается additionSeparator и получается итоговый additionResult
    } else { // если нет повторений addition проверяем 
      options.addition == 'undefined' ? additionResult = '' : additionResult = options.addition; // если не существует самого addition присваиваем additionResult пустую строку в противном случае присваевоем addition = additionResult ( без повторов )
    }
    for (let i = 0; i < options.repeatTimes; i++) { // количество повторов основной строки 
      result.push(str + additionResult); // к каждой строке добавляется итоговый additionResult
    }
    return result.join(options.separator); //результат если есть repeatTimes (повторы строки)
  } else {
    return str + (options.addition); // результат если нет repeatTimes (повторов строки)
  }
}

module.exports = {
  repeater
};
