const acBtn = document.getElementById("calc-allclear")
const backBtn = document.getElementById("calc-backspace")
const decbtn = document.getElementById("calc-decimal")
const cDisplay = document.getElementById("cDisplay")

//Array of number + operator buttons
const numBtn = document.getElementsByClassName('numBtn');
const opsBtn = document.getElementsByClassName('operatorBtn');

//Containers for calculations
let firstInput = 0;
let secondInput = 0;
let operator = "";
let result = "0";
let displayVal = "0";

let updateDisplay = (clickObj) => {
    let btnText = clickObj.target.innerText;
    let reset = (operator === "" && result !== 0);

    displayVal = (displayVal === "0" || reset)
    ? btnText 
    : displayVal + btnText;

  if (reset)
    result = 0;
  cDisplay.innerText = displayVal;

};

//functions for operators object
let operators = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        if (b !=0) return a/b
        return 'What have you done!'
    },
};


function calculate() {
    if (!operator) return;
    result = operators[operator](+firstInput, +result);	

    if (result.toString().length > 12) result = result.toFixed(10);

    updateDisplay();
}
for(i=0; i<numBtn.length; i++){
    numBtn[i].addEventListener('click', updateDisplay, false);
    }

