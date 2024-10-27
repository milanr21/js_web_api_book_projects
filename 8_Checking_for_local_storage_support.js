// // Checking for Web Storage Support

// // Problem - You want to check if local storage is available before using it to avoid crashing of the app. You also want to handle the situation where local storage is available but blocked by the user settings.

// // Solutions - check the global window object for the localStorage property to verify that the browser supports local storage. If the property is present, you can use local storage. If the property is not present, you can use cookies as a fallback.

// function isLocalStorageAvailable() {
//   try {
//     const testKey = 'test';

//     window.localStorage.setItem(testKey, 'testValue');
//     window.localStorage.removeItem(testKey);
//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// // save the data to local storage if available

// function saveDataToLocalStorage() {
//   if (isLocalStorageAvailable()) {
//     localStorage.setItem('name', 'milan rawal');

//     document.getElementById('status').textContent =
//       'Data saved to local storage';
//   } else {
//     document.getElementById('status').textContent =
//       'Local storage is not available';
//   }
// }

// // locd data from local storage if available

// function loadDataFromLocalStorage() {
//   if (isLocalStorageAvailable()) {
//     const username = localStorage.getItem('name');

//     if (username) {
//       document.getElementById('status').textContent = `Loaded name ${username}`;
//     } else {
//       document.getElementById('status').textContent = 'No data found';
//     }
//   } else {
//     document.getElementById('status').textContent =
//       'Local Storage is not found';
//   }
// }

// document
//   .getElementById('saveButton')
//   .addEventListener('click', saveDataToLocalStorage);

// document
//   .getElementById('loadButton')
//   .addEventListener('click', loadDataFromLocalStorage);

// // Real World Applications

// // Local Storage is used to store small amounts of data that don't need to be send to servers like

// // usr preferences, eg theme settings, langauges
// // session data,
// // offline data eg saving the data locally where there is no browser

function isLocalStorageAvailable() {
  try {
    const testKey = 'testLocalStorage';
    window.localStorage.setItem(testKey, 'testValue');
    window.localStorage.removeItem(testKey);

    return true;
  } catch (error) {
    console.log('Error while checking local storage', error);
  }
}

function saveDataToLocalStorage() {
  if (isLocalStorageAvailable()) {
    localStorage.setItem('name', 'Milan');
    document.getElementById('status').textContent = 'Data set to local storage';
  } else {
    document.getElementById('status').textContent =
      'Local Storage is not available';
  }
}

function loadDataFromTheLocalStorage() {
  if (isLocalStorageAvailable()) {
    const username = localStorage.getItem('item');

    if (username) {
      document.getElementById(
        'checkValue'
      ).textContent = `The value from local Storage is ${username}`;
    } else {
      document.getElementById('checkValue').textContent = 'No data found';
    }
  } else {
    document.getElementById('checkValue').textContent =
      'Local Storage is not found';
  }
}

document
  .getElementById('saveButton')
  .addEventListener('click', saveDataToLocalStorage);
document
  .getElementById('loadButton')
  .addEventListener('click', loadDataFromTheLocalStorage);
