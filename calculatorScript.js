const acBtn = document.getElementById("calc-allclear");
const backBtn = document.getElementById("calc-backspace");
const decBtn = document.getElementById("calc-decimal");
const cDisplay = document.getElementById("cDisplay");
const sumBtn = document.getElementById("calc-sum");

//Array of number + operator buttons
const numBtn = document.getElementsByClassName('numBtn');
const opsBtn = document.getElementsByClassName('operatorBtn');

//Containers for calculations
let firstInput = "";
let secondInput = "";
let operator = "";
let result = "0";
let displayVal = "0";

let updateDisplay = (clkObj) => {
    let btnText = clkObj.target.innerText;
    let reset = (operator === "" && result !== 0);

    displayVal = (displayVal === "0" || reset)
    ? btnText 
    : displayVal + btnText;

  if (reset)
    result = 0;
  cDisplay.innerText = displayVal;
};
//loops that will add event listeners to number buttons
for(i=0; i<numBtn.length; i++){
    numBtn[i].addEventListener('click', updateDisplay, false);
};

//functions for operators object and stores first value
let firstOperator = (clkObj) =>{
    let symbol = clkObj.target.innerText;
    firstInput = parseFloat(displayVal);
    switch(symbol){
        case "+": 
       operator = "+"     
      break;
      case "-": 
      operator = "-"
      break;
      case "÷": 
      operator = "÷"
      break;
      case "x": 
      operator = "x"
      break;
      default:
      break;
    };
   clearDisplay()
    if(result === 0 && firstInput !== 0)
    result = firstInput;
};
function clearDisplay(){
    displayVal = "0";
    cDisplay.innerText=displayVal;
}
// loop that will add event listeners to operator buttons
for(i=0; i<opsBtn.length; i++){
    opsBtn[i].addEventListener('click',firstOperator,false);
};
//checks to see if decimal is already in place (Check over function)
decBtn.onclick = ()=>{
    if(!displayVal.includes("."))
    displayVal += ".";
    cDisplay.innerText = displayVal;
};
sumBtn.onclick = () =>{
    secondInput = parseFloat(displayVal);
    switch (operator){
        case '+':
        result += secondInput;
        break;
        case '-':
        result -= secondInput;
        break;
        case 'x':
        result *= secondInput;
        break;
        case '÷':
        if(firstInput === 0 && secondInput === 0){
            alert("WHAT HAVE YOU DONE!?");
        }
        result /= secondInput ;        
        break;
        default :
        break;   
      };
      cDisplay.innerText = result; 
      firstInput = secondInput;
      operator = "";
  };

  acBtn.onclick = () =>{
      clearDisplay();
      clearInputs();
  }
  function clearInputs() {
      firstInput = 0;
      secondInput = 0;
      result = 0;
  }
  backBtn.onclick = ()=>{
      let displayLength = displayVal.length;
      displayVal = displayVal.slice(0,displayLength - 1);

      let reset = (operator === "" && result !== 0);
  
    if (displayVal === "")
      displayVal = "0";
  
    if (result)
      finalVal = 0;
      
    cDisplay.innerText = displayVal;
  };
