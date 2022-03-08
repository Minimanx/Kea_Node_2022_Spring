
//hoisting - declarations are lifted to the top (functions fx)
greetings();

function greetings() {
    console.log("Hello")
}



//anonymous function (function without a name) after the equal sign
const greetingsInAVariable = function() {
    console.log("Hello anonymously")
}

greetingsInAVariable();

//arrow function
const greetingsArrowFunction = () => {
    console.log("Hello as an arrow function")
}

//whole line = "function signature".. callback function
function doingSomething(anyFunctionReference, name) {
    return anyFunctionReference(name);
}

//lambda function
const running = name => `${name} is running`;
const result = doingSomething(running, `Carl`);
console.log(result);

const drinking = name => `${name} is drinking`;
const result2 = doingSomething(drinking, `Carl`);
console.log(result2);

const climbing = mountainName => `I am climbing ${mountainName}`;
const result3 = doingSomething(climbing, `Mount Fuji`);
console.log(result3);


function doingSomethingNew(anyFunctionReferenceAgain, name, object) {
    anyFunctionReferenceAgain(name, object);
}

const drinkingMore = (name, object) => {
    console.log(`${name} is drinking ${object}`)
}

doingSomethingNew(drinkingMore, `Carl`, `soda`);

const result4 = doingSomething(name => name + " is studying", "Juan");
console.log(result4);