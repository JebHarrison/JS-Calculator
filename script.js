class calculator {
    constructor(previousOperandandTextElement, currentOperandandTextElement) {
        this.previousOperandandTextElement = previousOperandandTextElement
        this.currentOperandandTextElement = currentOperandandTextElement
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined 
    }
    
    delete(){

    }
    
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.computue()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                break 
            case '-':
                computation = prev - current
                    break 
            case '*':
                computation = prev * current
                    break 
            case '÷':
                computation = prev / current
                    break                     
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    updateDisplay(){
        this.currentOperandandTextElement.innerText = this.currentOperandand
        this.previousOperandandTextElement.innerText = this.previousOperandand
    }
    }



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandandTextElement = document.querySelector('[data-current-operand]')

const Calculator = new calculator(previousOperandandTextElement, currentOperandandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})


equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})