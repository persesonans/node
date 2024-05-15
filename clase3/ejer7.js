const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function DeterminarCategoria(categoria)
{
    let tipoVehiculo = "";
    switch(categoria)
    {
        case "Moto":
            tipoVehiculo = "Motocicleta";
            break;
        case "Auto":
            tipoVehiculo = "Automovil";
            break;
        case "Camion":
            tipoVehiculo = "Super camion";
            break;
        case "Bicicleta":
            tipoVehiculo = "Super bicicleta";
            break;
    }
    return tipoVehiculo;
}

rl.question("Ingrese la categoria del vehiculo: ", (categoria) =>
{
    console.log(DeterminarCategoria(categoria));
    rl.close();
});