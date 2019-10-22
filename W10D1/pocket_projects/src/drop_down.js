function dogCreator() {
  const dNames = Object.keys(dogs);
  const dogsArr = [];
  dNames.forEach((dogName) => {
    let a = document.createElement('A');
    a.innerHTML = dogName;
    a.href = dogs[dogName]
    let li = document.createElement('LI');
    li.className = 'dog-link hidden';
    li.appendChild(a);
    dogsArr.push(li);
  });
  return dogsArr;
}

function attachDogLinks() {
  let dddList = document.querySelector(".drop-down-dog-list");
  dArray.forEach((dogLink) => {
    dddList.appendChild(dogLink);
  });
}

function handleEnter() {
  let ul = document.querySelector(".drop-down-dog-list");
  ul.addEventListener("mouseover", () => {
    event.target.className = 'dog-link';
  });
}

function handleLeave() {
  let ul = document.querySelector(".drop-down-dog-list");
  ul.addEventListener("mouseover", () => {
    event.target.className = 'dog-link';
  });
}

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

attachDogLinks();
handleEnter();
