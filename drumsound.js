//Detecting button press
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButton;i++){
  document.querySelectorAll("button")[i].addEventListener("click",clicking );
}

function clicking(){
  var buttonHTML=this.innerHTML;
  makeSound(buttonHTML);
  buttonAnimation(buttonHTML);

}

//Detecting keyboard presse

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
      break;

      case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

      case "s":
      var kickbass=new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

      case "d":
      var audio1=new Audio('sounds/crash.mp3');
      audio1.play();
      break;

      case "j":
      var audio2=new Audio('sounds/tom-1.mp3');
      audio2.play();
      break;

      case"k":
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
      break;

      case"l":
      var audio3=new Audio('sounds/tom-4.mp3');
      audio3.play();
      break;

    default: console.log(buttonHTML);

  }
}

//Adding Animation when Button is clicked
function buttonAnimation(CurrentKey){
  var activeButton=document.querySelector("."+CurrentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
