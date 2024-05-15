const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
rl.question('Ingrese una frase: ', (frase) => {
    rl.question('ingrese la palabra que sea reempalar : ',(palabraCambiar) =>{
        rl.question('Ingrese la palabra nueva ', (nuevapalabra) =>{
            const frasemodificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevapalabra)
            console.log('Frase Modificada: ', frasemodificada)
        })
    })
})