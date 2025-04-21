/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = []; // Step 1: new array
    for (let i = 0; i < arr.length; i++) { // Step 2: loop
        result.push(fn(arr[i], i)); // Step 3 & 4: apply fn and push
    }
    return result;
};
