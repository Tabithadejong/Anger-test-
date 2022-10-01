let questionIndex = 0; 
showQuestions(); 

function showQuestions() { 
  document.getElementById("begin").style.display = "none"; 
  let i; 
  let questions = document.getElementsByClassName("questions-container"); 
  for (i=0; i< questions.length; i++ ) { 
    questions[i].style.display = "none"; 
  }
  questionIndex++; 
  if (questionIndex > questions.length) {questionIndex = 1}
  questions[questionIndex-1].style.display= "block"; 
  

  
}
