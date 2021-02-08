const textField = document.getElementById("text");
const buttonsContainer = document.getElementById("buttonsContainer");

let x;
let y;
let operator;
let change = false;
let lastClickOperator = false;
let textFieldBool = false;

buttonsContainer.addEventListener("click", function(event) {
    const button = event.target;
    const id = button.attributes.id.value;
    const text = textField.innerText;

    if (id == "multiply" || id == "divide" || id == "add" || id == "subtract") {
        if (lastClickOperator) {
            operator = id;
        } else if (!change) {
            x = parseFloat(text);
            operator = id;
            change = true;
            lastClickOperator = true;
            textFieldBool = false;
        } else {
            y = parseFloat(text);
            calculate();
            x = parseFloat(textField.innerText);
            operator = id;
            y = undefined;
            lastClickOperator = true;
            textFieldBool = false;
        }
    } else if (id == "equal") {
        if (!change) {
            x = parseFloat(text);
            operator = "multiply";
            y = 1;
            calculate();
            lastClickOperator = false;
            textFieldBool = false;
        } else {
            y = parseFloat(text);
            calculate();
            x = parseFloat(textField.innerText);
            operator = id;
            y = undefined;
            lastClickOperator = true;
            textFieldBool = false;
        }
    } else if (id == "delete") {
        textField.innerHTML = "0";
        x = undefined;
        y = undefined;
        operator = undefined;
        change = false;
        lastClickOperator = false;
        textFieldBool = false;
    } else if (id == ".") {
        let periodBool = false;

        for (let i = 0; i < text.length; i++) {
            if (text[i] == ".") {
                periodBool = true;
            }
        }

        if(!periodBool) {
            textField.innerHTML = text + id;
            textFieldBool = true;
            lastClickOperator = false;
        } else {

        }
    } else {
        if ( (!textFieldBool) || text == "0") {
            textField.innerHTML = id;
            lastClickOperator = false;
            textFieldBool = true;
        } else {
            textField.innerHTML = text + id;
            lastClickOperator = false;
        }
    }
});

function clickOperator() {
    
}

function calculate() {
    let result;

    console.log("x: " + x + "; y: " + y + "; op: " + operator);

    if (operator == "multiply") {
        result = x * y;
    } else if (operator == "divide") {
        result = x / y;
    } else if (operator == "add") {
        result = x + y;
    } else if (operator == "subtract") {
        result = x - y;
    }

    textField.innerHTML = result;
}