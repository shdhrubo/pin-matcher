function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {
    const Pin = getPin();
    document.getElementById('display-pin').value = Pin;
}

//calculator
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const previousInput = calc.value;
        const newInput = previousInput + number;
        calc.value = newInput;
    }
})

////varify submit
function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if (pin == typedPin) {
        notifyFail.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else {
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}