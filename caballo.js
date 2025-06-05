const row = document.getElementById("fila"); 
const column = document.getElementById("columna");
const calcular = document.getElementById("Calcular");
 


function validar(){
    if (row.value < 1 || row.value > 8 || column.value < 1 || column.value > 8) {
        alert("Por favor, ingrese valores entre 1 y 8.");
        return false;
    }
}