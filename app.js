'use strict';

// The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.

// - In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

// - Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

// - To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

// - After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

var images = document.getElementById('container');
images.addEventListener('click', handleClick);

var allImages = [];
var queImages = [];
var moreImages = [];

var imageTotalClicks = 0;
var imageTotalViews = 0;

function ImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  allImages.push(this);
}

// Creates random number
function getRandomNumber() {
  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * allImages.length);
    queImages.push(allImages[randomNumber]);
    moreImages.push(allImages[randomNumber]);
  }
};

// creating another array with 3 different images
// function getArray() {
//   getRandomNumber();
//   for (var i = 0; i < queImages.length; i++) {
//     var x = queImages[i];
//     moreImages.push(queImages[x]);
//   }
// };

// function checkImages(){
//   getRandomNumber();
//   getArray();
//   console.table(moreImages);
//   var imageOne = queImages[0];
//   var imageTwo = queImages[1];
//   var imageThree = queImages[3];
//   while(imageOne === imageTwo || imageOne === imageThree){
//     imageOne = moreImages[0];
//   }
//   while(imageTwo === imageOne || imageTwo === imageThree){
//     imageTwo = moreImages[1];
//   }
//   while(imageThree === imageOne || imageThree === imageTwo){
//     imageThree = moreImages[2];
//   }
// }

function renderImage(){
  getRandomNumber();
  for (var i = 0; i < queImages.length; i++) {

    var imgEl = document.createElement('IMG');
    imgEl.src = queImages[i].path;
    imgEl.id = queImages[i].name;
    images.appendChild(imgEl);
  }
};

// Renders the button
function renderButton(){
  var butEl = document.createElement('button');
  butEl.textContent = 'View Graph';
  images.appendChild(butEl);
}

// Event handler
function handleClick(e) {
  images.innerHTML = '';
  imageTotalClicks++;
  console.log('click');
  if(imageTotalClicks <= 25){
    var getImgId = event.target.id;
    for(var i = 0; i < allImages.length; i++){
      if (getImgId === allImages[i].name){
        allImages[i].tally++;

      }
    }
    renderImage();
  } else {
    renderButton();
  }
  queImages = [];
}

var bag = new ImageObj('bag', 'img/assets/bag.jpg');
var banana = new ImageObj('banana', 'img/assets/banana.jpg');
var bathroom = new ImageObj('bathroom', 'img/assets/bathroom.jpg');
var boots = new ImageObj('boots', 'img/assets/boots.jpg');
var breakfast = new ImageObj('breakfast', 'img/assets/breakfast.jpg');
var bubblegum = new ImageObj('bubblegum', 'img/assets/bubblegum.jpg');
var chair = new ImageObj('chair', 'img/assets/chair.jpg');
var cthulhu = new ImageObj('bthulhu', 'img/assets/cthulhu.jpg');
var dogDuck = new ImageObj('dogduck', 'img/assets/dog-duck.jpg');
var dragon = new ImageObj('dragon', 'img/assets/dragon.jpg');
var pen = new ImageObj('pen', 'img/assets/pen.jpg');
var petSweep = new ImageObj('pet-sweep', 'img/assets/pet-sweep.jpg');
var scissors = new ImageObj('scissors', 'img/assets/scissors.jpg');
var shark = new ImageObj('shark', 'img/assets/shark.jpg');
var sweep = new ImageObj('sweep', 'img/assets/sweep.png');
var tauntaun = new ImageObj('tauntaun', 'img/assets/tauntaun.jpg');
var unicorn = new ImageObj('unicorn', 'img/assets/unicorn.jpg');
var usb = new ImageObj('usb', 'img/assets/usb.gif');
var waterCan = new ImageObj('water-can', 'img/assets/water-can.jpg');
var wineGlass = new ImageObj('wine-glass', 'img/assets/wine-glass.jpg');

// checkImages();
renderImage();
