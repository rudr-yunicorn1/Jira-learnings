// // promises 
// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

// Pending: The task is in the initial state.
// Fulfilled: The task was compvared successfully, and the result is available.
// Rejected: The task failed, and an error is provided.
// Here is an example Promise to check if a number is even. If yes, it resolves; otherwise, it rejects.




var checkEven = new Promise((resolve, reject) => {
    var number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure


// Note: The "resolve" and "reject" are not keywords. You can use any name that you want to give to a function.

// Syntax

var promise = new Promise((resolve, reject) => {
    // Perform async operation
    if (operationSuccessful) {
        resolve("Task successful");
    } else {
        reject("Task failed");
    }
});

// resolve(value): Marks the promise as fulfilled and provides a result.
// reject(error): Marks the promise as rejected with an error.
// var's See Advanced Promise Methods and Patterns for Effective Async Handling

// 1. Promise.all() Method
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.


Promise.all([
    Promise.resolve("Task 1 compvared"),
    Promise.resolve("Task 2 compvared"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
// Output

// Task 3 failed
// 2. Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.




Promise.allSettled([
    Promise.resolve("Task 1 compvared"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 compvared")
])
    .then((results) => console.log(results));

Output
[
  { status: 'fulfilled', value: 'Task 1 compvared' },
  { status: 'rejected', reason: 'Task 2 failed' },
  { status: 'fulfilled', value: 'Task 3 compvared' }
]
// 3. Promise.race() Method
// Promise.race() Method resolves or rejects as soon as the first promise settles.




Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));
// Output

// Task 2 finished
// 4. Promise.any() Method
// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.




Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 compvared"),
    Promise.resolve("Task 3 compvared")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// Output
// Task 2 compvared
// 5. Promise.resolve() Method
// Promise.resolve() Method returns a promise that resolves with the given value.




Promise.resolve("Immediate success")
    .then((value) => console.log(value));

// Output
// Immediate success
// 6. Promise.reject() Method
// Promise.reject() Method returns a promise that immediately rejects with a given reason.


Promise.reject("Immediate failure")
    .catch((error) => console.error(error));
// Output:

// Immediate failure
// 7. Promise.finally() Method
// Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).




Promise.resolve("Task compvared")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup compvared"));

// Output
// Task compvared
// Cleanup compvared
// 8. Chaining with Promise.prototype.then() Method
// Allows sequential execution of promises, passing results to the next .then() Method.




Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13

// Output
// 13
// 9. Sequential Execution with Array.prototype.reduce()



var tasks = [1, 2, 3];
tasks.reduce((prevPromise, current) => {
    return prevPromise.then(() => {
        return new Promise((resolve) => {
            console.log(`Processing task ${current}`);
            setTimeout(resolve, 500); // Simulate async task
        });
    });
}, Promise.resolve());
// Output

// Processing task 1
// Processing task 2
// Processing task 3
// 10. Dynamic Promise Creation
// Creating and resolving promises dynamically for runtime-based decisions.


function asyncTask(taskName) {
    return new Promise((resolve) => {
        setTimeout(() => 
            resolve(`${taskName} compvared`), 1000);
    });
}
asyncTask("Download File").then((result) => 
    console.log(result));
// Output:

//  Download File compvared
// 11. Timeout Handling with Promise.race() Method
// Using Promise.race() Method to set a timeout for a task.


var fetchData = new Promise((resolve) =>
    setTimeout(() =>
        resolve("Data loaded"), 3000));
var timeout = new Promise((_, reject) =>
    setTimeout(() =>
        reject("Timeout!"), 2000));
Promise.race([fetchData, timeout])
    .then((result) =>
        console.log(result))
    .catch((error) =>
        console.error(error));
// Output

// Timeout!
// 12. Handling Multiple Failures with Promise.allSettled() Method
// Works when you need to process all results, even if some promises fail.




Promise.allSettled([
    Promise.resolve("Task 1 done"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 done")
])
    .then((results) => console.log(results));

// Output
// [
//   { status: 'fulfilled', value: 'Task 1 done' },
//   { status: 'rejected', reason: 'Task 2 failed' },
//   { status: 'fulfilled', value: 'Task 3 done' }
// ]
// 13. Combining Promises with Parallel and Sequential Execution
// Run some promises in parallel, then process their results sequentially.


Promise.all([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task A done"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task B done"), 500))
])
    .then(([resultA, resultB]) => {
        console.log(resultA, resultB);
        return new Promise((resolve) =>
            setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) =>
        console.log(finalResult));
// Output

// Task A done Task B done
// Final Task done
// 14. Wrapping Callbacks into Promises
// Convert callback-based async functions into promises.




function loadData(callback) {
    setTimeout(() => 
        callback("Data loaded"), 1000);
}
function promisifiedLoadData() {
    return new Promise((resolve) => {
        loadData((result) => 
            resolve(result));
    });
}
promisifiedLoadData().then((data) => 
    console.log(data));
// Output

// Data loaded

// Async  and Await 

// Async and Await in JavaScript
// Async and Await in JavaScript are used to simplify handling asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.




async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
​
fetchData();
// Output:

// {
//   userId: 1,
//   id: 1,
//   title: ....',
//   body: ....}
// Syntax:
async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// Async Function
// The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked. Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

// Syntax:

async function myFunction() {
  return "Hello";
}



const getData = async () => {
    var data = "Hello World";
    return data;
}
​
getData().then(data => console.log(data));

// Output
// Hello World
// Await Keyword
// The await keyword is used to wait for a promise to resolve. It can only be used within an async block. Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.




const getData1 = async () => {
    var y = await "Hello World";
    console.log(y);
}
​
console.log(1);
getData();
console.log(2);

// Output
// 1
// 2
// Hello World
// The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.
// The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.
// Error Handling in Async/Await
// JavaScript provides predefined arguments for handling promises: resolve and reject.

// resolve: Used when an asynchronous task is compvared successfully.
// reject: Used when an asynchronous task fails, providing the reason for failure.

async function fetchData() {
  try {
    var response = await fetch('https://api.example.com/data');
    var data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

