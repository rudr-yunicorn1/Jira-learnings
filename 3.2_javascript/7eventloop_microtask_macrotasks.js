// Event Loop: An Event Loop in JavaScript is said to be a constantly running process that keeps a tab on the call stack. Its main function is to check whether the call stack is empty or not. If the call stack turns out to be empty, the event loop proceeds to execute all the callbacks waiting in the task queue. Inside the task queue, the tasks are broadly classified into two categories, namely micro-tasks and macro-tasks.

// Micro-tasks within an event loop: A micro-task is said to be a function that is executed after the function or program which created it exits and only if the JavaScript execution stack is empty, but before returning control to the event loop being used by the user agent to drive the script's execution environment. A Micro-task is also capable of en-queuing other micro-tasks.

// Micro-tasks are often scheduled for things that are required to be completed immediately after the execution of the current script. On completion of one macro-task, the event loop moves on to the micro-task queue. The event loop does not move to the next task outside of the micro-task queue until all the tasks inside the micro-task queue are completed. This implies that the micro-task queue has a higher priority.

// Once all the tasks inside the micro-task queue are finished, only then does the event loop shifts back to the macro-task queue. The primary reason for prioritizing the micro-task queue is to improve the user experience. The micro-task queue is processed after callbacks given that any other JavaScript is not under mid-execution. Micro-tasks include mutation observer callbacks as well as promise callbacks.

// In such a case wherein new micro-tasks are being added to the queue, these additional micro-tasks are added at the end of the micro-queue and these are also processed. This is because the event loop will keep on calling micro-tasks until there are no more micro-tasks left in the queue, even if new tasks keep getting added. Another important reason for using micro-tasks is to ensure consistent ordering of tasks as well as simultaneously reducing the risk of delays caused by users.

// Syntax: Adding micro-tasks:

queueMicrotask(() => {
    // Code to be run inside the micro-task 
});
// The micro-task function itself takes no parameters and does not return a value.

// Examples: process.nextTick, Promises, queueMicrotask, MutationObserver

// Macro-tasks within an event loop: Macro-task represents some discrete and independent work. These are always the execution of the JavaScript code and the micro-task queue is empty. Macro-task queue is often considered the same as the task queue or the event queue. However, the macro-task queue works the same as the task queue. The only small difference between the two is that the task queue is used for synchronous statements whereas the macro-task queue is used for asynchronous statements.

// In JavaScript, no code is allowed to execute until an event has occurred. {It is worth mentioning that the execution of a JavaScript code execution is itself a macro-task.} The event is queued as a macro-task. When a (macro) task, present in the macro-task queue is being executed, new events may be registered and in turn, created and added to the queue. 

// Up on initialization, the JavaScript engine first pulls off the first task in the macro-task queue and executes the callback handler. The JavaScript engine then sends these asynchronous functions to the API module, and the module pushes them to the macro-task queue at the right time. Once inside the macro-task queue, each macro-task is required to wait for the next round of the event loop. In this way, the code is executed.

// All micro-tasks logged are processed in one fell swoop in a single macro-task execution cycle. In comparison, the macro-task queue has a lower priority. Macro tasks include parsing HTML, generating DOM, executing main thread JavaScript code, and other events such as page loading, input, network events, timer events, etc. 

// Examples: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI Rendering

//TASK QUEUE 
// JavaScript, being single-threaded, processes tasks sequentially, meaning it executes one task at a time. This can pose a challenge when dealing with operations that take time to complete, such as fetching data from a server or performing complex calculations. To handle such scenarios efficiently, JavaScript employs asynchronous behavior.

// The-Secret-Behind-Steady-App-Performance-Asynchronous-JavaScript1
// The Async JavaScript
// Call Stack
// The call stack is a mechanism that JavaScript uses to keep track of its execution context. Whenever a function is invoked, a corresponding frame is pushed onto the call stack. This frame contains information about the function's arguments, local variables, and the line of code currently being executed. Once a function completes its execution, its frame is popped off the stack.

// Asynchronous Behavior
// Asynchronous behavior allows JavaScript to execute non-blocking code. This means that instead of waiting for a time-consuming operation to complete, JavaScript can continue executing other tasks while waiting for the result. Common examples of asynchronous operations include fetching data from an API, reading files, or executing setTimeout.

// When an asynchronous operation is encountered, it is off loaded to the browser's APIs (such as XMLHttpRequest, setTimeout, or fetch) to handle. JavaScript continues executing other tasks in the meantime.

// Event Queue and Event Loop
// The-Secret-Behind-Steady-App-Performance-Asynchronous-JavaScript-(1)
// Event queue and Event loop
// While JavaScript is busy executing other tasks, the asynchronous operation is carried out by the browser in the background. Once the operation is completed, its result is placed in the event queue.

// The event loop continuously monitors the call stack and the event queue. When the call stack is empty (i.e., there are no pending synchronous tasks), the event loop picks the first item from the event queue and pushes it onto the call stack for execution. This process ensures that asynchronous tasks are executed in the order they were completed, without blocking the main thread. So the asynchronous function like setTimeout in this case is executed after all synchronous code.

// Example: To demonstrate the asynchronous nature of the JavaScript using the setTimeut.




console.log("First part")
​
setTimeout(() => {
    console.log("Second part")
}
    , 500)
//waits for 0.5s (Asyncronous code)
​
console.log("Third part")

// Output
// First part
// Third part
// Second part
// Example: To demonstrate the asynchronous nature of the JavaScript using the setTimeout method.




console.log("First part")
​
setTimeout(() => {
    console.log("Second part")
}
    , 0)
//waits for 0s(Asyncronous code)
​
console.log("Third part")

// Output
// First part
// Third part
// Second part
// The result of the asnychronous part was available immediately but the output is printed last. It is because all the asynchronous code is executed after all syncronous code.

// Example: To demonstrate the working of the Asynch JavaScript in event loop.




console.log("First part")
​
setTimeout(() => {
    console.log("Second part")
}
    , 0)
//waits for 0s(Asyncronous code)
​
setTimeout(() => {
    console.log("Second 2 part")
}
    , 0)
//waits for 0s(Asyncronous code)
​
console.log("Third part")

// Output
// First part
// Third part
// Second part
// Second 2 part
// In JavaScript event queues, micro and macro task queues play crucial roles in managing asynchronous operations. Here's an overview of each:

// Microtask Queue
// Microtasks are tasks that are executed asynchronously, but right after the currently executing script. They are usually high-priority tasks and are often used for things like promises and mutation observers.

// In JavaScript, the microtask queue is commonly implemented using the Promise object. When a promise settles (fulfilled or rejected), its respective .then() and .catch() handlers are placed in the microtask queue.

// Example: To demonstrate the micro task queue working using the console.log('End') statement that comes after the promises, it's logged before the microtasks because microtasks execute immediately after the current task is done executing.




console.log('Start');
​
Promise.resolve().then(() => {
    console.log('Microtask 1')
});
Promise.resolve().then(() => {
    console.log('Microtask 2')
});
​
console.log('End');

// Output
// Start
// End
// Microtask 1
// Microtask 2
// Macro Task Queue
// Macrotasks are tasks that are executed asynchronously, but they are placed at the end of the event queue and executed after the microtasks. Common examples of macrotasks include setTimeout, setInterval, and DOM event handlers. In JavaScript, the macro task queue includes tasks like setTimeout, setInterval, and I/O operations.

// Example: To demonsrtate the working of the Macro task queue in JavaScript.




console.log('Start');
​
setTimeout(() => console.log('Macro task 1'), 0);
setTimeout(() => console.log('Macro task 2'), 0);
​
console.log('End');

// Output
// Start
// End
// Macro task 1
// Macro task 2
// Implementation in Event Queue:

// The event loop in JavaScript handles both microtasks and macrotasks. When an event occurs, it's placed in the appropriate queue. Microtasks are executed first, followed by macrotasks.

// Example: To demonstrate the working of the micro and macro task queue in JavaScript.




console.log('Start');
​
Promise.resolve().then(() => console.log('Microtask 1'));
setTimeout(() => console.log('Macro task 1'), 0);
​
console.log('End');

// Output
// Start
// End
// Microtask 1
// Macro task 1
// Micro tasks have higher priority and are executed before macro tasks in the JavaScript event loop. They are often used for critical operations like handling promises or observing mutations. Macro tasks, on the other hand, are deferred tasks that are executed after micro tasks and are commonly associated with I/O events and timers.




console.log("Start");
​
setTimeout(() => {
  console.log("Inside setTimeout->1 (macrotask)");
}, 0);
​
Promise.resolve().then(() => {
  console.log("Inside Promise.then->1 (microtask)");
});
​
Promise.resolve().then(() => {
  console.log("Inside Promise.then->2 (microtask)");
});
​
setTimeout(() => {
  console.log("Inside setTimeout->2 (macrotask)");
}, 0);
​
console.log("End");

// Output
// Start
// End
// Inside Promise.then->1 (microtask)
// Inside Promise.then->2 (microtask)
// Inside setTimeout->1 (macrotask)
// Inside setTimeout->2 (macrotask)
// The order of execution:

// "Start" is logged.
// Two setTimeout functions and two promise .then() functions are scheduled.
// "End of the script" is logged.
// Microtasks are executed. Both Promise.then() functions are executed in the order they were scheduled. So, "Inside Promise.then 1 (microtask)" and "Inside Promise.then 2 (microtask)" are logged.
// Macrotasks are executed. Both setTimeout functions are executed in the order they were scheduled. So, "Inside setTimeout 1 (macrotask)" and "Inside setTimeout 2 (macrotask)" are logged.
// This demonstrates the execution order of tasks in both microtask and macrotask queues.

