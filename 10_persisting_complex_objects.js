// Problem - You want to store javascript objects(such as user profile) in localStorage, but localStorage only supports strings. You need the object to a JSON string using JSON.stringify() and later retrieve it using JSON.parse()

const companyProfile = {
  name: 'Facebook',
  address: {
    city: 'Menlo Park',
    country: 'USA',
  },
  products: ['WhatsApp', 'Instagram'],
  size: 10000,
};

// save the userProfile object tot the localstorage and convert it to strings

function saveProfile(profile) {
  localStorage.setItem('companyProfile', JSON.stringify(profile));
  console.log('The profile is saved to the local storage');
}

function loadProfile() {
  const profileValue = localStorage.getItem('companyProfile');

  if (profileValue) {
    return JSON.parse(profileValue);
  } else {
    return {};
  }
}

document.getElementById('loadButton').addEventListener('click', () => {
  saveProfile(companyProfile);
});

const loadedProfile = loadProfile();

document.getElementById('profileInfo').textContent = `

Name: ${loadedProfile.name} 
Address: ${loadedProfile.address.city}, ${loadedProfile.address.country}
Products: ${loadedProfile.products.join(' AND ')}
The size is: ${loadedProfile.size}


`;
