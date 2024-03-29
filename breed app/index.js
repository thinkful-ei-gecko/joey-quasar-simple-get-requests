'use strict';

function getDogBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      validateBreed(responseJson);
      console.log(responseJson);
    });
}

function validateBreed(data) {
  if (data.status === 'error') {
    alert(`Error: ${data.code}. Breed not valid.`);
  } else {
    displayImage(data);
  }
}

function handleImageRequest() {
  $('.js-number-entry-submit').click( e => {
    
    $('.js-dog-gallery').html('');
    e.preventDefault();
    const breed = $('.js-number-images-entry').val();
    getDogBreed(breed);
  });
}

function displayImage(data) {
  $('.js-dog-gallery').html(`<img src='${data.message}' alt='dog'></img>`);
}


function main() {
  handleImageRequest();
}

$(main);