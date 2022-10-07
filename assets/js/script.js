/* let questionIndex = 0; 
showQuestions(); 
 
/* write function for commence button  


function letsBegin() {
  document.getElementById("begin").style.display = "none"; 
  document.getElementById("q1").style.display = "block"; 
}


function showQuestions() { 
   
  
  let i; 
  let questions = document.getElementsByClassName("questions-container"); 
  for (i=0; i< questions.length; i++ ) { 
    questions[i].style.display = "none"; 
  }
  questionIndex++; 
  questions[questionIndex-1].style.display= "block"; 
  if (questionIndex == questions.length) {alert("lets see the results"); }

  let choice = document.querySelectorAll("input[type='radio']").value;
  if (choice == "3") { alert("well done");} else if (choice == 2) { alert("even better"); } else if (choice == 1 ){alert("try again"); }
  else { 
    alert("please select"); 
    return; 
  }
 


  
}

function countScore() { 
  let score; []

  let radio = document.querySelectorAll("input[type='radio']".checked); 
  let choice = document.querySelectorAll("input[type='radio']").value;

  if (radio == true ) { 
    alert(`${ choice}`); 
  }
  
}  */ 

/* let questionIndex = document.getElementsByClassName("question-area").style.display = "block";


function showQuestions (){ 
   
} */ 

const square = document.querySelectorAll(".hole"); 
const fire = document.querySelectorAll(".fire"); 
const timeLeft= document.getElementById("time-left"); 
let score = document.getElementById("score"); 

let result= 0 ; 

function randomSquare(){ 
  square.forEach(className => { 
    className.classList.remove("fire"); 
  })
  let randomPosition = square[Math.floor(Math.random()* 9 )]; 
  randomPosition.classList.add("fire")

  /* assign id of the randomPosition to hitPostition to use later */ 
  hitPosition = randomPosition.id
}

square.forEach(id => { 
  id.addEventListener("mouseup", () => { 
    if(id.id === hitPosition) { 
      result = result + 1
      score.textContent = result
    }
  })
})

function moveFire() { 
  let timerId = null ;
  timerId = setInterval(randomSquare, 1000)
}

moveFire()