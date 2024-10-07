function ImageLoader(url, fallbackUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.src = url;

    image.addEventListener("load", () => {
      resolve(image);
    });

    image.addEventListener("error", (error) => {
      if (!fallbackUrl || image.src === fallbackUrl) {
        reject(error);
      } else {
        image.src = fallbackUrl;
      }
    });
  });
}

const primaryUrl =
  "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b";

const secondaryUrl =
  "https://thumbs.dreamstime.com/b/not-valid-red-stamp-text-white-48506534.jpg";

ImageLoader(primaryUrl, secondaryUrl)
  .then((image) => {
    const container = document.getElementById("image-loader");
    container.appendChild(image);
  })
  .catch((error) => {
    console.error("Failed to load image:", error);
  });
