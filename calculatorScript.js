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

let cDisplayVal = 0;
let pendingVal;
let evalStringArray = [];

//Updates display values
let updateDisplay = (clickObj) => {
    let btnText = clickObj.target.innerHTML;

    if(cDisplayVal === 0)
        cDisplayVal = '';
    cDisplayVal += btnText;
    cDisplay.innerText = cDisplayVal;
}

//adds event listenrs to both number and operator buttons
for(i=0; i<numBtn.length; i++){
    numBtn[i].addEventListener('click', updateDisplay, false);
    }
//for(i=0; i<opsBtn.length; i++){
//    opsBtn[i].addEventListener('click', performOperation, false);
//    }


//all clear function
acBtn.onclick = () => {
    cDisplayVal = 0;
    pendingVal = undefined;
    cDisplay.innerHTML = cDisplayVal;
}
//backspace function
backBtn.onclick = () => {
    let lengthOfDisplay = cDisplayVal.length;
    cDisplayVal = cDisplayVal.slice(0, lengthOfDisplay-1);
    if(cDisplay == ''){
        cDisplay = 0;
    }
    cDisaply.innerHTML = cDisplayVal;
}

//create a switch function for calculations

switch (key) {
    case value:
        
        break;

    default:
        break;
}
//create arrays for buttons
