const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('porfavor, introduce una cadena de texto:',(cadenaUsuario)=>{
    const numeroCaraceteres =cadenaUsuario.length;
    console.log(`la cadena de texto tiene ${numeroCaraceteres} caracteres.}`);
    rl.close
})