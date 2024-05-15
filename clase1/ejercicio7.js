const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena)=> {
     const cadenainvertida = cadena.split('').reverse().join('');
     console.log(`Cadena invertida: ${cadenainvertida}`);
})