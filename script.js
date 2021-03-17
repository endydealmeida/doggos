const dog_url = "https://dog.ceo/api/breeds/image/random";
const breeds_url = "https://dog.ceo/api/breeds/list/all";
const img = document.createElement("img");

const promise = fetch(breeds_url);
promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    const breeds_list = processedResponse.message;
    const div_select = document.querySelector(".div-select");
    const breeds_select = document.createElement("select");
    div_select.appendChild(breeds_select);
    const option = document.createElement("option");
    option.textContent = "random";
    option.value = "random";
    breeds_select.appendChild(option);

    Object.keys(breeds_list).forEach(function (key) {
      if (breeds_list[key].length === 0) {
        const option = document.createElement("option");
        option.textContent = key;
        option.value = key;
        breeds_select.appendChild(option);
      } else {
        breeds_list[key].forEach(subBreed => {
          const option = document.createElement("option");
          option.textContent = key + " " + subBreed;
          option.value = key + " " + subBreed;
          breeds_select.appendChild(option);
        })
      }
    });
  })

function generateDoggo() {
  const doggo = document.querySelector(".div-doggo");
  img.src = "./loading.gif";
  img.alt = "Loading";
  doggo.appendChild(img);
  const promise = fetch(dog_url);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
    });
}

document.querySelector(".generate-doggo").addEventListener("click", generateDoggo);