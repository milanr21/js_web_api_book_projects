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
        { title: "post 1", userId: 1 },
        { title: "post 2", userId: 5 },
        { title: "post 3", userId: 2 },
      ];

      const userPosts = posts.filter((post) => post.userId === user.id);

      if (userPosts.length === 0) {
        reject(new Error("No any posts for this userId"));
      } else {
        resolve(userPosts);
      }
    }, 1000);
  });
}

async function getContentTiele(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(user);
    return posts.map((post) => post.title);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getContentTiele(5).then((titles) => {
  console.log("Titles:", titles);
});
