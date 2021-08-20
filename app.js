const pinGenerateBtn = document.getElementById('generate-btn');
const pinBox = document.getElementById('pin-box');
const pinInputBox = document.getElementById('pin-input');
const numbersContainer = document.getElementById('calc-body');
const comparePin = document.getElementById('submit-btn');
const matched = document.getElementById('match');
const notMatched = document.getElementById('no-match');
const actionLeft = document.getElementById('action-left');
const noAccess = document.getElementById('no-access');

// Show pin to UI
pinGenerateBtn.addEventListener('click', () => {
    pinBox.value = makePin();
});

// Collect pin input and show it on UI
numbersContainer.addEventListener('click', (e) => {
    let pin = e.target.innerText;
    if (pin === 'C') {
        pinInputBox.value = ''; // Empty input field when 'C' pressed
    }
    if (!isNaN(pin)) { // Only add pin when input is number
        pinInputBox.value += pin;
    }
});

// Compare pins
comparePin.addEventListener('click', () => {
    if (pinBox.value == pinInputBox.value) {
        matched.hidden = false;
        notMatched.hidden = true;
    } else {
        actionLeft.innerText--;
        notMatched.hidden = false;
        matched.hidden = true;
        
    }
    if (actionLeft.innerText < 1) {
        noAccess.hidden = false;
        notMatched.hidden = true;
        comparePin.disabled = true;
        pinInputBox.disabled = true;
        pinGenerateBtn.disabled = true;
    }
    pinBox.value = '';
    pinInputBox.value = '';
});

// Generate pin
function makePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    if ((randomNumber + '').length == 4) {
        return randomNumber;
    } else {
        return makePin();
    }
}