
const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function MayorDeTres(numero1, numero2, numero3)
{
    if(numero1 > numero2 && numero1 > numero3)
    {
        return `El numero ${numero1} es mayor.`;
    }
    else if(numero2 > numero1 && numero2 > numero3)
    {
        return `El numero ${numero2} es mayor.`;
    }
    else if(numero3 > numero1 && numero3 > numero2)
    {
        return `El numero ${numero3} es mayor.`;
    }
}

rl.question("Ingrese el primer numero: ", (numero1) => 
{
    rl.question("Ingrese el segundo numero: ", (numero2) => 
    {
        rl.question("Ingrese el tercer numero: ", (numero3) => 
        {
            console.log(MayorDeTres(parseInt(numero1), parseInt(numero2), parseInt(numero3)));
            rl.close();
        });
    });
});
