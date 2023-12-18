function conversorTemperatura (valor, escala) {
    if(escala.toLowerCase() === 'celsius') {
        return (((valor * (9/5)) + 32) + ' Fahrenheit');
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (((valor-32) * 5/9) + ' Celsius');
    } else {
        return "Escala inválida";
    }
}

let valor = parseFloat(prompt('Digite o valor da temperatura: '));
let escala = prompt('Digite a escala em que a temperatura se encontra: ').toLowerCase();

if (escala == 'celsius' || escala == 'fahrenheit') {
    console.log(`A temperatura de ${valor} ${escala.charAt(0).toUpperCase() + escala.slice(1)} é igual à `+ conversorTemperatura(valor, escala));
} else {
    console.log('Escala inválida!');
}
