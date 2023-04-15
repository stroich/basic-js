const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {

  }
  calculateDepth(arr) {
    if ( arr.filter(el => Array.isArray(el)).length != 0 ){
      let newArr = [];
      arr.forEach(el=>{
        if (Array.isArray(el) && el.length!==0){
          el.forEach(ind=>{
            newArr.push(ind)
          })
        }
      });

      return 1 + this.calculateDepth(newArr);
    } else {
      return 1;
    }
  }
}

module.exports = {
  DepthCalculator
};
