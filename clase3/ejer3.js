
const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function Factorial(numero)
{
    let resultado = 1;
    for(let i = 1; i < numero; i++)
    {
        resultado *= i;
    }

    return resultado;
}

rl.question("Ingrese un numero: ", (numero) => 
{
    console.log(Factorial(numero));
    rl.close();
});