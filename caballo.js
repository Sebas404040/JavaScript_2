const movimientos = [
    [3, 2], [3, -2], [-3, 2], [-3, -2],
    [2, 3], [2, -3], [-2, 3], [-2, -3],
]
const row = document.getElementById("fila"); 
const column = document.getElementById("columna");
const calcular = document.getElementById("Calcular");

function validar(){
    if (row.value < 1 || row.value > 8 || column.value < 1 || column.value > 8) {
        alert("Por favor, ingrese valores entre 1 y 8.");
        return false;
    }
    const fila = parseInt(row.value);
    const columna = parseInt(column.value);
    fila = fila +2;
    columna = columna +1; 
    movimientos.forEach(
        ([dx, dy]) => {
            const nuevaFila = fila + dx;
            const nuevaColumna = columna + dy;
            if (nuevaFila >= 1 && nuevaFila <= 8 && nuevaColumna >= 1 && nuevaColumna <= 8) {
                console.log(`Posición válida: Fila ${nuevaFila}, Columna ${nuevaColumna}`);
            }
        }
    );
}
calcular.addEventListener("click", validar);
