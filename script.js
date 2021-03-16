const dog_url = "https://dog.ceo/api/breeds/image/random";
const doggo = document.querySelector(".doggo");
const img = document.createElement("img");

function generateDoggo() {
    img.src = "./loading.gif";
    img.alt = "Loading";
    doggo.appendChild(img);
     const promise = fetch(dog_url);
    promise
      .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        })
      .then(function(processedResponse) {
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        });
  }

document.querySelector(".generate-doggo").addEventListener("click", generateDoggo);