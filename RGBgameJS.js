
var cubes = document.querySelectorAll(".cube");
var rgbStr = document.querySelector("#rgbStr");
var statusMsg = document.querySelector("#status");
var topBar = document.querySelector("#topBar");
var newColorBtn = document.querySelector("#newColorBtn")


//Random num from 0-5 generator
 var randomNum = Math.floor(Math.random()*6);

//All cubes initializator
function allCubesOneColor(color, cubes){
  for(var i = 0; i<cubes.length;++i){
    cubes[i].style.background = color;

  }

}

//Generates new color func
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}



/////////////////////////////////////Restart event/////////////////////////////////////

//New color btn was clicked func
function newColorBtnClicked(){

   randomNum = Math.floor(Math.random()*6);

  for(var i = 0;i<cubes.length;i++){
    if(i===randomNum){
       randColor = getRandomRgb();
      
      cubes[i].style.background=randColor;
      rgbStr.textContent ="Guess Color: "+ randColor;
      
    } 
    else cubes[i].style.background = getRandomRgb()
  }
console.log("randcolor inside fun: "+randColor)
}

//New color btn was clicked
newColorBtn.addEventListener("click",newColorBtnClicked);

/////////////////////////////////////Restart event/////////////////////////////////////



//cubes creator

for(var i = 0;i<cubes.length;i++){
  if(i===randomNum){
    var randColor = getRandomRgb();
    cubes[i].style.background=randColor;
    rgbStr.textContent ="Guess Color: "+ randColor;
    
  } 
  else cubes[i].style.background = getRandomRgb()
}


//cubes click listeners

for(var i = 0; i<cubes.length; i++){
 
  cubes[i].addEventListener("click",function(){
    console.log("randcolor in inlistener: "+randColor)
    //Correct scenario  
    if(this.style.background === randColor) {
      allCubesOneColor(randColor,cubes);
      statusMsg.textContent = "Correct!";
      topBar.style.background = randColor;
      
    }
    //Wrong scenario
    else{
      
      this.style.background = "#1A1212";
      statusMsg.textContent = "Wrong! Try Again";
      
     
      }
    })
}




