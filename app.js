'use strict';

// The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.

// - In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

// - Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

// - To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

// - After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

var allImages = [];
var queImages = [];
var images = document.getElementById('container');
var imageOneClicks = 0;
var imageTwoClicks = 0;
var imageThreeClicks = 0;

function imageObj(name, path, tally, views) {
  this.name = name;
  this.path = path;
  this.tally = tally;
  this.views = views;
  allImages.push(this);
}

// creates random number
var getRandomNumber = function() {
  for (var i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * allImages.length);
    queImages.push(allImages[randomNumber]);
  }
};

var renderImage = function() {
  getRandomNumber();
  for (var i = 0; i < queImages.length; i++) {
    var liEl = document.createElement('li');
    var imgEl = document.createElement('IMG');

    imgEl.src = queImages[i].path;
    imgEl.id = queImages[i].name;
    liEl.appendChild(imgEl);
    images.appendChild(liEl);
  }

};

// function myFunction() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "img_pulpit.jpg");
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
// }

var bag = new imageObj('bag', 'img/assets/bag.jpg');
var banana = new imageObj('banana', 'img/assets/banana.jpg');
var bathroom = new imageObj('bathroom', 'img/assets/bathroom.jpg');
var boots = new imageObj('boots', 'img/assets/boots.jpg');
var breakfast = new imageObj('breakfast', 'img/assets/breakfast.jpg');
var bubblegum = new imageObj('bubblegum', 'img/assets/bubblegum.jpg');
var chair = new imageObj('chair', 'img/assets/chair.jpg');
var cthulhu = new imageObj('bthulhu', 'img/assets/cthulhu.jpg');
var dogDuck = new imageObj('dogduck', 'img/assets/dog-duck.jpg');
var dragon = new imageObj('dragon', 'img/assets/dragon.jpg');
var pen = new imageObj('pen', 'img/assets/pen.jpg');
var petSweep = new imageObj('pet-sweep', 'img/assets/pet-sweep.jpg');
var scissors = new imageObj('scissors', 'img/assets/scissors.jpg');
var shark = new imageObj('shark', 'img/assets/shark.jpg');
var sweep = new imageObj('sweep', 'img/assets/sweep.png');
var tauntaun = new imageObj('tauntaun', 'img/assets/tauntaun.jpg');
var unicorn = new imageObj('unicorn', 'img/assets/unicorn.jpg');
var usb = new imageObj('usb', 'img/assets/usb.gif');
var waterCan = new imageObj('water-can', 'img/assets/water-can.jpg');
var wineGlass = new imageObj('wine-glass', 'img/assets/wine-glass.jpg');

function handleClick(e) {
  console.log('click');
  images.innerHTML = '';
  queImages = [];
  var imageOne = document.getElementById('imageone');
  var imageTwo = document.getElementById('imagetwo');
  var imageThree = document.getElementById('imagethree');

  if(event.target.id === 'imageone' || event.target.id === 'imagetwo' || event.target.id === 'imagethree') {

  }
  renderImage();
}

images.addEventListener('click', handleClick);
