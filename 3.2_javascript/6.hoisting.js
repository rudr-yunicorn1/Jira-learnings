// Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, var, const, or function expressions.

// hoisting_in_javascript_2
// Javascript Hoisting


// Hoisting applies to variable and function declarations.
// Initializations are not hoisted; they are only declarations.
// 'var' variables are hoisted with undefined, while 'var' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.
// Before going to learn more about Hoisting, it's important first to understand the Temporal Dead Zone

// Temporal Dead Zone (TDZ)
// The Temporal Dead Zone (TDZ) is a critical concept in JavaScript hoisting. It refers to the period between the entering of a scope (such as a function or block) and the actual initialization of a variable declared with var or const. During this time, any reference to the variable before its initialization will throw a ReferenceError.

// How does the TDZ Work?

// Variables declared with var and const are hoisted to the top of their scope, but they are not initialized until their declaration line is reached.
// Any attempt to access these variables before their declaration will result in an error.
// The TDZ exists only for variables declared using var and const. Variables declared with var do not have this issue, as they are hoisted and initialized to undefined.



hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};
// Output

// output
// output


// Note: The variable hello is hoisted, but it is not initialized until the assignment line is reached since it holds a function expression. Thus, calling hello() before its initialization throws a TypeError.

// 1. Variable Hoisting with var
// When you use var to declare a variable, the declaration is hoisted to the top, but its value is not assigned until the code execution reaches the variable’s initialization. This results in the variable being assigned undefined during the hoisting phase.




console.log(a); // undefined
var a = 5;
Output

// output
// output


// Note: The declaration var a is hoisted to the top, but a is initialized with undefined. Hence, logging results in undefined.

// output
// output
// JavaScript's hoisting behavior with the var keyword, where the variable declaration (var b;) is moved to the top of its scope during the compilation phase, but its assignment (b = 2;) stays in place. As a result, the variable b is known to the interpreter from the beginning but is initially undefined until the assignment is executed. In the shown code, b is declared at the top (due to hoisting), then assigned 2, and finally displayed using alert, resulting in the output: b = 2.

// Note: var hoisting lifts declarations, not initializations.

// 2. Variable Hoisting with var and const
// Unlike var, var and const are also hoisted, but they remain in a Temporal Dead Zone (TDZ) from the start of the block until their declaration is encountered. Accessing them before their declaration will throw a ReferenceError.


console.log(b); // ReferenceError: Cannot access 'b' before initialization
var b = 10;
Output

// output
// output
// Note: The variable is hoisted, but it’s in the Temporal Dead Zone (TDZ) until the declaration line is executed.

// 3. Function Declaration Hoisting
// Function declarations are hoisted with both their name and the function body. This means the function can be called before its definition in the code.




greet(); // "Hello, Mahima!"
function greet() {
    console.log("Hello, Mahima!");
}
// ouput
// output




// Note: The function declaration is hoisted, and the entire function definition is available before its position in the code.

// 4. Function Expression Hoisting
// Function expressions are treated like variable declarations. The variable itself is hoisted, but the function expression is not assigned until the line of execution. This means calling the function before its assignment will result in an error.


hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};
Output

output
output


// Note:The variable hello is hoisted, but since it's a function expression, it’s not initialized until the line is executed.

// 5. Hoisting with var and const in Functions
// Variables declared with var and const inside a function are hoisted to the top of the function's scope, but they remain in the TDZ. This prevents access to them before they are initialized.


function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    var x = 50;
}
test();
Output

output
output


// Note: The variable x is hoisted inside the function but cannot be accessed until its declaration line due to the TDZ.

// 6. Hoisting with Classes
// Classes are hoisted, but they cannot be accessed before they are declared, resulting in a ReferenceError.


const obj = new MyClass(); // ReferenceError
class MyClass {
    constructor() {
        this.name = "Mahima Bhardwaj";
    }
}
Output:

output
ouput


// Note: Although the class MyClass is hoisted, it cannot be accessed before its declaration due to the TDZ, which is why the code throws a ReferenceError.

// 7. Re-declaring Variables with var
// With var, you can redeclare a variable within the same scope. This is a unique behavior compared to var and const.




var a = 10;
var a = 20; // No error
console.log(a); // 20
// Output

// output
// output




// Note: With var, the second declaration overwrites the first one without throwing an error.

// 8. Accessing Variables Declared Later in Loops
// When using var in loops, the loop variable is hoisted to the function or global scope, which can cause unexpected behavior. If you use var, the variable is block-scoped and behaves as expected.




for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}
// Output

// output
// output
// Note: The var i is hoisted, and all setTimeout functions share the same i reference, which results in the value 3 after the loop finishes.

// 9. Using Hoisted Functions with Parameters
// Functions can be hoisted with their parameters, but any parameters passed to the function are still determined by the invocation, not by the hoisting.




test(10); // 10
function test(num) {
    console.log(num);
}
// Output

// output
// output
//  Note : The entire function, including its parameters, is hoisted and available for use before the function's declaration in the code.

// 10. Hoisting in Nested Functions
// Hoisting works within nested functions as well. Variables declared with var inside a function are hoisted to the top of that function scope.




function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();
function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();
Output

//diference between var var const

// Difference between var, var and const keywords in JavaScript
// Last Updated : 28 Jul, 2025
// JavaScript provides three ways to declare variables: var, var, and const, but they differ in scope, hoisting behaviour, and re-assignment rules.

// var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
// var: Declares variables with block scope, allowing updates but not re-declaration within the same block.
// const: Declares block-scoped variables that cannot be reassigned after their initial assignment.
// Differences between var, var, and const
// Here is the difference between var, var, const:

// var	var	const
// The scope of a var variable is functional or global scope.	The scope of avar variable is block scope.	The scope of a const variable is block scope.
// It can be updated and re-declared in the same scope.	It can be updated but cannot be re-declared in the same scope.	It can neither be updated or re-declared in any scope.
// It can be declared without initialization.	It can be declared without initialization.	It cannot be declared without initialization.
// It can be accessed without initialization as its default value is "undefined".	It cannot be accessed without initialization otherwise it will give 'referenceError'.	It cannot be accessed without initialization, as it cannot be declared without initialization.
// These variables are hoisted.	These variables are hoisted but stay in the temporal dead zone untill the initialization.	These variables are hoisted but stays in the temporal dead zone until the initialization.
// 1. Declaring Variables with var
// var is the original keyword for declaring variables in JavaScript. It is function-scoped or globally scoped, depending on where it's declared.




function e() {
    var n = "Janardhan"; 
    console.log(n); 
}
e();

// Output
// Janardhan
// The function e declares a variable n with the value "Janardhan" and logs it to the console.
// When the function e() is called, it outputs "Janardhan" to the console.
// 2. Block Scope with var
// Introduced in ES6, var provides block-level scoping. This means the variable is only accessible within the block (like loops or conditionals) where it is declared.




if (true) {
    var age = 30; 
    console.log(age); 
}
console.log(age)
// Output

// Screenshot-2025-02-17-121534
// Block Scope with var
// Block Scope: The variable age is declared with var inside the if block, so it is only accessible within that block and cannot be accessed outside of it.
// Reference Error: The second console.log(age) will throw a Reference Error because age is not defined in the outer scope.
// 3. Immutability with const
// const is used to declare variables that should not be reassigned after their initial assignment. This keyword is also block-scoped like var.




const country = "USA";  
console.log(country);

// Output
// USA
// The variable country is declared with const, meaning its value cannot be reassigned after initialization.
// The value of country (which is "USA") is printed to the console.
// 4. Hoisting Behavior of var, var, and const
// Hoisting is a JavaScript behavior where variable declarations are moved to the top of their containing scope. However, the way hoisting works differs for var, var, and const.

// Hoisting with var: The variable x is hoisted but only initialized after the console.log(x) call. It prints undefined because it is declared but not assigned a value yet.



console.log(x);
var x =5;

// Output
// undefined
// Hoisting with var: The code logs x before it is declared with var, causing a Reference Error. This happens because var variables are hoisted but not initialized, so they remain in the TDZ until the declaration is executed.



console.log(x)
var x=10
// Output

// Screenshot-2025-02-17-122145
// no Hoisting with var
// Hoisting with const: The variable x is declared with const, which is block-scoped and not hoisted. When console.log(x) is called before the declaration, it throws a Reference Error due to being in the Temporal Dead Zone (TDZ).



console.log(x)
const x=10
// Output

// Screenshot-2025-02-17-122629
// no Hoisting with const
// 5. Re-declaring Variables with var, var, and const
// declaring variables with var: The variable name is declared twice using var, which allows re-declaration in the same scope. The final console.log(name) prints "Tanmay" as it overwrites the previous value.



var name = "Pranjal";
var name = "Tanmay";
console.log(name);

// Output
// Tanmay
// declaring variables with var: The variable name is declared with var, which allows reassignment but not re-declaration. The final console.log(name) prints "Tanmay" after the reassignment.



var name='Pranjal'
name='Tanmay'
console.log(name)

// Output
// Tanmay
// declaring variables with const: The variable city is declared with const, which does not allow reassignment. The code will throw a Type Error when trying to reassign "Los Angeles" to city.



const city = "New York";
city = "Los Angeles";
console.log(city)
Output

// Screenshot-2025-02-17-123330
// declaring variables with const
// 6. Block-level Scope in Loops with var
// When using var in a loop, each iteration of the loop creates a new instance of the variable. This is different from var, which shares the same variable across all iterations.




for (var i = 0; i < 3; i++) {
    console.log(i); 
}
​
console.log(i);
// Output

// Screenshot-2025-02-17-123552
// Block-level Scope in Loops with var
// var creates a variable i that is only accessible within the loop block.
// Trying to access i outside the loop causes an error since it’s not available outside the block where it was declared.
// 7. Constant Arrays and Objects with const
// Arrays with const in JavaScript: The const declaration makes the reference to the numbers array constant, but its contents can still be modified. The code will print [1, 2, 3, 4] before throwing a TypeError when trying to reassign the array.



const numbers = [1, 2, 3];
numers.push(4);  
console.log(a);  
numbers = [5, 6];
// Output

// Screenshot-2025-02-17-123900
// Arrays with const in JavaScript
// Objects with const in JavaScript: The const declaration makes the reference to the person object constant, but its properties can be modified. The code will print { name: "Pranjal", age: 31 } before throwing a Type Error when trying to reassign the object.



const person = { name: "Pranjal", age: 30 };
person.age = 31;  
console.log(person); 
person = { name: "Nanda" };
// Output

// Screenshot-2025-02-17-124104
// Objects with const in JavaScript
// Interesting Facts About var, var and const
// var: Block-scoped and can be reassigned.
// var: Function-scoped and can be reassigned.
// const: Block-scoped and cannot be reassigned.
// var vs var: var is safer because it's block-scoped, unlike var.
// const: Used for values that shouldn’t change, but objects/arrays inside can still change.
// When to Use var and const
// var can be tricky because its scope is either global or within a function, which can lead to bugs. To avoid these issues:

// Use var when you know a variable's value might change later in your code.
// Use const for variables that should never change once you set them.
// Using var and const makes your code easier to understand and helps prevent errors caused by unexpected variable changes.
