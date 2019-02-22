//Grabs number buttons from document
const oneBtn = document.getElementById("calc-one")
const twoBtn = document.getElementById("calc-two")
const threeBtn = document.getElementById("calc-three")
const fourBtn = document.getElementById("calc-four")
const fiveBtn = document.getElementById("calc-five")
const sixBtn = document.getElementById("calc-six")
const sevenBtn = document.getElementById("calc-seven")
const eightBtn = document.getElementById("calc-eight")
const nineBtn = document.getElementById("calc-nine")
const zeroBtn = document.getElementById("calc-zero")

//Grabs operator buttons from document
const acBtn = document.getElementById("calc-allclear")
const backBtn = document.getElementById("calc-backspace")
const divideBtn = document.getElementById("calc-divide")
const multiplyBtn = document.getElementById("calc-multiply")
const subBtn = document.getElementById("calc-subtract")
const addBtn = document.getElementById("calc-add")
const sumBtn = document.getElementById("calc-sum")
const decbtn = document.getElementById("calc-decimal")
const cDisplay = document.getElementById("cDisplay")

//Array of number + operator buttons
const numBtn = document.getElementsByClassName('numBtn');
const opsBtn = document.getElementsByClassName('operatorBtn');

let cDisplayVal = 0; // Value for display
let pendingVal; // variable that holds the previous numbers and operation
let evalStringArray = []; // evaluation string that will run the operations

//Updates display values
let updateDisplay = (clickObj) => {
    let btnText = clickObj.target.innerHTML;

    if(cDisplayVal === 0)
        cDisplayVal = '';
        cDisplayVal += btnText;
         cDisplay.innerText = cDisplayVal;
}
//all clear function
acBtn.onclick = () => {
    cDisplayVal = 0;
    pendingVal = undefined;
    cDisplay.innerText = cDisplayVal;
}
//backspace function
backBtn.onclick = () => {
    let lengthOfDisplay = cDisplayVal.length;
    cDisplayVal = cDisplayVal.slice(0, lengthOfDisplay-1);
    if(cDisplayVal === ''){
        cDisplayVal = 0;
    }
    cDisplay.innerText = cDisplayVal;
}
//create a switch function for calculations
let performOperation = (clickObj) => {
    let ops = clickObj.target.innerText;

switch (ops) {
    case '+':
        pendingVal = cDisplayVal;
        cDisplayVal = 0;
        cDisplay.innerText = cDisplayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+');
        break;
    case '-':
    pendingVal = cDisplayVal;
        cDisplayVal = 0;
        cDisplay.innerText = cDisplayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('-'); 
        break;
     case 'x':
        pendingVal = cDisplayVal;
        cDisplayVal = 0;
        cDisplay.innerText = cDisplayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('*');
        break;
    case '÷':
        pendingVal = cDisplayVal;
        cDisplayVal = 0;
        cDisplay.innerText = cDisplayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
         break;
    case '=':
        evalStringArray.push(cDisplayVal);
        let evaluation = //do not use EVAL!
    default:
        break;
    }
}
//adds event listeners to both number and operator buttons
for(i=0; i<numBtn.length; i++){
    numBtn[i].addEventListener('click', updateDisplay, false);
    }
//adds event listeners to operation buttons
for(i=0; i<opsBtn.length; i++){
    opsBtn[i].addEventListener('click', performOperation, false);
   }
