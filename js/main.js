/*const calculator = {
    displayValue:'0',
    firstOperand:null,
    waitingForOperand:false,
    operator:null
}

function resetCalculator(){
    calculator.displayValue = '0',
    calculator.firstOperand = null
    calculator.waitingForOperand = false
    calculator.operator = null
}

function updateDisplay(){

    const display = document.querySelector('.calculator-screen')

    display.value = calculator.displayValue
}

updateDisplay()

function inputDigit(digit){

    const {displayValue,waitingForOperand} = calculator

    if(waitingForOperand === true){

        calculator.displayValue = digit

        calculator.waitingForOperand = false

    }else{
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit
    }

}

function inputDecimal(dot){

    if(!calculator.displayValue.includes(dot)){

        calculator.displayValue += dot
    }
}

function handleOperator(nextOperator){

    const {firstOperand,displayValue,operator} = calculator

    const inputValue = parseFloat(displayValue)

    if(operator &&  calculator.waitingForOperand){
        calculator.operator = nextOperator
        return
    }

    if(firstOperand === null && !isNaN(inputValue)){

        calculator.firstOperand = inputValue
    }else if(operator){
        
        const result = calculate(firstOperand,inputValue,operator)

        calculator.displayValue = String(result)

        calculator.firstOperand = result

    }

    calculator.waitingForOperand = true

    calculator.operator = nextOperator

}

function calculate(firstOperand,secondOperator,operator){

    if(operator === '+'){
        return firstOperand + secondOperator
    }else if(operator === '-'){
        return firstOperand - secondOperator
    }else if(operator === '*'){
        return firstOperand * secondOperator
    }else if(operator === '/'){
        return firstOperand / secondOperator
    }

    return secondOperator
}

const keys = document.querySelector('.calculator-keys')

keys.addEventListener('click',function(event){

    const {target} = event

    if(!target.matches('button')){
        return
    }

    if(target.classList.contains('operator')){
        handleOperator(target.value)
        updateDisplay()
        return
    }

    if(target.classList.contains('decimal')){
        inputDecimal(target.value)
        updateDisplay()
        return
    }

    if(target.classList.contains('all-clear')){
        resetCalculator()
        updateDisplay()
        return
    }
    inputDigit(target.value)
    updateDisplay()
})
*/