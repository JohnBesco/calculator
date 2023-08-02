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
}