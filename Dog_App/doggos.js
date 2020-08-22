const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('#breed');

fetch(BREEDS_URL)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  })

select.addEventListener('change', function(event) {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

  getDoggo(url);
});

const img = document.querySelector('.main-image');
const spinner = document.querySelector('.loading-dog');

function getDoggo (url) {
  spinner.classList.add('show');
  img.classList.remove('show');
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      img.src = data.message;
    })
  }
  
img.addEventListener('load', function () {
  spinner.classList.remove('show');
  img.classList.add('show');    
})
