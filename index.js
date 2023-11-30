function Numbers(numero){
    let somatorio = 0;
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            somatorio += i;
        }
    }

    return somatorio;
}
const numero = process.argv[2]
if (isNaN(numero) || numero <= 0) {
    console.error("Por favor, forneça um número inteiro positivo como argumento.");
} else {
    const resultado = Numbers(Number(numero));
    console.log(resultado);
}