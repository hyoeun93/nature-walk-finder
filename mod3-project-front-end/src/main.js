document.addEventListener('DOMContentLoaded', function() {
//create variables
const enterYourName = document.querySelector('.enter-your-name')
let modal = document.querySelector(".modal")
let nameSubmitBtn = document.querySelector('.submit-btn')
let closeBtn = document.querySelector(".close-btn")

nameSubmitBtn.onclick = function(){
    modal.style.display = "block"
  }
  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
      e.preventDefault();
    if(e.target == modal){
      modal.style.display = "none"
    }
  }
//create EventListener


//talk to a server using fetch(make a fetch get request to the paths show page)

//LOGIC/DOM Manipulation



})






    