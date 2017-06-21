'use strict';

ImgObj.imgContainer = document.getElementById('container');

// Array holding the properties of the constructor and the overall total number of clicks and the total times an image was shown
ImgObj.allImgs = [];
ImgObj.totalOfClicks = 0;
ImgObj.totalShown = 0;

function ImgObj(fileName, path) {
  this.fileName = fileName;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  ImgObj.allImgs.push(this);
}

// Prototype creates images everytime the constructor is used
ImgObj.prototype.createImgEl = function(eventHandler){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('id', this.fileName);
  imgEl.setAttribute('src', this.path);
  imgEl.addEventListener('click', eventHandler);
  this.views++;
  ImgObj.totalShown++;
  return imgEl;
};

// creates random number
var getRandomNumber = function() {
  return Math.floor(Math.random() * ImgObj.allImgs.length);
};

// Assigning random numbers to variables that are returned into an array
function imagesArray(){
  var imgIndexOne = getRandomNumber();
  console.log(imgIndexOne);
  var imgIndexTwo = getRandomNumber();
  console.log(imgIndexTwo);
  var imgIndexThree = getRandomNumber();
  while (imgIndexOne === imgIndexTwo || imgIndexOne === imgIndexThree) {
    imgIndexOne = getRandomNumber();
  }
  while (imgIndexTwo === imgIndexOne || imgIndexTwo === imgIndexThree) {
    imgIndexTwo = getRandomNumber();
  }
  while (imgIndexThree === imgIndexOne || imgIndexThree === imgIndexTwo) {
    imgIndexThree = getRandomNumber();
  }

  return [imgIndexOne, imgIndexTwo, imgIndexThree];
}

// Using the random numbers from imagesArray() to pick indexes out of the allImgs array then printing them to the DOM
function renderImages(){
  ImgObj.imgContainer.textContent = '';
  var theImageArray = imagesArray();
  var imgOne = ImgObj.allImgs[theImageArray[0]];
  var imgTwo = ImgObj.allImgs[theImageArray[1]];
  var imgThree = ImgObj.allImgs[theImageArray[2]];

  var createOne = imgOne.createImgEl(clickHandler);
  var createTwo = imgTwo.createImgEl(clickHandler);
  var createThree = imgThree.createImgEl(clickHandler);

  ImgObj.imgContainer.appendChild(createOne);
  ImgObj.imgContainer.appendChild(createTwo);
  ImgObj.imgContainer.appendChild(createThree);
}

// Counting the number of clicks of each image by getting the the fileName from the id and marking a tally for when a specific fileName is clicked
function clickHandler(e){
  ImgObj.totalOfClicks++;
  if (ImgObj.totalOfClicks <= 25){
    var getImgId = event.target.id;
    for(var i = 0; i < ImgObj.allImgs.length; i++){
      if (getImgId === ImgObj.allImgs[i].fileName){
        ImgObj.allImgs[i].tally++;
        break;
      }
    }
    console.log(getImgId);
    renderImages();
  } else {
    
  }
}

// Adds data to the constructor
var bag = new ImgObj('bag', 'img/assets/bag.jpg');
var banana = new ImgObj('banana', 'img/assets/banana.jpg');
var bathroom = new ImgObj('bathroom', 'img/assets/bathroom.jpg');
var boots = new ImgObj('boots', 'img/assets/boots.jpg');
var breakfast = new ImgObj('breakfast', 'img/assets/breakfast.jpg');
var bubblegum = new ImgObj('bubblegum', 'img/assets/bubblegum.jpg');
var chair = new ImgObj('chair', 'img/assets/chair.jpg');
var cthulhu = new ImgObj('bthulhu', 'img/assets/cthulhu.jpg');
var dogDuck = new ImgObj('dogduck', 'img/assets/dog-duck.jpg');
var dragon = new ImgObj('dragon', 'img/assets/dragon.jpg');
var pen = new ImgObj('pen', 'img/assets/pen.jpg');
var petSweep = new ImgObj('pet-sweep', 'img/assets/pet-sweep.jpg');
var scissors = new ImgObj('scissors', 'img/assets/scissors.jpg');
var shark = new ImgObj('shark', 'img/assets/shark.jpg');
var sweep = new ImgObj('sweep', 'img/assets/sweep.png');
var tauntaun = new ImgObj('tauntaun', 'img/assets/tauntaun.jpg');
var unicorn = new ImgObj('unicorn', 'img/assets/unicorn.jpg');
var usb = new ImgObj('usb', 'img/assets/usb.gif');
var waterCan = new ImgObj('water-can', 'img/assets/water-can.jpg');
var wineGlass = new ImgObj('wine-glass', 'img/assets/wine-glass.jpg');

renderImages();
