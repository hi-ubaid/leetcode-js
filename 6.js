/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = []; // Step 1
    for (let i = 0; i < arr.length; i++) { // Step 2
        if (fn(arr[i], i)) { // Step 3 & 4
            result.push(arr[i]);
        }
    }
    return result; // Step 5
};
