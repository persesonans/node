const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Por favor, introduce una cadena de texto: ', (cadenaUsuario) => {
    const cadenaMayusculas = cadenaUsuario.toUpperCase();
    console.log(`${cadenaMayusculas}`);
    rl.close();
  });