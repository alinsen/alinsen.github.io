console.log("hello world");
//document.addEventListener("scroll", scrollColorChange);
window.onload = function(){
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  starIntervals(width, height);
  //context = startCanvas();
  //Fix this!!!
  //addStars(context, width, height);
  //setInterval(addStars(context, width, height), 100);
};

function createNewStar(){
  var newstar = document.createElement("div");
  newstar.className = "stars";
  oldstar = document.getElementById("firststar");
  document.body.insertBefore(newstar, oldstar);

};

function randomizeStars(x, y, num){
  createNewStar();
  starElementList = document.getElementsByClassName("stars");
  starClass = starElementList[num];
  console.log(starClass);
  starClass.style.display = "inline-block";
  starClass.style.left = x + "px";
  starClass.style.top = y + "px";
}

function starIntervals(width, height){
  var num = 0;
  var interval = setInterval(function(){
    console.log(document.getElementsByClassName("stars").length);
    if((document.getElementsByClassName("stars").length) > 10){
      stopInterval(interval);
    }else{
      var positionX = getRandomInt(width);
      var positionY = getRandomInt(height);
      randomizeStars(positionX, positionY, num);
      num++;
    }
  }, 6000);
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function getRandomStar(){
  return Math.floor(Math.random() * 10);
}

function stopInterval(interval){
  clearInterval(interval);
};


/* Canvas code

/*
function startCanvas(){
  var canvas = document.getElementById("stars");
  var c = canvas.getContext("2d");
  return c;
}
  function scrollColorChange(){
  document.body.style.backgroundColor = "white";
}

console.log(positionX);
console.log(positionY);
context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(20,30);
context.lineTo(30,50);
context.strokeStyle="white";
context.stroke();
context.fillStyle = "#FFFFFF";
context.rect(positionX, positionY, 100, 100);
context.strokeStyle = "#FFFFFF";
context.stroke();
*/
