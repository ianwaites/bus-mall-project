'use strict';

// The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.

// - In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

// - Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

// - To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

// - After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

var images = document.getElementById('container');

var allImages = [];
//queImages stores last 3 images seen
var newImages = [];
//moreImages is new images to print on screen
var oldImages = [];

var imageTotalClicks = 0;

var chartDrawn = false;

var resultsChart;

var canvas = document.getElementById('results');

function ImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  allImages.push(this);
}

// Creates random number

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

function checkPics (array, value) {
  for (var i = 0; i < allImages.length; i++) {
    if (value === array[i]) {
      return false;
    }
  } return true;
}

function getRandomNumber() {
  newImages = [];
  while (newImages.length < 3) {
    var randomNumber = Math.floor(Math.random() * allImages.length);
    if (checkPics(newImages,allImages[randomNumber]) && checkPics(oldImages, allImages[randomNumber])) {
      newImages.push(allImages[randomNumber]);
      allImages[randomNumber].views ++;
    }
  }  oldImages = newImages;
};

function renderImage(){
  getRandomNumber();
  for (var i = 0; i < newImages.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newImages[i].path;
    imgEl.id = newImages[i].name;
    images.appendChild(imgEl);
  }
};

// Renders the button
function renderButton(){
  var butEl = document.createElement('button');
  butEl.textContent = 'View Graph';
  images.appendChild(butEl);
}

var testStorage = function() {
  if (localStorage.data) {
    allImages = JSON.parse(localStorage.data)
  } else {
    renderImage();
  }
}

// Event handler
function handleClick(e) {
  console.log('click');
  for(var i = 0; i < newImages.length; i++){
    var getImgId = event.target.id;
    if (getImgId === newImages[i].name){
      newImages[i].tally++;
      imageTotalClicks++;
      localStorage.setItem('userData', JSON.stringify(allImages));
      var remImg = document.getElementById('container');
      while (remImg.firstChild) {
        remImg.removeChild(remImg.firstChild)
      }

    if(imageTotalClicks === 25){
    var remImg = document.getElementById('container');
    while (remImg.firstChild) {
      remImg.removeChild(remImg.firstChild)
      }
      images.removeEventListener('click', handleClick);
          var secEl = document.createElement('section');
          secEl.id = 'results';
          var h2El = document.createElement('h2');
          h2El.textContent = 'Results';
          secEl.appendChild(h2El);
          var ulEl = document.createElement('ul');
          for (var i = 0; i < allImages.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = allImages[i].tally + ' votes for ' + allImages[i].name + '.';
            ulEl.appendChild(liEl);
          }
          secEl.appendChild(ulEl);
          images.appendChild(secEl);
          renderButton();
          createData();
          drawChart();
        } else {
        renderImage();
      }
    }
  }
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
testStorage;
renderImage();



var chartNames = [];
var chartTally = [];
function createData () {
for (var i = 0; i < allImages.length; i++) {
  chartNames.push(allImages[i].name);
  chartTally.push(allImages[i].tally);
  };
}


var chartData = {
  labels: chartNames, // titles array we declared earlier
  datasets: [
    {
      data: chartTally, // votes array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple'
      ]
    }]
};

function drawChart() {
  var ctx = canvas.getContext('2d');
  resultsChart = new Chart(ctx,{
    type: 'bar',
    data: chartData,
    options: {},
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}




images.addEventListener('click', handleClick);
