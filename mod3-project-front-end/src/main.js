document.addEventListener('DOMContentLoaded', function() {
//create variables
const enterYourName = document.querySelector('.enter-your-name')
const quizForm = document.querySelector('.quiz-form')
let nameSubmitBtn = document.querySelector('.submit-btn')
let closeBtn = document.querySelector(".close-btn")
let solveQuiz = document.querySelector('.solve-this-quiz')
let qSubmitButton = document.querySelector('.qsubmit-btn')
let appContainer = document.querySelector('main')
const likeBtn = document.querySelector('.like-btn')
const detailsDiv = document.querySelector('.details-div')

//Add EventListener
enterYourName.addEventListener('submit', displayQuizForm)

function displayQuizForm(event){ 
  event.preventDefault()
  quizForm.innerHTML = `
  <h1>What paths in NYC do you want to take a walk? Take this quiz!</h1>
  <form class="solve-the-quiz">
    <h3>What would you like as far as difficulty?</h3>
  <select name="difficulty">
    <option value="None"> Select </option> 
    <option value="one"> Level 1 </option>
    <option value="two"> Level 2 </option>
    <option value="three"> Level 3 </option>
    <option value="four"> Level 4 </option>
    <input type="image" id="image" alt="Login" style="width:200px; style="height:200px;
    src=" https://cdn.dribbble.com/users/159981/screenshots/1536035/tag.png"/>
  </select>


    <h3>What kind of surface type do you prefer walking on?</h3>
    <select name="surface_type">
    <option value="None"> Select </option> 
    <option value="one"> Paved </option>
    <option value="two"> Grass </option>
    <option value="three"> Boardwalk </option>
    <option value="four"> Wood Chips </option>

    
  </select>

    <h3>What kind of landform are you looking for?</h3>
    <select name="topography">
    <option value="None"> Select </option> 
    <option value="one"> Sloped </option>
    <option value="two"> Wavy </option>
    <option value="three"> Level </option>
    <input type="image" id="image" alt="Login" style="width:150px; style="height:150px;
    src="https://previews.123rf.com/images/nyker/nyker1404/nyker140400165/28515091-walking-path-central-park-new-york-city.jpg"/>
   
    </select>
  <br>
  <br>
    <input type="submit" value="Submit" class="qsubmit-btn">
  </form>
  `
}

//----------get paths on page with event listener and fetch-----------
//fetch paths when submit button is clicked
quizForm.addEventListener('click', function(event){
  event.preventDefault()
  if(event.target.className === "qsubmit-btn"){
    // debugger 
    
    function getPaths() {
      return fetch(('http://localhost:3000/paths'))
      .then(res => res.json())
   
    }
     
    //once the paths are fetched, append them to the page
    getPaths()
    .then(json => {
      quizForm.innerHTML = ""
      json.forEach(path => {
        let pathDiv = document.createElement('div')
        
        // pathDetailsDiv.setAttribute('class', 'details-div')
        // pathCard.dataset.id = path.id
        
        pathDiv.innerHTML = `<data-id=${path.id}>
                              <h2> Path Name: ${path.name}</h2>
                              <h5>Difficulty Level: ${path.difficulty}</h5>
                              <h5> Surface Type: ${path.surface_type} </h5>
                              <h5> Does it have trail markers? ${path.trail_markers} </h5>
                              <h5> Landform: ${path.topography}</h5>
                              <img src="https://previews.123rf.com/images/nyker/nyker1404/nyker140400165/28515091-walking-path-central-park-new-york-city.jpg"style="width:150px; style="height:150px;/>
                              <button class="like-btn"> Like </button>
                              <button class="delete-btn"> Delete </button> 
                              </div>`

        
        detailsDiv.append(pathDiv)
        
      })
    })
//MAYBE MAKE THE 5 SUGGESTED PATHS COME BACK TO THE USER
// AS AN AUTOMATIC CAROUSEL/SLIDESHOW TYPE THING

//------------like button event listener and fetch---------------  
    document.addEventListener('click', function() {
      if (event.target.className === "like-btn"){
        //show a popup with a button that says "see map location"
        // <button class="map-btn> Show Map </button> 
        console.log(event.target)
      }
    })
  }

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
 
 
  
})

//-----------delete button event listener and fetch------------
})






    