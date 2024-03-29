'use strict';

function getRandomImages(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson));
}

function handleImageRequest() {
  $('.js-number-entry-submit').on('click keypress', e => {
    
    $('.js-dog-gallery').html('');
    e.preventDefault();
    const number = $('.js-number-images-entry').val();
    console.log(`number of images: ${number}`);
    if (number > 50 || number < 1) {
      alert('Enter a number between 1 and 50');
    } else {
      getRandomImages(number);
    }
  });
}

function displayImage(data) {
  data.message.forEach( link => {
    console.log(link);
    $('.js-dog-gallery').append(`<img src='${link}' alt='dog'></img>`);} );
}

function main() {
  handleImageRequest();
}

$(main);