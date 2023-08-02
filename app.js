class Calculator {
    constructor() {
        this.display = document.getElementById('main-display');
        this.clearButton = document.getElementById('clear-btn');
        this.deleteButton = document.getElementById('delete-btn');
        this.numberButtons = document.querySelectorAll('.numpad');
        this.operatorButtons = document.querySelectorAll('.operators');
        this.equalButton = document.querySelector('.equal');
        this.decimalButton = document.getElementById('decimal');

        this.currentInput = '0';
        this.currentOperator = null;
        this.previousInput = '0';

        this.attachEventHandlers();
    }

    attachEventHandlers() {
        this.numberButtons.forEach(button => {
            button.addEventListener('click', () => this.handleNumberClick(button));
        });

        this.operatorButtons.forEach(button => {
            button.addEventListener('click', () => this.handleOperatorClick(button));
        });

        this.equalButton.addEventListener('click', () => this.handleEqualClick());
        this.clearButton.addEventListener('click', () => this.clearDisplay());
        this.deleteButton.addEventListener('click', () => this.deleteDigit());
        this.decimalButton.addEventListener('click', () => this.handleDecimalClick());
    }

    updateDisplay() {
        this.display.textContent = this.currentInput;
    }

    handleNumberClick(button) {
        const digit = button.value;
        if (this.currentInput === '0') {
            this.currentInput = digit;
        } else {
            this.currentInput += digit;
        }
        this.updateDisplay();
    }

    handleOperatorClick(button) {
        this.previousInput = this.currentInput;
        this.currentInput = '0';
        this.currentOperator = button.textContent;
    }

    handleEqualClick() {
        const previous = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        let result;

        switch (this.currentOperator) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case 'x':
                result = previous * current;
                break;
            case '÷':
                result = previous / current;
                break;
            default:
                return;
        }

        this.currentInput = result.toString();
        this.currentOperator = null;
        this.previousInput = '0';
        this.updateDisplay();
    }

    clearDisplay() {
        this.currentInput = '0';
        this.currentOperator = null;
        this.previousInput = '0';
        this.updateDisplay();
    }

    deleteDigit() {
        this.currentInput = this.currentInput.slice(0, -1);
        if (this.currentInput === '') {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }

    handleDecimalClick() {
        if (!this.currentInput.includes('.')) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }
}

const calculator = new Calculator();