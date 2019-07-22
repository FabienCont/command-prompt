import './scss/style.scss';
import './images/windowsCommandPrompt.png'


var cmdContainer =document.querySelector(".container-cmd");


var showCmd= function(){
  cmdContainer.classList.add("container-cmd-show");
}

showCmd();
