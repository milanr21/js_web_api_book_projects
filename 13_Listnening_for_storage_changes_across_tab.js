// Listening for Storage Changes Across Tab

// Problem - You want to receive a notification when another tab on the same origin makes changes to local storage.

// In certain web apps, it's helpful for users to have real time data synchronization across multiple tabs. In an web app with settings or preferences stored in the localstorage, an change made in one tab updates in all other tabs that are open synchronously.

// Suppose we have a color picker, and we want to update the color in their open tabs whenever it changes in one tab.

window.addEventListener('storage', (e) => {
  if (e.key === 'selectedColor') {
    console.log('The event has been changed', e.newValue);
    document.getElementById('colorPicker').value = e.newValue;
  }
});

document.querySelector('#colorPicker').addEventListener('input', (e) => {
  localStorage.setItem('color', e.target.value);
});

// Real Life Examples

// The main use case for the storage event is to keep the multiple sessions in sync with each other in real time.
// It is common in settings management. For example, if a user changes their theme in one tab, all other tab can  reflect updated theme, keeping the experience consistent/.
