const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position==='string' || position>this.links.length ||isNaN(position)  || !Number.isInteger(position)){
      this.links =[];
      throw new Error('You can\'t remove incorrect link!');
    }else {
      this.links.splice((position-1),1);
      return this;
    }
  },
  reverseChain() {
    this.links=this.links.reverse();
    return this;
  },
  finishChain() {
    let result =this.links.join('~~');
    this.links =[];
    return result;

  }
};

module.exports = {
  chainMaker
};
