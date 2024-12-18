const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return chain.length
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    try {
      if (typeof position === 'string' || position > this.chain.length || position <= 0) {
        this.chain = []
        throw ''
      } else {
        this.chain.splice(position - 1, 1)
      }
    } catch (err) {
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },

  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },

  finishChain() {
    const result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
