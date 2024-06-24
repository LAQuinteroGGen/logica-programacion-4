// Función para comprobar si el valor ingresado es válido
function solicitarNumero() {
    let num = parseInt(prompt("Ingrese un número por favor: "));
    if (isNaN(num)) {
        console.log("Por favor ingrese un número válido.");
        return solicitarNumero();
    }
    return num;
}

let num = solicitarNumero();

// Función para imprimir la secuencia fibonacci
function fibonacci(num) {
    let a = 0, b = 1, suma;
    let resultado = [a, b]; // Se inicia la secuencia en 0 y 1
    
    while (true) {
        suma = a + b;
        if (suma > num) {
            break; // Si el próximo número de Fibonacci es mayor que 'num', salimos del bucle
        }
        a = b;
        b = suma;
        resultado.push(suma);
    }

    return resultado;
}

// Muestra el resultado
let secuenciaFibonacci = fibonacci(num);
console.log(`La secuencia Fibonacci de ${num} es: ${secuenciaFibonacci}`);