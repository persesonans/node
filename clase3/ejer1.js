const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function EsMayor(numero)
{
    if(numero > 0)
    {
        return "El numero es positivo";
    }
    else if(numero < 0)
    {
        return "El numero es negativo";
    }
    else
    {
        return "El numero es cero";
    }
}

rl.question("Ingrese un numero: ", (numero) => {
    console.log(EsMayor(numero));
    rl.close();
})