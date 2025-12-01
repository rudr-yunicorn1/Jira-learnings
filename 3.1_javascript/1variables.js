// here iam going to learn about the java script data types and variables 

// word vs keyword 
// something which does not contain any vaue in java script than it is =word 
// is  a character or something have a meaning is known as =keyword
// varaibles and constants 
// the character we use to store some data in code is know as variable 
// varaiables are thoes which are mutable and can be assigned differnt values 
// constants are also used to store data but there value can not be changed 

var data=10  // here we are difinig data variable and the data is 10 
const dataconst=20 // here the dataconst also holding some data but the data is imutable 

// data types 
//1.1 primitive data types 
// 1.1.1 string Represents textual data. Enclosed in single quotes ('), double quotes ("), or backticks (\`\` for template literals).
    var name = "John Doe";
    var message = `Hello, ${name}!`;
// 1.1.2  number Represents both integers and floating-point numbers.
    var age = 30;
    var price = 19.99;
// 1.1.3  BigInt  Represents integers with arbitrary precision, useful for very large numbers that exceed the safe integer limit of Number. Appended with n.
    var bigNumber = 9007199254740991n;
// 1.1.4 Boolean: Represents logical entities, with only two possible values: true or false
    var isActive = true;
    var hasPermission = false;
// 1.1.5 Undefined: Represents a variable that has been declared but not yet assigned a value. 
    var unassignedVariable; // value is undefined
// 1.1.6 Null: Represents the intentional absence of any object value. It is a primitive value, although typeof null returns "object". 
    var emptyValue = null;
// 1.1.7 Symbol: Introduced in ES6, Symbols are unique and immutable values often used as object property keys to avoid naming collisions.
    const id = Symbol('id');
    const user = { [id]: 123, name: 'Alice' };

// 1.2 Non primitive data 
// 1.2.1 Object: The fundamental non-primitive data type. It's a collection of key-value pairs. Arrays, functions, and dates are all special kinds of objects in JavaScript.
    var person = {
        firstName: "Jane",
        lastName: "Smith",
        age: 25
    };
// 1.2.2// Array is an object
    var colors = ["red", "green", "blue"]; 
// 1.2.3// Function is an object
    var greet = function() { console.log("Hello!"); }; 