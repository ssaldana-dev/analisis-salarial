const media = {};

media.aritmetica = function (array) {
    const total = array.reduce((a,b) => a + b);
    return total / array.length;
}

media.mediana = function (array) {
    const arrayOrdenado = array.sort((a,b) => a - b);
    const esPar = array.length % 2 === 0;
    
    if (esPar) {
        const primerTermino = arrayOrdenado[(array.length / 2) - 1];
        const segundoTermino = arrayOrdenado[array.length / 2];

        return (primerTermino + segundoTermino) / 2;
    } else {
        return arrayOrdenado[array.length / 2];
    }
}

media.moda = function (array) {
    const conteo = {};
    for (let i = 0; i < array.length; i++) {
            if(conteo[array[i]]) {
                conteo[array[i]]++;
            } else {
                conteo[array[i]] = 1
            }
        }

    const conteoEnArray = Object.entries(conteo);
    conteoEnArray.sort((a,b) => b[1] - a[1]);

    return parseFloat(conteoEnArray[0][0]);
}