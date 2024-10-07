// Using Promises in Parallel

// problem - you want to execute a series of asynchromous task in parallel using Promises

// Solution - use Promise.all(). It takes array of promises. It returns the new promise if all the promises are fulfilled and resolves() is used, else rejects it if one of the promise in rejected

// Promise.all([getUser(1), getUser(2), getUser(3), getUser(4), getUser(5)])
//   .then((users) => {
//     console.log("Users:", users);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// If you have multiple tasks that doesn't depend of each other, then promise.all() is good choice.
// Promise.all() returns another promise once all the three users have loaded successfully
// If one of the user fails to load, the Promise returned by Promise.all() is rejected with the error that occured. The results of other promises are lost

// If you want to get the results even any one of the promise is rejected, you can use Promise.allSetteled(), it will return a new Promise just like the Promise.all(). However, this promise is always fulfilled onnce the promise is settled. (Either the promise is resolved or rejected)

// Promise.allSettled([getUser(1), getUser(2), getUser(3), getUser(4), getUser(5)])
//   .then((users) => {
//     console.log("Users:", users);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
