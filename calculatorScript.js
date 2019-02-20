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

let cDisplayVal = 0;
let pendingVal;
let evalStringArray = [];

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
//create arrays for buttons
