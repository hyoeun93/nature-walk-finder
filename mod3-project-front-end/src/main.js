document.addEventListener('DOMContentLoaded', function() {
//create variables
const enterYourName = document.querySelector('.enter-your-name')
const quizForm = document.querySelector('.quiz-form')
// let modal = document.querySelector(".modal")
let nameSubmitBtn = document.querySelector('.submit-btn')
let closeBtn = document.querySelector(".close-btn")
let solveQuiz = document.querySelector('.solve-this-quiz')
let qSubmitButton = document.querySelector('.qsubmit-btn')
let appContainer = document.querySelector('main')


console.log(enterYourName);

enterYourName.addEventListener('submit', displayQuizForm)

function displayQuizForm(event){
  event.preventDefault()
  quizForm.innerHTML = `
  <h1>What paths in NYC do you want to take a walk? Take this quiz!</h1>
  <form class="solve-the-quiz">
    <h3>What would you like as far as difficulty?</h3>
    <select name="difficulty">
    <option value="one"> Level 1 </option>
    <option value="two"> Level 2 </option>
    <option value="three"> Level 3 </option>
    <option value="four"> Level 4 </option>
  </select>

    <h3>What kind of surface type do you prefer walking on?</h3>
    <select name="difficulty">
    <option value="one"> Paved </option>
    <option value="two"> Grass </option>
    <option value="three"> Boardwalk </option>
    <option value="four"> Wood Chips </option>
  </select>

    <h3>What kind of landform are you looking for?</h3>
    <select name="difficulty">
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



quizForm.addEventListener('click', function(event){

  if(event.target.className === "qsubmit-btn"){
    console.log(event.target)
    
    function getPaths() {
      return fetch(('http://localhost:3000/paths'))
      .then(res => res.json())
    }
     
    
    getPaths()
    .then(json => {
      json.forEach(path => {
        let pathCard = document.createElement('div')
        pathCard.setAttribute('class', 'card')
        pathCard.dataset.id = path.id
        
        pathCard.innerHTML = renderCard(path)
        
        
        appContainer.append(pathCard)
        
      })
    })

    
    
    // fetch('http://localhost:3000/paths')
    //   .then(response => response.json())
    //   .then(paths => paths.forEach(path => {
    //     let div = document.createElement('DIV')
    //     div.className = "show-paths"
    //     let ul = docoument.createElement('UL')
    //     ul.innerHTML += `<ul class name="path-div" data-id=${path.id}>
    //                       <h1> ${path.path_name} </h1>
    //                       <p> ${path.difficulty}</p>
    //                       <p> ${path.gen_topog}</p>
    //                       </ul>`
    //     div.appendChild(ul)

    //   }))
  }
})

// nameSubmitBtn.onclick = function(){
//     modal.style.display = "block"
//   }

//   closeBtn.onclick = function(){
//     modal.style.display = "none"
//   }

//   window.onclick = function(e){
//       e.preventDefault();
//     if(e.target == modal){
//       modal.style.display = "none"
//     }
//   }



//create EventListener


//talk to a server using fetch(make a fetch get request to the paths show page)


//LOGIC/DOM Manipulation

})






    