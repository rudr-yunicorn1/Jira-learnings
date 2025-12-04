// Middleware in Node.js, particularly within the Express.js framework, 
// refers to functions that have access to the request object (req), 
// the response object (res), and the next middleware function in the application's request-response cycle.
//  These functions can perform various tasks, such as modifying the request or response, ending the request-response cycle, or calling the next middleware in the stack.
// There are several types of middleware in Node.js: 
// Application-level middleware: This middleware is bound to the app object using app.use() or app.METHOD() functions (where METHOD is an HTTP method like GET, POST, etc.).
//  It executes for every request to the application or for specific routes if a path is provided.
// JavaScript

    app.use((req, res, next) => {
      console.log('Time:', Date.now());
      next();
    });
// Router-level middleware: Similar to application-level middleware, but bound to an instance of express.Router().
//  It's used to define middleware for specific routes or a group of routes within a modular structure. 
// JavaScript

    const router = express.Router();
    router.use((req, res, next) => {
      console.log('Request received for router');
      next();
    });
// Error-handling middleware: This type of middleware has a distinctive function signature with four arguments: 
// (err, req, res, next). It is specifically designed to catch and handle errors that occur during the request-response cycle.
//  Error-handling middleware is typically placed at the end of the middleware stack. 
// JavaScript

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });
// Built-in middleware: Express.js provides several built-in middleware functions for common tasks:
// express.static(): Serves static files such as images, CSS, and JavaScript files.
// express.json(): Parses incoming requests with JSON payloads.
// express.urlencoded(): Parses incoming requests with URL-encoded payloads (often from HTML forms).
// JavaScript

    app.use(express.static('public'));
    app.use(express.json());
// Third-party middleware: These are middleware packages developed and maintained by the community, offering a wide range of functionalities. 
// `Examples include:
// body-parser: For parsing request bodies (though express.json() and express.urlencoded() have largely replaced its core functionality).
// morgan: For request logging.
// helmet: For enhancing application security by setting various HTTP headers.
// cors: For enabling Cross-Origin Resource Sharing.
// JavaScript

    const morgan = require('morgan');
    app.use(morgan('dev'));