document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    const clearButton = document.getElementById('clear');
    const deleteButton = document.getElementById('delete');
    const equalsButton = document.getElementById('equals');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.value;

            if (buttonText === 'AC') {
                display.value = '';
            } else if (buttonText === 'DE') {
                display.value = display.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += buttonText;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
    });

    deleteButton.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });

    equalsButton.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    });
});
