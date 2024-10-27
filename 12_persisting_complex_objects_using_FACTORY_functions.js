// Factory Function

// Use a factory function to create user Profile objects. It takes some arguments and returns a new Object containing data based on those arguments. A factory function is similar to the class constructor, but the main difference is that you use a factory function with the new operator, but a factory is called directly like any other function.

function createUser(firstName, lastName) {
  return {
    firstName,
    lastName,
    lastUpdated: new Date(),
    toJSON() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        lastUpdated: this.lastUpdated.getTime(),
      };
    },
  };
}

const userProfile = createUser('Milan', 'Rawal');

console.log(JSON.stringify(userProfile));
