// JavaScript introduced the Rest Parameter and Spread Operator in ES6 to make handling functions and arrays more flexible and concise. These operators use the same syntax (...), but they serve different purposes. The rest parameter collects multiple values into an array, while the spread operator spreads elements from an array or object.

// Rest parameter
// The Rest Parameter allows functions to accept an indefinite number of arguments as an array. It collects multiple arguments into a single array parameter.




// Rest Parameter
function myFunc(...args) {
    console.log(args);
}
myFunc(1, 2, 3, 4, 5);

// Output
// [ 1, 2, 3, 4, 5 ]
// The ...args in myFunc(...args) collects all passed arguments into an array called args.
// When calling myFunc(1, 2, 3, 4, 5), it prints [1, 2, 3, 4, 5] because all arguments are grouped into args.
// Using Rest Parameter in Functions
// The rest parameter allows a function to accept an indefinite number of arguments as an array.




function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5))

// Output
// 15
// The sum function uses the rest parameter to gather arguments. It calculates the sum of all passed numbers.
// ...numbers gathers all arguments into an array.
// The reduce method iterates over the array and sums the values.
// The default value of 0 ensures the sum starts correctly.
// numbers would become an array after passing of arguments to the sum function and it will look like [1,2,3,4,5].
// Use cases of rest parameter
// 1. Collecting Function Arguments
// The rest parameter collects names into an array. The function greets all the names.




function greet(greeting, ...names) {
    return `${greeting}, ${names.join(' and ')}`;
}
console.log(greet("Pranjal", "Tanamaya", "Sonam"));

// Output
// Pranjal, Tanamaya and Sonam
// ...names gathers remaining arguments.
// The join method creates a string combining names.
// The result is a personalized greeting.
// 2. Filtering Properties in Objects
// Destructuring extracts property a. The rest parameter gathers remaining properties.




const { a, ...rest1 } = { a: 1, b: 2, c: 3 };
console.log(a)
console.log(rest)

// Output
// 1
// { b: 2, c: 3 }
// a is assigned 1.
// ...rest collects { b: 2, c: 3 }.
// This separates key-value pairs.
// 3. Destructuring with Rest
// Destructuring extracts the first element. The rest parameter gathers remaining elements.




const [first, ...rest] = [1, 2, 3, 4];
console.log(first)
console.log(rest)

// Output
// 1
// [ 2, 3, 4 ]
// first receives the value 1.
// ...rest collects [2, 3, 4].
// Both variables are distinct.
// 4. Function Default Parameters
// The rest parameter collects numbers. The function multiplies each by a given factor.




function mul(factor, ...nums) {
    return nums.map(num => num * factor);
}
console.log(mul(2,1,2,3,4,5))

// Output
// [ 2, 4, 6, 8, 10 ]
// ...numbers gathers extra arguments into an array.
// map applies the multiplication to each element.
// The result is a new array of products.
// Spread operator
// The spread operator (...arr) in JavaScript is used to expand an array or object into individual elements. It allows you to easily pass elements from an array as separate arguments in a function call or combine multiple arrays into one. The spread operator helps to make code more concise and readable when working with arrays or objects.




const n = [1, 2, 3];
const ne = [...n, 4, 5];  
console.log(ne);

// Output
// [ 1, 2, 3, 4, 5 ]
// The ...n spread operator expands the n array into individual elements, so [...n, 4, 5] becomes [1, 2, 3, 4, 5].
// The code then logs the new array ne, which contains the original elements plus 4 and 5 at the end.
// Expanding Arrays
// The spread operator which is denoted by ... allows iterable elements (like arrays or objects) to expand into individual elements.




const a11 = [1, 2, 3];
const a22 = [...a1, 4, 5];
console.log(a2)

// Output
// [ 1, 2, 3, 4, 5 ]
// The spread operator expands a1 into individual elements. These elements are combined with additional values into a2.
// ...a1 expands [1, 2, 3] into 1, 2, 3.
// These elements are placed into a2 alongside 4 and 5.
// The resulting array is [1, 2, 3, 4, 5].
// Use cases of spread operator
// 1. Merging Arrays
// Arrays a1 and a2 are merged using the spread operator. The result is a single combined array.




const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2];
console.log(merged)

// Output
// [ 1, 2, 3, 4 ]
// ...a1 and ...a2 expand the arrays.
// Elements from both arrays are combined in order.
// The result is [1, 2, 3, 4].
// The final result will be stored in the merged variable.
// 2. Cloning Arrays
// The spread operator creates a shallow copy of the original array. The new array, clone, is independent of the original.




const original = [10, 20, 30];
const clone = [...original];
console.log(clone)

// Output
// [ 10, 20, 30 ]
// ...original expands elements into a new array.
// Changes to clone won't affect original.
// Both arrays share the same initial data.
// 3. Combining Objects
// Objects obj1 and obj2 are combined using the spread operator. Properties in obj2 override those in obj1.




const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined)

// Output
// { a: 1, b: 3, c: 4 }
// ...obj1 and ....obj2 expand properties into a new object.
// Duplicate keys are overridden by later objects.
// The result is { a: 1, b: 3, c: 4 }.
// In this case b is present as a key in both the objects but the second b overwrites the value of first one.

// // destructuring 
// Destructuring Assignment is a JavaScript expression that allows to unpack of values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, and nested objects, and assigned to variables.

// Array Destructuring
// Array members can be unpacked into different variables. The following are different examples.




const a111 = [10, 20, 30, 40]
​
console.log("Example 1");
const [x1, y1, z1, w1] = a;
console.log(x1);
console.log(y1);
console.log(z1);
console.log(w1);
​
const [p, q, , r] = a;
console.log("Example 2");
console.log(p);
console.log(q);
console.log(r);
​
const [s, t] = a;
console.log("Example 3");
console.log(s);
console.log(t);

// Output
// Example 1
// 10
// 20
// 30
// 40
// Example 2
// 10
// 20
// 40
// Example 3
// 10
// 20
// Example with Rest Operator : In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (...) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array. 




var [fst, , ...last] = ["a", "b", "c", "d"];
​
console.log(fst);
console.log(last);

// Output
// a
// [ 'c', 'd' ]
// Example of Swapping : Values can be swapped using destructuring assignment as below: 




var x = 10, y = 20;
​
// Swapping 
[x, y] = [y, x];
​
console.log(x);
console.log(y);

// Output
// 20
// 10
// Example of Function Return: Data can also be extracted from an array returned from a function. One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function. 




function NamesList() {
    return ["a", "b", "c", "d"]
}
​
var [fst, snd] = NamesList();
​
console.log(fst);
console.log(snd);

// Output
// a
// b
// Example 6: In ES5 to assign variables from objects its implementation is 




var marks = { x: 21, y: -34, z: 47 };
​
const { x, y, z } = marks;
​
console.log(x);
console.log(y);
console.log(z);

// Output
// 21
// -34
// 47
// Object destructuring
// Simple Object destructuring : In the below examplex, properties (and their values) of an object are assigned to variables.




({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

// Output
// 10
// 20



({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

// Output
// 10
// 20
// { m: 30, n: 40 }
// Nesyed Object destructuring : The Nested objects can also be destructured using destructuring syntax. 




const marks = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = marks;
console.log(alpha1, beta1);

// Output
// 15 16



var obj = {
    name: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}
​
var { name } = obj;
console.log(name)
​
var { add: { country: abcd } } = obj
console.log(abcd)
​
var { add: { state: { code: cd } } } = obj
console.log(cd)
​
var { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);

// Output
// GFG
// India
// JS
// destructuring