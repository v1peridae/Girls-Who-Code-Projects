/*Add your JavaScript here*/
var numQuestion = 0;
var linkinParkScore = 0;
var deftonesScore = 0;

var result = document.getElementById("result");
var button = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

button.addEventListener("click", restartQuiz);

q1a1.addEventListener("click" , deftones , disableButtonq1a1);
q1a2.addEventListener("click", linkinP , disableButtonq1a2);

q2a1.addEventListener("click", deftones , disableButtonq2a1);
q2a2.addEventListener("click", linkinP , disableButtonq2a2);

q3a1.addEventListener("click", linkinP , disableButtonq3a1);
q3a2.addEventListener("click", deftones , disableButtonq3a2);

q4a1.addEventListener("click", deftones , disableButtonq4a1);
q4a2.addEventListener("click", linkinP , disableButtonq4a2);


/* FUNCTIONS */
function linkinP() {
  linkinParkScore += 1;
  numQuestion += 1;
  console.log("numQuestion = " + numQuestion + " linkinParkScore = " + linkinParkScore);
  if (numQuestion == 4) {
    console.log("The Quiz is Over!");
    updateResults();
  }
}

function deftones() {
  deftonesScore += 1;
  numQuestion += 1;
  
  console.log("numQuestion = " + numQuestion + " deftonesScore = " + deftonesScore);
  if (numQuestion == 4) {
    console.log("The Quiz is Over!");
    updateResults();
  }
}

function updateResults() {
  if (deftonesScore >= 3) {
    console.log("You're more likely to listen to Deftones!");
    result.innerHTML = "You're more likely to listen to Deftones!";
    
  } else if (linkinParkScore >= 3) {
    console.log("You're more likely to listen to Linkin Park!");
    result.innerHTML = "You're more likely to listen to Linkin Park!";
  }
  enableButtons();
}

function disableButtonq1a1() {document.getElementById("q1a1").disabled = true;}
function disableButtonq1a2() {document.getElementById("q1a2").disabled = true;}

function disableButtonq2a1() {document.getElementById("q2a1").disabled = true;}
function disableButtonq2a2() {document.getElementById("q2a2").disabled = true;}

function disableButtonq3a1() {document.getElementById("q3a1").disabled = true;}
function disableButtonq3a2() {document.getElementById("q3a2").disabled = true;}

function disableButtonq4a1() {document.getElementById("q4a1").disabled = true;}
function disableButtonq4a2() {document.getElementById("q4a2").disabled = true;}

function enableButtons() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
}

function restartQuiz() {
  numQuestion = 0;
  linkinParkScore = 0;
  deftonesScore = 0;
  
  result.innerHTML = "You're more likely to listen to...";
  
  console.log("numQuestion = " + numQuestion);
  console.log("deftonesScore = " + deftonesScore);
  console.log("linkinParkScore = " + linkinParkScore);
  
  enableButtons();
}
