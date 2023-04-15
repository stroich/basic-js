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

  let addition = '';
  let result =''
  if('addition' in options){
    if ('additionSeparator' in options){
      addition = String(options.addition)
      if('additionRepeatTimes' in options){
        addition = String(options.addition)+options.additionSeparator;
        addition= addition.repeat(options.additionRepeatTimes-1)+String(options.addition);
      }
    }else {
      addition = String(options.addition)
      if('additionRepeatTimes' in options){
        addition = String(options.addition)+'|';
        addition= addition.repeat(options.additionRepeatTimes-1)+String(options.addition);
      }
    }
  }
  console.log(addition)
  if('separator' in options){
    result = String(str)+String(addition);
    console.log(result)
    if('repeatTimes' in options){
      result =result+options.separator;
      result= result.repeat(options.repeatTimes-1)+String(str)+String(addition);
    }
  }else {
    result = String(str)+String(addition);
    if('repeatTimes' in options){
      result =String(str)+String(addition)+'+';
      result= result.repeat(options.repeatTimes-1)+String(str)+String(addition);
    }
  }
  return result;
}

module.exports = {
  repeater
};
