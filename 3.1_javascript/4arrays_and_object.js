// 1. Create Array using Literal
// Creating an array using array literal involves using square brackets [] to define and initialize the array.




// Creating an Empty Array
var a = [];
console.log(a);
​
// Creating an Array and Initializing with Values
var b = [10, 20, 30];
console.log(b);

// Output
// []
// [ 10, 20, 30 ]
// 2. Create using new Keyword (Constructor)
// The "Array Constructor" refers to a method of creating arrays by invoking the Array constructor function.




// Creating and Initializing an array with values
var a = new Array(10, 20, 30);
​
console.log(a);

// Output
// [ 10, 20, 30 ]
// Note: Both the above methods do exactly the same. Use the array literal method for efficiency, readability, and speed.

// Basic Operations on JavaScript Arrays
// 1. Accessing Elements of an Array
// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Accessing Array Elements
console.log(a[0]);
console.log(a[1]);

// Output
// HTML
// CSS
// 2. Accessing the First Element of an Array
// The array indexing starts from 0, so we can access first element of array using the index number.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Accessing First Array Elements
var fst = a[0];
​
console.log("First Item: ", fst);

// Output
// First Item:  HTML
// 3. Accessing the Last Element of an Array
// We can access the last array element using [array.length - 1] index number.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Accessing Last Array Elements
var lst = a[a.length - 1];
​
console.log("First Item: ", lst);

// Output
// First Item:  JS
// 4. Modifying the Array Elements
// Elements in an array can be modified by assigning a new value to their corresponding index.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
console.log(a);
​
a[1]= "Bootstrap";
console.log(a);

// Output
// [ 'HTML', 'CSS', 'JS' ]
// [ 'HTML', 'Bootstrap', 'JS' ]
// 5. Adding Elements to the Array
// Elements can be added to the array using methods like push() and unshift().

// The push() method add the element to the end of the array.
// The unshift() method add the element to the starting of the array.



// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Add Element to the end of Array
a.push("Node.js");
​
// Add Element to the beginning
a.unshift("Web Development");
​
console.log(a);

// Output
// [ 'Web Development', 'HTML', 'CSS', 'JS', 'Node.js' ]
// 6. Removing Elements from an Array
// To remove the elements from an array we have different methods like pop(), shift(), or splice().

// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.



// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);
​
// Removes and returns the last element
var lst = a.pop();
console.log("After Removing the last: " + a);
​
// Removes and returns the first element
var fst = a.shift();
console.log("After Removing the First: " + a);
​
// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);

// Output
// Original Array: HTML,CSS,JS
// After Removing the last: HTML,CSS
// After Removing the First: CSS
// After Removing 2 elements starting from index 1: CSS
// 7. Array Length
// We can get the length of the array using the array length property.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
var len = a.length;
​
console.log("Array Length: " + len);

// Output
// Array Length: 3
// 8. Increase and Decrease the Array Length
// We can increase and decrease the array length using the JavaScript length property.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"]
​
// Increase the array length to 7
a.length = 7;
​
console.log("After Increasing Length: ", a);
​
// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)

// Output
// After Increasing Length:  [ 'HTML', 'CSS', 'JS', <4 empty items> ]
// After Decreasing Length:  [ 'HTML', 'CSS' ]
// 9. Iterating Through Array Elements
// We can iterate array and access array elements using for loop and forEach loop.

// Example: It is an example of for loop.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Iterating through for loop
for (var i = 0; i < a.length; i++) {
    console.log(a[i])
}

// Output
// HTML
// CSS
// JS
// Example: It is the example of Array.forEach() loop.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Iterating through forEach loop
a.forEach(function myfunc(x) {
    console.log(x);
});

// Output
// HTML
// CSS
// JS
// 10. Array Concatenation
// Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS", "React"];
var b = ["Node.js", "Expess.js"];
​
// Concatenate both arrays
var concateArray = a.concat(b);
​
console.log("Concatenated Array: ", concateArray);

// Output
// Concatenated Array:  [ 'HTML', 'CSS', 'JS', 'React', 'Node.js', 'Expess.js' ]
// 11. Conversion of an Array to String
// We have a builtin method toString() to converts an array to a string.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Convert array ot String
console.log(a.toString());

// Output
// HTML,CSS,JS
// 12. Check the Type of an Arrays
// The JavaScript typeof operator is used ot check the type of an array. It returns "object" for arrays.




// Creating an Array and Initializing with Values
var a = ["HTML", "CSS", "JS"];
​
// Check type of array
console.log(typeof a);

// Output
// object
// Recognizing a JavaScript Array
// There are two methods by which we can recognize a JavaScript array:

// By using Array.isArray() method
// By using instanceof method 
// Below is an example showing both approaches:




const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses))
console.log("Using instanceof method: ", courses instanceof Array)

// Output
// Using Array.isArray() method:  true
// Using instanceof method:  true
// Note: A common error is faced while writing the arrays:

const a = [5]
// and
const a = new Array(5) 
// The above two statements are not the same.

// Output: This statement creates an array with an element " [5] ". Try with the following examples




// Example 1
const a1 = [5]
console.log(a1)
​
// Example 2
const a2 = new Array(5) 
console.log(a2)

// Output
// [ 5 ]
// [ <5 empty items> ]


 // objects   
//  1. Creation Using Object Literal
// The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.




var obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);

// Output
// { name: 'Sourav', age: 23, job: 'Developer' }
// 2. Creation Using new Object() Constructor



var obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"
​
console.log(obj);

// Output
// { name: 'Sourav', age: 23, job: 'Developer' }
// Basic Operations on JavaScript Objects
// 1. Accessing Object Properties
// You can access an object’s properties using either dot notation or bracket notation




var obj = { name: "Sourav", age: 23 };
​
// Using Dot Notation
console.log(obj.name);
​
// Using Bracket Notation
console.log(obj["age"]);

// Output
// Sourav
// 23
// 2. Modifying Object Properties
// Properties in an object can be modified by reassigning their values.




var obj = { name: "Sourav", age: 22 };
console.log(obj);
​
obj.age = 23;
console.log(obj);

// Output
// { name: 'Sourav', age: 22 }
// { name: 'Sourav', age: 23 }
// 3. Adding Properties to an Object
// You can dynamically add new properties to an object using dot or bracket notation.




var obj = { model: "Tesla" };
obj.color = "Red";
​
console.log(obj);

// Output
// { model: 'Tesla', color: 'Red' }
// 4. Removing Properties from an Object
// The devare operator removes properties from an object.




var obj = { model: "Tesla", color: "Red" };
delete obj.color;
​
console.log(obj);

// Output
// { model: 'Tesla' }
// 5. Checking if a Property Exists
// You can check if an object has a property using the in operator or hasOwnProperty() method.




var obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));

// Output
// false
// true
// 6. Iterating Through Object Properties
// Use for...in loop to iterate through the properties of an object.




var obj = { name: "Sourav", age: 23 };
for (var key in obj) {
    console.log(key + ": " + obj[key]);
}

// Output
// name: Sourav
// age: 23
// 7. Merging Objects
// Objects can be merged using Object.assign() or the spread syntax { ...obj1, ...obj2 }.




var obj1 = { name: "Sourav" };
var obj2 = { age: 23};
​
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Output
// { name: 'Sourav', age: 23 }
// 8. Object Length
// You can find the number of properties in an object using Object.keys().




var obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);

// Output
// 2
// Recognizing a JavaScript Object
// To check if a value is an object, use typeof and verify it's not null.




var obj = { name: "Sourav" };
console.log(typeof obj === "object" && obj !== null);

// Output
// true
// Common Mistakes with JavaScript Objects
// var's dive into the differences between {} and new Object() in JavaScript, as this is an important concept when working with objects.

// In JavaScript, there are two main ways to create objects

// Using Object Literal Syntax ({}): This is the most common and simple way to create objects.
// Using the Object Constructor (new Object()): This uses JavaScript's built-in Object constructor to create objects.



// Object literal
const obj1 = { key: "value" };
​
// Object constructor
const obj2 = new Object();
obj2.key = "value";
​
console.log(obj1);
console.log(obj2);

// Output
// { key: 'value' }
// { key: 'value' }
// At first glance, both approaches seem to achieve the same result. However, there are significant differences to understand.