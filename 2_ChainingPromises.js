// Problem - You want to call several Promise based APIs in sequence. Each promise depends on the result of the previous one

// Solution - use a chain of promises to run the asynchronus task in sequence. Image a blog application with two apis.

// getUser(id) - Loads a user from the user ID db.
// getPosts(user) - loads all the blog posts for the given user

// if you want to to load the blog post , you first need to load the user object - you can't get all the post until the user details is loaded

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id,
        name: "John Doe",
      };
      resolve(user);
    }, 1000);
  });
}

function getPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        {
          title: "post 1",
          userId: 1,
        },
        {
          title: "post 2",
          userId: 5,
        },
        {
          title: "post 3",
          userId: 2,
        },
      ];

      const userPosts = posts.filter((post) => post.userId === user.id);

      if (userPosts.length === 0) {
        reject(new Error("No posts found for this user"));
      } else {
        resolve(userPosts);
      }
    }, 1000);
  });
}

function getTittleContents(userId) {
  return getUser(userId)
    .then((user) => {
      return getPosts(user);
    })
    .then((posts) => {
      return posts.map((post) => post.title);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

getTittleContents(2).then((titles) => {
  console.log("Titles:", titles);
});
