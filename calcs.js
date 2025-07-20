const display = document.querySelector("input");
const buttonbtn = document.querySelector(".buttons");

function appendValue(val) {
    const validChars = '00123456789+-*/().';
    if (validChars.includes(val)) {
        display.value += val;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    let expression = display.value;
    try{
        let result = eval(expression);
        display.value = result;
    }
    catch(e){
        display.value="Error";
    }
}

function deletelast() {
    if (display.value != "") {
        display.value = display.value.slice(0, -1);
    }
}