// Problem - You want to persist an object that can't be directly seriealized to a JSON object. For example, the user profile object might have  Date object in it that specifies the last date it was updated. This

// solution - Use replacer and revive functions with JSON.stringify() and JSON.parse() to provide the custom serialization for the complex objects.

console.log('the data is updated');

const userProfile = {
  firstName: 'milan',
  lastName: 'rawal',
  lastUpdated: new Date(2024, 5, 12),
};

function replace(key, value) {
  if (key === 'lastUpdated') {
    return value.getTime();
  }
  return value;
}

const jsonString = JSON.stringify(userProfile, replace());

console.log('The final is', jsonString);

function revive(key, value) {
  if (key === 'lastUpdated') {
    return new Date(value);
  }
  return value;
}

const parsedString = JSON.parse(jsonString, revive);

console.log('The parsed string is', parsedString);

document.getElementById('saveDate').addEventListener('click', () => {
  localStorage.setItem('userProfile', jsonString);
});

document.getElementById('loadDate').addEventListener('click', () => {
  const getFinal = JSON.parse(localStorage.getTime('userProfile'), revive());
  console.log('Get date from the local storage', getFinal);
});
