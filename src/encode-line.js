const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result=[];
  let arr= str.split('');
  arr.forEach((el,ind)=>{
    if (result.length===0){
      result.push(el);
    }
    if (el===result[result.length-1]){
      if (typeof (result[result.length-2])==='number'){
        result[result.length-2]+=1;
        console.log(el,2)
      }else{
        result.pop();
        result.push(1);
        result.push(el);
        console.log(el,3)
      }
    }else{
      result.push(1);
      result.push(el);
      console.log(el,4)
    }
  })
  return result.filter(el=>(el !== 1)).join('');
}

module.exports = {
  encodeLine
};
