// Chapter 2 - Simple Persistance with the Web Storage API

// The Web Api persists simple data locally in the user's browsers. You can retrive the data later, even after closing or reopening the browser window

// This API has storage interface that process the data access and persistance. You don't directly create the instance of the Storage

// The are two global instances window.localStorage and window.sessionStorage

// Getting and setting items

// Web Storage can only store the string values. Each value has a key that you can use to look it up.

// getItem(key) - it returns the string bound to the key or null if the key doesn't exist.

// setItem(key, value) - sets the
// clear() - Deletes all stored data for the current origin.

// Disadavatages

// Storage limit - need to convert to json object
// size limit - only 5mb
// security concerns - vulnerable to cross-site scripting(XSS), steals the locally persisted data.
