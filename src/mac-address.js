const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result =n.split('-');
  if (result.length!==6){
    return  false;
  }else {
    return result.reduce((accum, el)=>{
      let alphabet ='GHIJKLMNOPQRSTUVWXYZ';
      if (alphabet.includes(el[0]) || alphabet.includes(el[0])){
        accum=false;
      }
      return accum;
    }, true)
  }
}
module.exports = {
  isMAC48Address
};
