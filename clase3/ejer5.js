const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function DeterminarColor(color1, color2)
{
    if(color1 == "azul" && color2 == "amarillo")
    {
        console.log("La combinacion da como resultado el color verde");
    }
    else if(color1 == "azul" && color2 == "rojo")
    {
        console.log("La combinacion da como resultado el color morado");
    }
    else if(color1 == "rojo" && color2 == "amarillo")
    {
        console.log("La combinacion da como resultado el color naranja");  
    }
    else
    {
        console.log("La combinacion no es valida"); 
    }
}

rl.question("Igrese el primer color: ", (color1) => 
{
    rl.question("Igrese el segundo color: ", (color2) => 
    {
        DeterminarColor(color1.toLowerCase(), color2.toLowerCase());
        rl.close();
    });
});