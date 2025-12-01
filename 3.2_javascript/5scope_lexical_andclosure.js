// In JavaScript, scope is the context that determines where variables can be accessed, helping write cleaner and error-free code.




// Declaring a global variable
var x = 10;
​
function func() {
    
    // Declaring a local variable
    var y = 20;
​
    // Accessing Local and Global
    // variables
    console.log(x,",", y);
}
​
func();

// Output
// TechCorp , Alice
// There are mainly different types of scopes of a variable. var us understand these one by one.

// 1. Global and Local Scope
// The image below shows Global and Local Scope in JavaScript to help understand their accessibility.

// global
// Global Scope
// A global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.




// Global Variable accessed from within a function 
const x = 10;
​
function fun1() {
    console.log(x);
}
​
fun1();

// Output
// GFG
// Explanation: In the program, the variables outside the function and now we can access those variables from anywhere in the JavaScript program.

// Function(Local) Scope
// A local variable is a variable declared inside a function, making it accessible only within that function. It cannot be used outside the function.

// Functions and Objects are also variables in JavaScript.



function fun2(){
    
    // This variable is local to fun2() and 
    // cannot be accessed outuside this function
    var x = 10;
    console.log(x);
}
​
fun2();

// Output
// 10
// Explanation: In the Program, the code defines a function fun2 with a local variable x, which is accessible only inside the function, and prints its value when the function is called.

// Before ES6 (Released in 2015), variables were declared only with var, which is function-scoped (accessible within the function) and global Scoped (Accessible everywhere) and prone to issues like hoisting and global pollution.
// var and const were introduced with ES6. Variables declared with var and const are either block scoped or global-scooped.
// 2. Block and Lexical Scope
// The image below shows Block and Lexical Scope in JavaScript to help understand their accessibility.

// block
// Block Scope
// In JavaScript, block scope refers to variables declared with var or const inside a { } block. These variables are accessible only within that block and not outside it.

// Variables declared with var do not have block scope. A var variable declared inside a function is accessible throughout that entire function, regardless of any blocks (like if statements or for loops) within the function.  If var is declared used outside of any function, it creates a global variable.




{
    
    // Var can Accessible inside & outside the block scope 
    var x = 10;
    
    // var , const Accessible only inside the block scope
    const y = 20;
    var z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}
​
console.log(x);

// Output
// 10
// 20
// 30
// 10
// Explanation: In the Program, we have successfully accessed the variable with the var keyword because var does not have a block scope.

// Lexical Scope
// The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.




function func1() {
    const x = 10;
​
    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }
​
    func2();
}
​
func1();
// Output:

// Hello Geeks
// Explanation: This code shows lexical scope where innerFunc accesses outerVar from outerFunc and prints "Hello Geeks".

// Modular Scope:
// Introduced in ES6, ES Modules are the standard way to organize JavaScript code into reusable and maintainable chunks. Each module has its own scope, and anything declared within a module is private by default unless explicitly exported.
// Lexical Scope in JavaScript
// Last Updated : 21 Aug, 2024
// Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program's execution.

// What is Lexical Scope?
// Lexical scope defines the accessibility of variables and functions depending on their location in the source code. Variables and functions have different levels of scope:

// Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
// Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
// Nested Scope: Inner functions have access to variables in their parent functions.
// Block Scope: Variables defined with var and const are limited to the block they are declared in, like loops or conditionals.
// In this article, we'll explore lexical scope in JavaScript with different code examples provided to illustrate how it works.

// Global Scope
// When a variable is defined outside of any functions or blocks, it has a global scope. This means that it can be accessed from anywhere within the program, including within functions.

// Example: In the example above, the variable name is defined outside of any functions or blocks, making it a global variable. The function sayHello is then able to access the name variable and output "Hello John" to the console.




var name = "John"; // Global variable
​
function sayHello() {
      console.log("Hello " + name);
}
​
sayHello(); // Output: "Hello John"

// Output
// Hello John
// Local Scope
// When a variable is defined within a function or block, it has a local scope. This means that it can only be accessed within that function or block.

// Example: In this example, name is a local variable within sayHello. It’s accessible inside the function, but attempting to access it outside results in a "ReferenceError.


function sayHello() {
      var name = "John"; // Local variable
  
      console.log("Hello " + name);
}

sayHello(); // Output: "Hello John"

console.log(name); 
// Output: Uncaught ReferenceError: name is not defined
// Output:


 
// Nested Scope
// When a function is defined within another function, it has access to variables defined in the parent function. This is known as nested scope.

// Example: In the example above, the function inner is defined within the outer function. The inner function is able to access the name variable defined in the parent outer function, outputting "Hello John" to the console.




function outer() {
    var name = "John"; // Outer function variable
​
    function inner() {
        console.log("Hello " + name);
    }
​
    inner(); // Output: "Hello John"
}
​
outer();

// Output
// Hello John
// Block Scope
// ES6 introduced the var and const keywords, which allow variables to have block scope. This means that variables defined within a block of code (such as within an if statement or a for loop) can only be accessed within that block.

// Example: In this example, message is a block-scoped variable. It's accessible within the if block, but accessing it outside results in a "ReferenceError.


function sayHello() {
    var name = "John"; // Function variable

    if (true) {
        var message = "Hello"; // Block variable
        console.log(message + " " + name); 
        // Output: "Hello John"
    }

    console.log(message); 
    // Output: Uncaught ReferenceError: 
    // message is not defined
}

sayHello();

// A closure is a function that retains access to its outer function's variables, even after the outer function has finished executing. It "remembers" the environment in which it was created, allowing it to access variables outside its immediate scope.

// Now let's understand this with the help of example




function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();

// Output
// I'm in the outer scope!
// Updated
// In this example

// The function inner() forms a closure by retaining access to outerVar, which is a variable in the scope of outer().
// Even though outer() has completed execution, inner() still has access to outerVar due to the closure.
// Lexical Scoping
// Closures are rely on lexical scoping, meaning that a function’s scope is determined by where the function is defined, not where it is executed. This allows inner functions to access variables from their outer function.

// Private Variables
// Closures allow a function to keep variables hidden and only accessible within that function. This is often used when creating modules to protect certain data from being accessed or modified by other parts of the program.




function counter() {
    
    // Private variable
    let count = 0; 
    
    return function () {
        
        // Access and modify the private variable
        count++;
        return count;
    };
}
​
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

// Output
// 1
// 2
// 3
// Closures and IIFE
// IIFEs (Immediately Invoked Function Expressions) use closures to hide data inside the function. This helps keep certain information private and prevents it from being accessed outside the function, allowing you to create self-contained modules.




const counter = (function () {
    let count = 0;
​
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();
​
counter.increment(); 
counter.increment(); 
counter.reset();

// Output
// 1
// 2
// Counter reset
// Closure and setTimeout
// Closures are helpful in asynchronous programming because they allow you to keep track of data even after a function has finished running. This is especially useful when you're working with things like timers or server requests, where the function might not run immediately.




function createTimers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Timer ${i}`);
        }, i * 1000);
    }
}
createTimers();
// Output

// Timer 1
// Timer 2
// Timer 3
// Closures with this keyword
// Closures can be confusing when using the this keyword because this depends on how and where a function is called, not where it is defined. So, inside a closure, this might not refer to what you expect based on the function's location.




function Person(name) {
    this.name = name;
    
    this.sayName = function () {
        console.log(this.name);
    };
​
    setTimeout(function () {
        console.log(this.name); 
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); 
    // Fix with bind
}
​
// const G = new Person("GFG");
// G.sayName();
// Function Currying in JavaScript (Closure Example)
// Function currying is a technique to transform a function that takes multiple arguments into a series of functions that take one argument at a time. Currying relies on closures because each of the intermediate functions has access to the arguments passed previously.

// In simple words, currying allows you to create specialized functions by partially applying arguments, which are remembered through closures.




// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 
​
// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    };
}
​
const addTwo = add(2);  // First function call with 2
console.log(addTwo(3));  
console.log(addTwo(4));

// Output
// 5
// 6
// Common Pitfalls
// Memory Leaks: Excessive use of closures may retain unnecessary references to variables, causing memory issues.
// Performance Overhead: Overusing closures might lead to larger memory usage due to retained scopes.
