document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('calculator-screen');
    const keys = document.querySelectorAll('.key');
    
    let currentInput = '';
    let operator = null;
    let previousInput = '';
    
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.getAttribute('data-key');
            
            if (keyValue === 'clear') {
                currentInput = '';
                operator = null;
                previousInput = '';
                screen.textContent = '';
            } else if (['+', '-', '*', '/'].includes(keyValue)) {
                operator = keyValue;
                previousInput = currentInput;
                currentInput = '';
            } else if (keyValue === '=') {
                if (operator && previousInput !== '' && currentInput !== '') {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`);
                    screen.textContent = currentInput;
                    operator = null;
                    previousInput = '';
                }
            } else {
                currentInput += keyValue;
                screen.textContent = currentInput;
            }
        });
    });
});
