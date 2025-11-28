// The event loop is an important concept in JavaScript that enables asynchronous programming by handling tasks efficiently. Since JavaScript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.




console.log("Start");
​
setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);
​
Promise.resolve().then(() => {
    console.log("Promise Resolved");
});
​
console.log("End");
// Output

// Start
// End
// Promise Resolved
// setTimeout Callback
// In this example

// console.log("Start") executes first.
// setTimeout schedules its callback but does not execute it immediately.
// Promise.resolve().then() is placed in the microtask queue and executes before the callback queue.
// Promise Resolved appears before setTimeout Callback due to microtask priority.
// JavaScript executes code synchronously in a single thread. However, it can handle asynchronous operations such as fetching data from an API, handling user events, or setting timeouts without pausing execution. This is made possible by the event loop.

// How the Event Loop Works
// The event loop continuously checks whether the call stack is empty and whether there are pending tasks in the callback queue or microtask queue.
// Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.
// Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.
// Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.
// Microtask Queue: Promises and other microtasks go into the microtask queue, which is processed before the task queue.
// Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.
// Phases of the Event Loop
// The event loop operates in multiple phases.

// Timers Phase: Executes callbacks from setTimeout and setInterval.
// I/O Callbacks Phase: Handles I/O operations like file reading, network requests, etc.
// Prepare Phase: Internal phase used by Node.js.
// Poll Phase: Retrieves new I/O events and executes callbacks.
// Check Phase: Executes callbacks from setImmediate.
// Close Callbacks Phase: Executes close event callbacks, e.g., socket.on('close').
// Microtasks Execution: After each phase, the event loop processes the microtask queue before moving to the next phase.
// Common Issues Related to the Event Loop
// 1. Blocking the Main Thread
// Heavy computations block the event loop, making the app unresponsive.




while(true)
{
    console.log('Blocking...')
}
// An infinite while(true) loop continuously runs, blocking the event loop and freezing the browser by preventing any other task from executing.

// 2. Delayed Execution of setTimeout
// setTimeout doesn’t always run exactly after the specified time.




console.log("Start");
setTimeout(() => console.log("Inside setTimeout"), 1000);
for (let i = 0; i < 1e9; i++) {} // Long loop
console.log("End");
// The blocking loop delays setTimeout execution because the Call Stack is busy so, this code will also lead to Time Limit Exceed Error or will freeze the Browser.

// 3. Priority of Microtasks Over Callbacks
// Microtasks run before setTimeout, even if set with 0ms delay.




setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
Explain

// The event loop first check's for function in the microtask queue and then in the call back queue always in JavaScript microtask queue is given more priority than the call back queue that's why the functions present in the microtask queue are executed first.

// 4. Callback Hell
// Too many nested callbacks make code unreadable.


setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
// This creates Callback Hell, making it hard to read and maintain. Use Promises or async/await instead.
// Best Practices for Working with the Event Loop
// Use Asynchronous Operations: Avoid blocking the event loop with synchronous file reads or complex calculations.
// Optimize Long-Running Tasks: Use worker threads or child processes for CPU-intensive tasks.
// Use Microtasks Wisely: Since microtasks execute before other queued tasks, excessive usage can delay other operations.
// Leverage setImmediate() for High-Priority Tasks: Unlike setTimeout(fn, 0), setImmediate() executes immediately after the I/O phase.
// Debug Using Performance Tools: Utilize Node.js Performance Hooks and the Chrome DevTools profiler to monitor the event loop behavior.