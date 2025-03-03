
/*
Vas a crear una función y asignarla a una variable.
Para este ejercicio se te dará  la función tablaDeMultiplicar ya definida, la cual recibe un número 
como parámetro. La idea es que al ejecutarse la función, muestre por consola la tabla de multiplicar del 1 al 10
del número que reciba.
*/

function tablaDeMultiplicar(numero){
    vuelta = 1;
    while (vuelta <= 10){
        console.log(`${numero} x ${vuelta} = ${numero*vuelta}`);
        vuelta ++;
    };
};

numero = 5;
tablaDeMultiplicar(numero);
