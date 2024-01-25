
let arithmetic = {
    "+": (n1, n2) => {
        return n1 + n2
    },
    "-": (n1, n2) => {
        return n1 - n2
    },
    "*": (n1, n2) => {
        return n1 * n2
    },
    "/": (n1, n2) => {
        return n1 / n2
    },
    "^": (n1, n2) => {
        return n1 ** n2
    }
}

function doMaffs(operator, n1, n2) {
    n1 = parseFloat(n1, 10);
    n2 = parseFloat(n2, 10);
    return arithmetic[operator](n1, n2)
}

function startInput() {
    let number1 = prompt("Enter first number");
    let number2 = prompt("Enter second number");
    let operator = prompt("Enter arithmetic");
    if (number1 === "" || number2 === "" || operator === "") {
        alert("Value is missing");
        return "a value was not inputted";
    };
    if (arithmetic[operator] === null) {
        alert("That operator is not supported or does not exist");
        return "The arithmetic is not valid";
    }
    return [doMaffs(operator, number1, number2),number1,operator, number2];

}
//Add functionality to the digits
function keypadOnClick(button, input) {
    button.addEventListener("click", () => {
        input.value += button.innerText;
    });
}
let storedFirstInput, operatorInput;
function operatorOnClick(button, input) {
    button.addEventListener("click", () => {
        storedFirstInput = input.value;
        operatorInput = button.innerText;
        input.value = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let keypad = document.getElementById("keypad");
    let input = document.getElementById("calculatorInput");
    if (keypad !== null && input !== null) {
        for (let btn of keypad.children) {
            keypadOnClick(btn, input);
        }
    }
    let operators = document.getElementById("operators");
    if (operators !== null && input !== null) {
        for (let btn of operators.children) {
            operatorOnClick(btn, input);
        }
    }
    //Check for eval (equals) button
    let eval = document.getElementById("eval");
    if (eval !== null) {
        //Add listener for click on eval btun
        eval.addEventListener("click", () => {
            console.log(operatorInput, storedFirstInput, input.value);
            //do math
            input.value = doMaffs(operatorInput, storedFirstInput, input.value);
            //Reset the first input
            storedFirstInput = null;
        });
    }
    //Prompts
    let keyboardInput = document.getElementById("keyboardInput");
    if (keyboardInput !== null) {
        keyboardInput.addEventListener("click", () => {
            let startKeyboard = startInput();
            document.write(`
                <h2>${startKeyboard[1]} ${startKeyboard[2]} ${startKeyboard[3]} =</h2>
                <h1>${startKeyboard[0]}</h1>
            `);
        });
    }
});
