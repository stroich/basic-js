const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  if (Array.isArray(arr)===false){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }else {
    let controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let result = [];
    let control = [];
    arr.find((el, ind) => {
      if (typeof (el) === 'string') {
        control.push(el);
        control.push(ind);
      }
    });
    switch (control[0]) {
      case controls[0]:
        for (let i = 0; i < arr.length; i++) {
          console.log(i)
          if (i !== control[1] && i !== (control[1] + 1)) {
            result.push(arr[i]);
          }
        }
        break;
      case controls[1]:
        for (let i = 0; i < arr.length; i++) {
          if (i !== control[1] && i !== (control[1] - 1)) {
            result.push(arr[i]);
          }
        }
        break;
      case controls[2]:
        for (let i = 0; i < arr.length; i++) {
          if (i === (control[1] + 1)) {
            result.push(arr[i]);
            result.push(arr[i]);
          } else if (i !== control[1]) {
            result.push(arr[i]);
          }
        }
        break;
      case controls[3]:
        for (let i = 0; i < arr.length; i++) {
          if (i === (control[1] - 1)) {
            result.push(arr[i]);
            result.push(arr[i]);
          } else if (i !== control[1]) {
            result.push(arr[i]);
          }
        }
        break;
      default:
        for (let i = 0; i < arr.length; i++) {
          result.push(arr[i]);
        }
        break;
    }
    return result;
  }
}

module.exports = {
  transform
};
