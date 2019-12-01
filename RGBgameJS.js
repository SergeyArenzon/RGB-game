
var cubes = document.querySelectorAll(".cube");
var rgbStr = document.querySelector("#rgbStr");
var statusMsg = document.querySelector("#status");
var topBar = document.querySelector("#topBar");
var newColorBtn = document.querySelector("#newColorBtn")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


var gameOnHard = true;

//Random num from 0-5 generator
 var randomNum = Math.floor(Math.random()*6);

//All cubes initializator
function allCubesOneColor(color, cubes){
  for(var i = 0; i<cubes.length;++i){
    cubes[i].style.background = color;

  }

}

function gameOnEasy(){
  gameOnHard = false;
  topBar.style.background = "#6969F3";
  randomNum = Math.floor(Math.random()*3);
  
  for(var i = 0;i<cubes.length;i++){
    if(i===randomNum){
      randColor = getRandomRgb();     
      cubes[i].style.background=randColor;
      rgbStr.textContent ="Guess Color: "+ randColor;
      
    }
    else if(i>2){
      cubes[i].style.background = "#1A1212"; 
    } 
    else cubes[i].style.background = getRandomRgb()
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

  newColorBtn.textContent = "New Color"
  statusMsg.textContent = "";
  if(gameOnHard){
    
    topBar.style.background = "#6969F3";
    randomNum = Math.floor(Math.random()*6);

    for(var i = 0;i<cubes.length;i++){
      if(i===randomNum){
        randColor = getRandomRgb();
        
        cubes[i].style.background=randColor;
        rgbStr.textContent ="Guess Color: "+ randColor;
        
      } 
      else cubes[i].style.background = getRandomRgb()
    }
  }else gameOnEasy();
  
    
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
    
    //Correct scenario  
    if(this.style.background === randColor) {
      allCubesOneColor(randColor,cubes);
      statusMsg.textContent = "Correct!";
      topBar.style.background = randColor;
      newColorBtn.textContent = "Start again"
     
    }
    //Wrong scenario
    else{
      
      this.style.background = "#1A1212";
      
      statusMsg.textContent = "Try Again";
      
      
     
      }
    })
}

//New color btn switching
newColorBtn.addEventListener("mouseover",function(){
  newColorBtn.style.background = "#6969F3";
  newColorBtn.style.color = "#f5f5f5"
  
})
//New color btn switching
newColorBtn.addEventListener("mouseout",function(){
  newColorBtn.style.backgroundColor = 'rgb(' + 245 + ',' + 245 + ',' + 245 + ')';
  newColorBtn.style.color = "#6969F3"
})

//easy mod btn clicked
easyBtn.addEventListener("click",function(){
  if(gameOnHard){
    gameOnHard = false
    statusMsg.textContent = "";
    gameOnEasy();
    hardBtn.classList.remove("clickedBtn");
    hardBtn.classList.add("unClickedBtn")
    easyBtn.classList.remove("unClickedBtn")
    easyBtn.classList.add("clickedBtn");
  }
  
})
  


//hard mod btn clicked
hardBtn.addEventListener("click",function(){
  if(!gameOnHard){
    gameOnHard = true;
    easyBtn.classList.remove("clickedBtn");
    easyBtn.classList.add("unClickedBtn")
    hardBtn.classList.remove("unClickedBtn")
    hardBtn.classList.add("clickedBtn");
    newColorBtnClicked();
  }
  
})

//Hover over unclicked btn

hardBtn.addEventListener("mouseover",function(){
  if (!gameOnHard){
    hardBtn.classList.add("almostClicked")    
  }  
})

hardBtn.addEventListener("mouseout",function(){
  hardBtn.classList.remove("almostClicked") 
})


easyBtn.addEventListener("mouseover",function(){
  if (gameOnHard){
    easyBtn.classList.add("almostClicked")   
  }  
})

easyBtn.addEventListener("mouseout",function(){
  
  easyBtn.classList.remove("almostClicked")  
})