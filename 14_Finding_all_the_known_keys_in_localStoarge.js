// Finding all the known keys in  localstorage

// Problem - You want to know all the keys that are currently in local storage for the current origin

// Solution

// Use localstorage.length to return the count of items in storage.
// Use localStorage.key(index), we can access each key by index, allowing and to loop through and list all keys.

console.log('Finding all the keys in local storage');

function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
}

console.log('All the keys are', getAllKeys());

// Real-Life Application

// This function could be used in debugging tools to show all keys in localStorage or in apps with complex state management, where we may want to audit all stored data.
