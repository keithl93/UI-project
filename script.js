const characterContainer = document.querySelector(".characters-container")

// Fetch data from API
fetch("https://rickandmortyapi.com/api/character") // Replace with your API endpoint
  .then((response) => response.json())
  .then((data) => {
    displayCharacters(data.results);
  });


function displayCharacters(characters) {
  characters.forEach(character => {
    let characterHTML = `
      <img class="char-images" src="${character.image}" alt="${character.name}"/>
    `

    characterContainer.insertAdjacentHTML("beforeend", characterHTML)
  })

  const characterImages = document.querySelectorAll(".char-images")
  characterImages.forEach((charImage, index) => {
    charImage.addEventListener("click", () => openModal(characters[index]))
  })
}

// Modal implementation with help from Jason Watmore: https://jasonwatmore.com/post/2023/01/04/vanilla-js-css-modal-popup-dialog-tutorial-with-example
// open modal
function openModal(char) {
  const charImg = document.querySelector("#modal-img")
  const title = document.querySelector("#modal-title")
  const status = document.querySelector("#modal-status")
  const gender = document.querySelector("#modal-gender")
  const species = document.querySelector("#modal-species")

  charImg.src = char.image
  title.innerText = char.name
  status.innerText = char.status
  gender.innerText = char.gender
  species.innerText = char.species

  document.getElementById("modal-1").classList.add('open');
  document.body.classList.add('jw-modal-open');
}

// close currently open modal
let closeBtn = document.querySelector("#close-btn")
closeBtn.addEventListener("click", closeModal)
function closeModal() {
  document.querySelector('.jw-modal.open').classList.remove('open');
  document.body.classList.remove('jw-modal-open');
}