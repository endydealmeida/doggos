const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggo = document.querySelector(".doggo");
let hasdoggo = false;

function generateDoggo() {
  if (hasdoggo === false) {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggo.appendChild(img);
    });
  hasdoggo = true;
  } else {
    const img = document.querySelector("img");
    img.remove();
    hasdoggo = false;
    generateDoggo();
  }
}

document.querySelector(".generate-doggo").addEventListener("click", generateDoggo);