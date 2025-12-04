//  Middleware in NodeJS refers to a software design pattern where functions are invoked sequentially in a pipeline to handle requests and responses in web applications. It acts as an intermediary layer between the client and the server, allowing for modularization of request processing logic and enabling cross-cutting concerns such as authentication, logging, error handling, and data transformation. Let's delve deeper into the concept of middleware in NodeJS.

// Middleware Functions:
// In NodeJS, middleware functions are JavaScript functions that have access to the request object (req), response object (res), and the next middleware function in the pipeline (next). Middleware functions can perform tasks such as modifying request or response objects, terminating the request-response cycle, or passing control to the next middleware function in the pipeline.

// Express.js Middleware:
// Express.js, a popular web framework for NodeJS, heavily utilizes middleware for request processing. Middleware functions in Express.js can be added using the app.use() method or specific HTTP method functions such as app.get(), app.post(), etc., to specify middleware for specific routes.

// Custom middleware function
const loggerMiddleware1 = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call the next middleware function
};

// Add middleware to handle all requests
app.use(loggerMiddleware);
// Chaining Middleware:
// Middleware functions can be chained together using the next() function to execute multiple middleware functions in a specific order. This allows for modularization and reusability of middleware logic across different routes and applications.

// Middleware for authentication
const authenticateMiddleware = (req, res, next) => {
    if (req.headers.authorization === 'Bearer token') {
        next(); // Proceed to the next middleware
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Middleware for logging
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware
};

// Apply middleware to specific routes
app.get('/protected', authenticateMiddleware, loggerMiddleware, (req, res) => {
    res.send('Protected Route');
});
// Error Handling Middleware:
// Middleware functions can also handle errors by defining error-handling middleware using four parameters (err, req, res, next). Error-handling middleware functions are invoked when an error occurs during request processing.

// Error handling middleware
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error('An error occurred:', err);
    res.status(500).send('Internal Server Error');
};

// Apply error handling middleware
app.use(errorHandlerMiddleware);
// Conclusion:
// Middleware plays a crucial role in NodeJS web development by providing a flexible and modular approach to request processing. By utilizing middleware functions, developers can modularize request handling logic, implement cross-cutting concerns, and enhance the maintainability and scalability of NodeJS applications. Understanding and effectively utilizing middleware is essential for building robust and extensible web applications in NodeJS.

