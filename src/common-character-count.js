const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 =s1.split('');
  let arr2 =s2.split('');
  let result =0;
  function returnNumber(arr1,arr2){
    arr1.forEach((el,ind)=>{
      if (arr2.includes(el)){
        arr1.splice(ind,1);
        arr2.splice(arr2.indexOf(el),1);
        console.log(arr2,arr1)
        result++;
        returnNumber(arr1,arr2);
      } else {
        return result;
      }
    })
    return result;
  }
  returnNumber(arr1,arr2);
  return  result;
}

module.exports = {
  getCommonCharacterCount
};
