const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  let arrs =[];
  let arr = String(n).split('');
  arr = arr.map(el=>+el);
  function addNumber(el){
    let currentArr = arr.map(el=>el);
    currentArr.splice(el,1)
    return +currentArr.join('');
  }
  arr.forEach((el,ind)=>{
    let number =addNumber(ind);
    arrs.push(addNumber(ind));
  })
  arrs.sort((a,b)=>a-b);
  return arrs[arrs.length-1];

}

module.exports = {
  deleteDigit
};
