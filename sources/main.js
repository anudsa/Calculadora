// se crean constantes para las entradas, el párrafo del resultado y los botones de operación.
const numberOne=document.getElementById("number1");
const numbertwo=document.getElementById("number2");
const result = document.getElementById("result");

const add = document.getElementById("addition");
const subtract = document.getElementById("subtraction");
const multiply = document.getElementById("multiplication");
const divide = document.getElementById("division");

//Suma
add.addEventListener('click', () => {
	result.textContent =(parseFloat(numberOne.value)+parseFloat(numbertwo.value));
});

//Resta
subtract.addEventListener('click', () => {
	result.textContent =parseFloat(numberOne.value) - parseFloat(numbertwo.value);
});

//Multipliación
multiply.addEventListener('click', () => {
	result.textContent =parseFloat(numberOne.value)*parseFloat(numbertwo.value);
});

//División
divide.addEventListener('click', () => {
    if(numbertwo.value!=0){
        result.textContent =parseFloat(numberOne.value)/parseFloat(numbertwo.value);
    }
    else{
        result.textContent="Error";
    }

});
