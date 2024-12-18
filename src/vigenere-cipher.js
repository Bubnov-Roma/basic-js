const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode
  }

  switcher(message, key, type) {
    let shift = 0
    let result = ''
    let i = 0

    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!")

    message = message.toLowerCase()
    key = key.toLowerCase()

    message.split('').map((e) => {
      if (type) {
        i >= key.length ? i = 0 : null
        if (e.charCodeAt() > 96 && e.charCodeAt() < 123) {
          shift = e.charCodeAt() + (key[i].charCodeAt() - 97)
          shift >= 123 ? shift = (shift - 123) + 97 : null
          result += String.fromCharCode(shift)
          i++
        } else {
          result += e
        }
      } else {
        i >= key.length ? i = 0 : null
        if (e.charCodeAt() > 96 && e.charCodeAt() < 123) {
          shift = e.charCodeAt() - (key[i].charCodeAt() - 97)
          shift < 97 ? shift = (shift + 123) - 97 : null
          result += String.fromCharCode(shift)
          i++
        } else {
          result += e
        }
      }
    })
    result = this.mode === false ?
      result.split('').reverse().join('').toUpperCase() :
      result.toUpperCase()
    return result
  }

  encrypt(message, key) {
    let type = true
    return this.switcher(message, key, type)
  }

  decrypt(message, key) {
    let type = false
    return this.switcher(message, key, type)
  }
}

module.exports = {
  VigenereCipheringMachine
};
