/**
    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.

    Example 1:

    Input: init = 5, calls = ["increment","reset","decrement"]
    Output: [6,5,4]
    Explanation:
    const counter = createCounter(5);
    counter.increment(); // 6
    counter.reset(); // 5
    counter.decrement(); // 4
*/

//Solution
var createCounter = function(init) {
    var count = init;                   //store the initial value in a var so it can be reset without affecting result
    var increment = function() {
        return console.log(++init);                  //increment the last init value
    }
    var decrement = function() {
        return console.log(--init);                  //decrement the last init value
    }
    var reset = function() {
        init = count;                   //sets init value to its initial value which was stored in count var
        return console.log(init);                     //return the initial value
    }
    return {
        increment,
        decrement,
        reset
    }
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4