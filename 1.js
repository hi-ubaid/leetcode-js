// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Any arguments could be passed to the function but it should still always return "Hello World".

//Solution:

var createHelloWorld = function() {
    
    return function(...args) {
        return console.log("Hello World");  //return the string and do not get confused with arguments passed
    }
};

const f = createHelloWorld();
f(); // "Hello World"