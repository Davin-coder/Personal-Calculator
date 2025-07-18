//Function that obtain and display the information of the Local Storage
const displayData = function(){
    const number1 = localStorage.getItem("number1"),
        number2 = localStorage.getItem("number2"),
        operation = localStorage.getItem("operation"),
        result = localStorage.getItem("result");
    
    const outputDiv = document.getElementById("output");
    if (number1 && number2 && operation){
        outputDiv.textContent = `${number1} ${operation} ${number2} = ${result}`;
    }else{
        outputDiv.textContent = "There's not previous data";
    };
};

// jerarquia

// Etiqueta
// Producto
// Tarea

window.onload = displayData;

//Inits the counter in Session Storage
if(!sessionStorage.getItem("interactionCount")){
    sessionStorage.setItem("interactionCount", 0);
};

const $formOperation = document.getElementById("operation-form"),
    $firtsValue = document.getElementById("number-1"),
    $secondValue = document.getElementById("number-2"),
    $operation = document.getElementById("select-operation");

$formOperation.addEventListener("submit", (event) => {
    event.preventDefault();
    if(!$firtsValue.value.trim() || !$secondValue.value.trim()){
        return alert("Fields must be diligent");
    };
    let result = calculate($firtsValue.value, $secondValue.value, $operation.value);
    
    localStorage.setItem("number1", $firtsValue.value.trim());
    localStorage.setItem("number2", $secondValue.value.trim());
    localStorage.setItem("operation", $operation.value.trim());
    localStorage.setItem("result", result);
    
    updtInteractions();
    displayData();
    return alert(`Result: ${result}`);
});

document.getElementById("btn-clear").addEventListener("click", (e) =>{
    clearData();
});

//Function that calculate the result of the operation
const calculate = function(value1, value2, operation){
    switch(operation){
        case "+":
            return (Number(value1) + Number(value2));
        case "-":
            return (Number(value1) - Number(value2));
        case "x":
            return (Number(value1) * Number(value2));
        case "÷":
            return (Number(value1) / Number(value2));
    };
};

//Function for update the num of interections in the page
const updtInteractions = function(){
    let count = parseInt(sessionStorage.getItem("interactionCount"));
    count++;
    sessionStorage.setItem("interactionCount", count);
    console.log(`Interactions in this session:${count}`);
};

//Clear data in the localstorage
const clearData = function(){
    updtInteractions();
    localStorage.clear();
    displayData();
};