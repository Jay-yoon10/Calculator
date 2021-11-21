const display1 = document.querySelector('.cal--display__first-input') // first display (very top one)
const display2 = document.querySelector('.cal--display__second-input') // second display (the middle one)
const display3 = document.querySelector('.cal--display__last-input') // last display on the left hand side.


const deleteBtn = document.querySelector('.cal--btn__del')
// declaration of delete button.
const clearBtn = document.querySelector('.cal--btn__ac')
// declaration of clear all button.
const numberBtn = document.querySelectorAll('.cal--btn__number')
// declaration of all the number button.
const equalBtn = document.querySelector('.cal--btn__equal')
// declaration of an equal sign.
const operatorBtn = document.querySelectorAll('.cal--btn__operator')
// declaration of all the operation buttons .

let firstNum = '';  // input number on display 1
let secondNum = ''; // input number on display 2
let result = null;
let last_result = '';
 // result from the last operation
let hasDecimal = false; //checking if the display has decimal in certain condition.


operatorBtn.forEach(operator => {
    operator.addEventListener('click', (event)=>{
        if(!secondNum) return;
        hasDecimal = false;
        const operationType = event.target.innerText;
        if(firstNum && secondNum && last_result){
            calculation();
        } else{
            result = parseFloat(secondNum);
        }
        clearDiplay(operationType)
        last_result = operationType
       
    })
})
const clearDiplay = (type = '') => {
    
    firstNum += secondNum +' ' + type +' '
    display1.innerText = firstNum;
    display2.innerText = '';
    secondNum = '';
    display3.innerText = result;
    // firstNum = '';
    

}

const calculation = () =>{
    (last_result === '+') ? result = parseFloat(result) + parseFloat(secondNum) 
    :(last_result === '-') ? result = parseFloat(result) - parseFloat(secondNum)
    :(last_result === '/') ? result = parseFloat(result) / parseFloat(secondNum)
    :(last_result === '×') ? result = parseFloat(result) * parseFloat(secondNum) 
    : (alert("please enter correct operation"))
}
numberBtn.forEach(number => {
    number.addEventListener('click', (event)=>{
        if(!hasDecimal && event.target.innerText === '.'){
            hasDecimal = true;
        } else if(hasDecimal && event.target.innerText === '.'){
            return;
        } 
        secondNum += event.target.innerText;
        display2.innerText = secondNum;
       
      
    })
})




equalBtn.addEventListener('click', ()=> {
    if(!firstNum || !secondNum ) 
    return;
    hasDecimal = false;
    calculation();
    clearDiplay();
    display2.innerText = result.toFixed(2);
    display3.innerText = '';
    secondNum = result;
    firstNum = '';
   
    
    
})

clearBtn.addEventListener('click',(event) => {
    result = '';
    firstNum = '';
    secondNum = '';
    display1.innerText = '0';
    display2.innerText = '0';
    display3.innerText = '0';
})

deleteBtn.addEventListener('click', (event) => {
    secondNum = '';
    display2.innerText = '';
   
})