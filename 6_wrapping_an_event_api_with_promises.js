// # Wrapping an Event API in a Promise

// Problem - You want to wrap an event-based API to return a promise. You want to use an event-based API like XMLHttpRequest and convert it into promise based API, so that it can be handled using modern javascript patterns such as async/await or .then(')

// Solution

// This is also called promisifying an API, and it is useful while working with the older apis that don't natively supports Promises.

// function loadJSON(url) {
//   return new Promise((resolve, reject) => {
//     const promiseObj = new XMLHttpRequest();

//     promiseObj.addEventListener('load', (event) => {
//       try {
//         const parsedData = JSON.parse(event.target.responseText);

//         resolve(parsedData);
//       } catch (error) {
//         reject(new Error('Failed to parse JSOn', error));
//       }
//     });

//     promiseObj.addEventListener('error', () => {
//       reject(new Error('Network error'));
//     });

//     promiseObj.open('GET', url);
//     promiseObj.send();
//   });
// }

// loadJSON('https://jsonplaceholder.typicode.com/users/2')
//   .then((user) => {
//     console.log('The user is', user);
//   })

//   .catch((error) => {
//     console.log('The error is ', error);
//   });

// Advantages

// 1. Simplifies error handling: With promises, we don't need to depend upon the callback hells or deeply nested event listeners, you can handle the success and failure cases in clear, linear way using .then() and .catch() methods.

// 2. Modern js support: It allows use to use async/await making the asynchronous code look and behave more like the synchronous

//3. Reusability: Promisifying an API makes it reusable and can be used in multiple places in the codebase.

// XMLHTTREQUEST - It is used to interact with servers. It is used to receive the data or the response from the server without doing the full page refresh. It is used to update the certain part of the page and don't disturb the user what he is doing.

// function readFieAsDataUrl(file) {
//   return new Promise(function (resolve, reject) {
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       resolve(event.target.result);
//     };

//     reader.onerror = (error) => {
//       reject(new Error('Failed to load the error', error));
//     };
//   });
// }

// async function handleFileUpload(file) {
//   try {
//     const fileData = await readFieAsDataUrl(file);

//     console.log('The file data is', fileData);
//   } catch (error) {
//     console.log('The error is', error);
//   }
// }

// 1. It is used in file upload in web applications

// 2. Geolocation API for Mobile or Web Applications

// the navigator.geolocation API in browsers use event based callback mechanisms to get the user's location.

//3 Event Listeners for User Interactions (DOM Events)

// Sometimes you want to want for the user event like a buton click or input, and this is often done using event listenrs.  You can promisify theses events so that they can be handled in a sequesnce using promises.

// 4. WebSocket connect in react time applications

// The websocket api is event based, emitting events when a message is received, when the connect opens or an error occuers. Promisifying these websocket operations make it easier to manage real time communications.

// 5. User Media Access (WebRTC)

// When building applications that involves video or audio streaming, the navigator.mediaDevices.getUserMedia API is used to access the user's camera or microphone. Promisifying the API is helpful to handle media streaming asnchromisylu.






