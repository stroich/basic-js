const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object={};
  function addKey(el){
    let element =el.split('.').reverse();
    element.reduce((accum, item,index)=>{
      accum+=`.${item}`;
      if(accum in object){
        object[accum]+=1;
      }else{
        object[accum]=1;
      }
      return accum;
    },'')
  }
  domains.forEach(el=>{
    addKey(el)
  })
  return object;
}

module.exports = {
  getDNSStats
};
