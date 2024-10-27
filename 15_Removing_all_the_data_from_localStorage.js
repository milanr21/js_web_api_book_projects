// Removing all the data from the local storage

// You want to remove all the data from the local storages

// Use the removeItem() and clear method as appropriate.

// To remove a particular key/value pair from local storage, call localStoarge.removeItem with key

localStorage.removeItem('name');

// call localStorage.clear to remove all data from localStorage for the current origin

localStorage.clear();

// Discussion
// Browsers limit the amount of data that you can store in Web Storage.
// Typically, the limit is about 5 MB. To avoid running out of space and
// throwing an error, you should remove items once they are no longer needed.
// Depending on what you’re using Web Storage for, you can also provide a
// way for your users to clear stored data. Consider an emoji picker that stores
// recently selected emojis in local storage. You might add a Clear Recents
// button that removes these items
