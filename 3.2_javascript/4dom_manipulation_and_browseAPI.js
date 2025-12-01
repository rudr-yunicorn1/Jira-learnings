// // The DOM stands for the Document Object Model (DOM), which allows us to interact with the document and change its structure, style, and content. We can use the DOM to change the content and style of an HTML element by changing its properties.

// // In this article, we will discuss how to manipulate the DOM elements.

// // How to Manipulate DOM Elements?
// // We can manipulate or change the DOM elements by using the following methods:

// // 1. Change the Content of an Element
// // You can change the content inside an HTML element using JavaScript. The two most common properties for this are innerHTML and textContent:

// // innerHTML: Allows you to get or set the HTML content inside an element.
// // textContent: Allows you to get or set the text content inside an element, ignoring any HTML tags.

// // <body>
// //     <div id="example1">This is the original content using innerHTML.</div>
// //     <div id="example2">This is the original text content using textContent.</div>

// //     <button onclick="changeContent()">Change Content</button>

// //     <script>
// //         // Function to change content
// //         function changeContent() {
// //             document.getElementById("example1").innerHTML = 
// //             "<strong>This is changed using innerHTML!</strong>";

// //             document.getElementById("example2").textContent = 
// //             "This is changed using textContent!";
// //         }
// //     </script>
// // </body>
// // Output

// // Animationkk
// // DOM Manipulation - Change the Content of an Element
// // In this example

// // innerHTML changes the entire content of an element, including HTML tags. In this case, we replace the content of the first div with bold text using <strong>.
// // textContent changes only the text inside the element, ignoring any HTML tags. The second div is updated with plain text, without any HTML formatting.
// // The first div shows "This is the original content using innerHTML."
// // The second div shows "This is the original text content using textContent."
// // After clicking the "Change Content" button.
// // The first div will display "This is changed using innerHTML!" with bold text.
// // The second div will display "This is changed using textContent!" with plain text.
// // 2. Manipulate the Class Attribute
// // You can add, remove, or toggle classes on an element using JavaScript. This is helpful for styling or applying animations.

// // classList.add(): Adds a class to an element.
// // classList.remove(): Removes a class from an element.
// // classList.toggle(): Toggles a class (adds it if it's not present, removes it if it is).

// // <html>
// // <head>
// //     <style>
// //         .highlight {
// //             color: red;
// //             font-weight: bold;
// //         }
// //         .bold {
// //             font-weight: bold;
// //         }
// //     </style>
// // </head>
// // <body>
// //     <div id="example" class="bold">This is a text element with the "bold" class.</div>

// //     <button onclick="addClass()">Add 'highlight' Class</button>
// //     <button onclick="removeClass()">Remove 'bold' Class</button>
// //     <button onclick="toggleClass()">Toggle 'highlight' Class</button>
// //     <script>
// //         function addClass() {
// //             document.getElementById("example").classList.add("highlight");
// //         }
// //         function removeClass() {
// //             document.getElementById("example").classList.remove("bold");
// //         }
// //         function toggleClass() {
// //             document.getElementById("example").classList.toggle("highlight");
// //         }
// //     </script>
// // </body>
// // </html>
// // Output:

// // Animationkk
// // Dom Manipulation - Manipulate the Class Attribute
// // In this example

// // Adding a Class (addClass()): When you click the "Add 'highlight' Class" button, the highlight class is added to the div element with the id="example". This changes the text color to red and makes it bold (as defined in the CSS).
// // Removing a Class (removeClass()): When you click the "Remove 'bold' Class" button, the bold class is removed from the div, which removes the bold styling from the text.
// // Toggling a Class (toggleClass()): When you click the "Toggle 'highlight' Class" button, the highlight class is either added or removed, depending on whether it's already present. If the class is present, it will be removed; if not, it will be added.
// // 3. Set CSS Styles Using JavaScript
// // You can directly manipulate the CSS styles of an element using the style property. This allows you to dynamically change how elements appear on the page.


// // // Changing multiple CSS properties
// // document.getElementById("demo").style.color = "red";
// // document.getElementById("demo").style.fontSize = "20px";
// // // Adding more than one style
// // document.getElementById("demo").style.cssText = "color: blue; font-size: 18px;";
// // 4. Create, Add, and Remove Elements
// // Sometimes, you need to create new elements, add them to the DOM, or remove existing ones. You can do this easily with the following methods

// // document.createElement(): Creates a new element.
// // appendChild(): Adds a new element to a parent element.
// // removeChild(): Removes a child element from a parent.

// // // Create a new element
// // let newDiv = document.createElement("div");
// // newDiv.textContent = "This is a new div";
// // // Add the new element to the DOM
// // document.body.appendChild(newDiv);
// // // Remove an element from the DOM
// // document.body.removeChild(newDiv);
// // 5. Insert Elements at a Specific Position
// // You can insert new elements at specific positions relative to existing elements using methods like insertBefore().


// // // Create a new element
// // let newDiv = document.createElement("div");
// // newDiv.textContent = "This is a new div";

// // // Find an existing element to insert before
// // let referenceNode = document.getElementById("referenceElement");

// // // Insert the new element before the reference element
// // document.body.insertBefore(newDiv, referenceNode);
// // 6. Manipulate Element Attributes
// // You can easily get, set, or remove the attributes of an HTML element using the following methods:

// // getAttribute(): Retrieves the value of an attribute.
// // setAttribute(): Sets a new value for an attribute.
// // removeAttribute(): Removes an attribute.

// // // Get the value of an attribute
// // let src = document.getElementById("image").getAttribute("src");

// // // Set a new value for an attribute
// // document.getElementById("image").setAttribute("src", "new-image.jpg");

// // // Remove an attribute
// // document.getElementById("image").removeAttribute("src");
// // 7. Manipulate Data Attributes
// // HTML5 introduced data attributes, which are custom attributes that you can use to store extra information about an element. These are particularly useful for adding data to an element without affecting its visual structure.

// // dataset: A special property in JavaScript that allows you to access data attributes.

// // // Setting a data attribute
// // document.getElementById("demo").dataset.userId = "12345";
// // // Getting a data attribute
// // let userId = document.getElementById("demo").dataset.userId;
// // console.log(userId); // Outputs: 12345
// // Conclusion
// // Manipulating the DOM with JavaScript is a core aspect of web development. Understanding how to select, modify, and manipulate DOM elements enables you to create dynamic, interactive web applications. With the power to change text, styles, attributes, and even structure in real-time, JavaScript empowers developers to build rich, user-responsive websites.

// Working with APIs in JavaScript
// Last Updated : 15 Jul, 2025
// An API is simply a medium to fetch or send data between interfaces. Let's say you want to make an application that provides the user with some real-time data fetched from the server or maybe even allows you to modify or add data to some other endpoint. This is made possible by the API or the Application Programming Interface.

// We will use a simple public API that requires no authentication and allows you to fetch some data by querying the API with GET requests.

// https://randomuser.me/ is a website that provides dummy data for random users that we can easily work with. We can get the response by requesting https://randomuser.me/api/. The JSON response that we receive is in the following format.


// {
//     "results": [
//         {
//             "gender": "female",
//             "name": {
//                 "title": "Miss",
//                 "first": "Nina",
//                 "last": "Simmmons"
//             },
//             "location": {
//                 "street": {
//                     "number": 970,
//                     "name": "Eason Rd"
//                 },
//                 "city": "Fullerton",
//                 "state": "Wyoming",
//                 "country": "United States",
//                 "postcode": 57089,
//                 "coordinates": {
//                     "latitude": "83.1807",
//                     "longitude": "104.7170"
//                 },
//                 "timezone": {
//                     "offset": "+8:00",
//                     "description": 
//         "Beijing, Perth, Singapore, Hong Kong"
//                 }
//             },
//             "email": "nina.simmmons@example.com",
//             "login": {
//                 "uuid": "bd0d135f-84df-4102-aa4f-5baaa41baf5c",
//                 "username": "yellowfrog722",
//                 "password": "dawg",
//                 "salt": "q28gdiyN",
//                 "md5": "291987daea22bb91775226574925b271",
//                 "sha1": "a0463a26ea5c2ff4f3ad498fd01c5994926e5021",
//                 "sha256": 
// "6583eb74ca08bfac50b3b29aa52c9f02ea5d9d017fef0e5a5a6fae4f5225f928"
//             },
//             "dob": {
//                 "date": "1980-11-01T23:10:05.403Z",
//                 "age": 40
//             },
//             "registered": {
//                 "date": "2013-04-02T02:26:52.904Z",
//                 "age": 7
//             },
//             "phone": "(216)-693-7015",
//             "cell": "(501)-534-9413",
//             "id": {
//                 "name": "SSN",
//                 "value": "847-09-2973"
//             },
//             "picture": {
//                 "large": 
// "https://randomuser.me/api/portraits/women/60.jpg",
//                 "medium": 
// "https://randomuser.me/api/portraits/med/women/60.jpg",
//                 "thumbnail": 
// "https://randomuser.me/api/portraits/thumb/women/60.jpg"
//             },
//             "nat": "US"
//         }
//     ],
//     "info": {
//         "seed": "82a8d8d4a996ba17",
//         "results": 1,
//         "page": 1,
//         "version": "1.3"
//     }
// }
// Next, you need to have an HTML file for the frontend where you want to display the retrieved data. 

// We can use either the "div" tag (block-level) or the "span" tag (inline-level), which will act as a placeholder for the information. Using the "id" attribute, we can get the required "div/span" container where we want to place the information.




// <script>
//     const api_url = "https://randomuser.me/api/";
//     async function getUser() {
    
//       // Making an API call (request)
//       // and getting the response back
//       const response = await fetch(api_url);
    
//       // Parsing it to JSON format
//       const data = await response.json();
//       console.log(data.results);
    
//       // Retrieving data from JSON
//       const user = data.results[0];
//       let { title, first, last } = user.name;
//       let { gender, email, phone } = user;
//       let image = user.picture.large;
//       let image_icon = user.picture.thumbnail;
//       let age = user.dob.age;
//       let { city, state, country } = user.location;
    
//       let fullName = title + ". " + first + " " + last;
//       document.title = fullName;
    
//       // Accessing the div container and modify/add
//       // elements to the containers
//       document.getElementById("head").innerHTML = fullName;
//       document.getElementById("email").href = "mailto:" + email;
//       document.getElementById("email").innerHTML = email;
//       document.getElementById("phone").href = "tel:" + phone;
//       document.getElementById("phone").innerHTML = phone;
//       // accessing the span container
//       document.querySelector("#age").textContent = age;
//       document.querySelector("#gender").textContent = gender;
    
//       document.querySelector("#location").textContent 
//               = city + ", " + state;
    
//       document.querySelector("#country").textContent = country;
    
//       // Creating a new element and appending it
//       // to previously created containers
//       let img = document.createElement("img");
//       let img_div = document.getElementById("user-img");
//       img.src = image;
//       img_div.append(img);
    
//       const favicon = document.getElementById("favicon");
//       favicon.setAttribute("href", image_icon);
//     }
    
//     // Calling the function
//     getUser();
// </script>
// The script tag will contain the code that will make the API request and handle the response. This needs to be placed within the body tag or as a separate file.

// We use the async/await function that basically ensures that the data is displayed even after the page is loaded.

// You can use the console.log(...) method to check if the user is retrieving the correct piece of information. The output for the same can be seen by opening the console window in your web browser (Right Click -> Inspect -> Console or Ctrl+Shift+J in Chrome/Edge).