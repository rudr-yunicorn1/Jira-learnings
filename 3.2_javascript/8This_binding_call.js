// The 'this keyword' in JavaScript refers to the object to which it belongs. Its value is determined by how a function is called, making it a dynamic reference. The 'this' keyword is a powerful and fundamental concept used to access properties and methods of an object, allowing for more flexible and reusable code.




const person1 = {
    name: "GeeksforGeeks",
    greet() {
        return `Welcome To, ${this.name}`;
    }
};
console.log(person.greet());

// Output
// Welcome To, GeeksforGeeks
// There are more ways to use this keyword in JavaScript:

// Using this in a Method
// In the context of an object method in JavaScript, the this keyword refers to the object itself, allowing access to its properties and methods within the method's scope. It facilitates interaction with the object's data and behaviour, providing a way to access and manipulate its state.




const person2 = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};
​
person.greet();

// Output
// Hello, my name is John and I am 30 years old.
// Using this in a Function
// In a JavaScript function, the behavior of the this keyword varies depending on how the function is invoked.

// Syntax:

function exampleFunction() {
  console.log(this); // Refers to the current execution context
}




function greet() {
    console.log('Hello, my name is ' + this.name);
}
​
const person3 = {
    name: 'Amit',
    sayHello: greet
};
const anotherPerson = {
    name: 'Jatin'
};
​
// ↔​

// Output
// Hello, my name is undefined
// Hello, my name is Amit
// Hello, my name is Jatin
// Using this alone(Global Context)
// When used alone in JavaScript, outside of any specific context, the behavior of the this keyword depends on whether the code is running in strict mode or not.




console.log(this);

// Output
// {}
// Implicit Binding
// When we call a function as a method of the object this keyword refers to the calling object




const person4 = {
    name: "Ram",
    age: 22,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person.greet());

// Output
// Hello Ram, you are 22 years old
// Here this keyword is referring to the person object so it can access name and age values.

// Explicit Binding
// When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.





// ↔​
// ageVerify.call(per1);
// ageVerify.call(per2);

// Output
// Yes you can drive
// No you cannot drive
// Default Binding
// When this keyword is used in global scope this is set to window object.




const age = 22;
function verifyAge (){
    return this.age;
}
console.log(verifyAge());

// Output
// undefined
// Arrow Function Binding
// When this is used in the arrow function then this has lexical scope so without the function keyword this is unable to refer to the object in the outer scope. 




const person = {
    name: "ram",
    age: 22,
    greet : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person.greet());

// Output
// Hello , you are undefined years old
// Returns after using this keyword
// When used within a method of an object, this points to that object.
// When used by itself, this points to the global object.
// Within a function, this typically points to the global object.
// In a function under strict mode, this becomes undefined.
// During an event, this points to the element that triggered the event.
// Methods such as call(), apply(), and bind() can reassign this to any desired object.
// The precedence order of this keyword
// JavaScript bind() Method
// JavaScript call() and apply() Method
// JavaScript Object Method
// JavaScript Global Scope
// The this keyword in JavaScript dynamically refers to the object executing a function or method. Its context varies: in methods, it points to the object itself; in the global scope, to the global object (like window); in strict mode, to undefined; and can be reassigned with call(), apply(), or bind().

// // binding call apply bind
// JavaScript provides the call(), apply(), and bind() methods for setting the this context within a function. These methods are especially useful when working with object-oriented code or handling different function contexts. In this article, we’ll explore what these methods do, provide examples, and even create simple polyfills for each method.

// Before we get started, var’s clarify what a polyfill is. In JavaScript, a polyfill is a code implementation that provides modern functionality in older environments where it might not be available. Essentially, it fills the gap for missing features by mimicking how they work in newer JavaScript versions.

// 1. Bind() Method
// The Bind() Method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

// Syntax:

// bind(thisArg)
// bind(thisArg, arg1, arg2, /* …, */ argN)
// Example 1: var us first see what will be the actual output with the bind method that is given by javascript:




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function () {
​
        // Here "this" points to nameObj
        console.log(this.name); 
    }
}
​
var HiFun = PrintName.sayHi.bind(nameObj);
HiFun();
// Output:
// 
// Tony
// Here we have an object "PrintName" which has a function sayHi which will print the name of the person which we pass in the nameObj object. Here we are binding nameObj with the PrintName sayHi function so that we can access nameObj in this in the PrintName sayHi function. The bind method returns a function so that when we call this function sayHi will have this as nameObj.

// Example 2: Now var us write our own bind polyfill.  We will implement our bind polyfill using a prototype on the Object class in the above example:




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function () {
        console.log(this.name);
    }
}
​
Object.prototype.MyBind = function (bindObj) {
​
    // Here "this" will be sayHi function
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}
var HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();
Output:

// Tony
// Explanation: So our bind polyfill is giving the same output as the previous bind method. So now var us see actually what we are doing.  In the Object prototype, we are attaching our MyBind function. Our MyBind function takes an object(In our case nameObj) as a parameter that we want to bind with our PrintName sayHi function.  

// Now, var us only focus only on this part of the code 
// (Object.prototype.MyBind):

Object.prototype.MyBind = function (bindObj) {

   // Here "this" will be sayHi function
   bindObj.myMethod = this;
   return function () {
       bindObj.myMethod();
   }
}
// Here we have the MyBind function with a parameter as bindObj in our case our bindObj is nameObj. So actually what we are doing?  we are adding myMethod inside nameObj and inside myMethod we are storing this. In our case, this is the sayHi function. 

// Example 3: So var us first look at how our bindObj is looking after running the "bindObj.myMethod=this" line.




var nameObj={
    name:"Tony"
}
​
var PrintName={
    name:"steve",
    sayHi:function(){
        console.log(this.name);
    }
}
​
Object.prototype.MyBind=function(bindObj) {
​
    // Here "this" will be sayHi function
    bindObj.myMethod=this; 
    console.log("bindObj ->",bindObj);
    return function(){
        bindObj.myMethod();
    }
}
var HiFun=PrintName.sayHi.MyBind(nameObj);
// Output:

// bindObj -> { name: 'Tony', myMethod: [Function: sayHi] }
// Here, I have not called HiFun() because we wanted to see only how the bindObj looks after running "bindObj.myMethod=this". We can clearly see that in bindObj we have myMethod which has the sayHi function. We can also see a pictorial representation of bindObj after running the "bindObj.myMethod=this" line. If we cannot understand the output above from the code below:

var bindObj = {
   name: "Tony",
   myMethod: function sayHi() {

       // Here 'this' will be bindObj
       console.log(this.name);
   }
}
// So, why we are doing all this? We wanted to access nameObj in this inside the sayHi function of PrintName.We wanted to write polyfill of a bind. So instead of attaching nameObj to this in the sayHi function. What we are doing is that in nameObj itself we are creating a myMethod and in myMethod we are adding the sayHi function of PrintName and then we are returning a function in MyBind in which we are calling bindObj.MyMethod() which basically means nameObj.myMethod() because of this when the sayHi function inside nameObj will be called it will contain itself in this and the name which is present in nameObj i.e Tony will be printed.

// Example 4: var us see one more example of bind polyfill when parameters are passed to our MyBind method :




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}
​
Object.prototype.MyBind = function (bindObj, ...args) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod(...args);
    }
}
var HiFun = PrintName.sayHi.MyBind(nameObj, 42);
HiFun();
// Output: 

// Tony age is 42
// Here "...args" is the rest parameter that puts n number of inputs into a javascript array. Here "...args" will be [42]

// 2. Call() Method
// The Call() Method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.

Syntax:

call(objectInstance)
call(objectInstance, arg1, /* …, */ argN)
// Example 1: Before implementing our own call polyfill var us see the call method which is given by javascript




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}
​
PrintName.sayHi.call(nameObj, 42);
// Output: 

// Tony age is 42
// NOTE: The call method doesn't return a new function.

// Example 2: Now var us write our own call polyfill:




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}
​
Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;
​
    bindObj.myMethod(...args);
​
}
PrintName.sayHi.MyCall(nameObj, 42);
// Output: 

// Tony age is 42
// This is exactly the same as the MyBind function but this only doesn't return a function because the call method given by javascript also doesn't return a method. So while implementing the polyfill of call we also need to keep this in mind.

// 3. Apply() Method
// The Apply() Method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.

// Syntax:

apply(objectInstance)
apply(objectInstance, argsArray)
// Example 1: For the final time var us see apply method given by javascript:




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
PrintName.sayHi.apply(nameObj, [42]);
// Output: 

// Tony age is 42
// In the apply method, we pass arguments in the form of an array this is only the primary difference between call and apply.

// Example 2: Now var us write our final polyfill which is apply polyfill:




var nameObj = {
    name: "Tony"
}
​
var PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}
​
Object.prototype.MyApply = function (bindObj, args) {
    bindObj.myMethod = this;
​
    bindObj.myMethod(...args);
​
}
PrintName.sayHi.MyApply(nameObj, [42]);
// Output: 

// Tony age is 42
// Now in this apply polyfill, we only need to pass an array as a parameter. Rest is the same as call polyfill.