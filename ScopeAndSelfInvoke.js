// Self-invoking function example
(function() {
    console.log("This is a self-invoking function!");
})();

// Function scope example
function outerFunction() {
    var outerVariable = "I'm outside!";
    
    function innerFunction() {
        var innerVariable = "I'm inside!";
        console.log(outerVariable); // Can access outerVariable
        console.log(innerVariable); // Can access innerVariable
    }
    
    innerFunction();
    // console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined
}

outerFunction();