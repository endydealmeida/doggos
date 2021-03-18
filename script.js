const breeds_url = "https://dog.ceo/api/breeds/list/all";
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
    breeds_select.className = "breeds-select";
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
          option.value = key + "/" + subBreed;
          breeds_select.appendChild(option);
        })
      }
    });
  })

const img = document.createElement("img");
function generateDoggo() {
  const doggo = document.querySelector(".div-doggo");
  img.src = "./loading.gif";
  img.alt = "Loading";
  doggo.appendChild(img);
  const breeds_select = document.querySelector(".breeds-select");
  if (breeds_select.value === "random") {
    const dog_url = "https://dog.ceo/api/breeds/image/random";
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
  } else {
    const dog_url = "https://dog.ceo/api/breed/" + breeds_select.value + "/images/random";
    const promise = fetch(dog_url);
    promise
      .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function (processedResponse) {
        img.src = processedResponse.message;
        img.alt = "Cute " + breeds_select.options[breeds_select.selectedIndex].text + " doggo";
      });
  }
}

document.querySelector(".button-generate").addEventListener("click", generateDoggo);