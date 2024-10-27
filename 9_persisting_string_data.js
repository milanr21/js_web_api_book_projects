// Persisting String data

// Problem - You want to store the selected color from an HTML picker to localStorage so that the value persists even i the page is refreshed.

// console.log('IT is working');

// const colorPicker = document.getElementById('colorPicker');

// const storedValue = localStorage.getItem('color');

// if (storedValue) {
//   console.log('The color value is', storedValue);

//   colorPicker.value = storedValue;
// } else {
//   console.log('No color value found');
// }

// colorPicker.addEventListener('change', (e) => {
//   const newColor = e.target.value;

//   localStorage.setItem('color', newColor);

//   console.log('The new color value is', newColor);
// });

console.log('colorPicker');

const colorPicker = document.getElementById('colorPicker');

const storedValue = localStorage.getItem('color');

if (storedValue) {
  colorPicker.value = storedValue;

  console.log('The color picker value is', storedValue);
} else {
  console.log('there is no color');
}

colorPicker.addEventListener('change', (e) => {
  const newValue = e.target.value;

  localStorage.setItem('color', newValue);

  console.log('The new local storage value is', newValue);
});
