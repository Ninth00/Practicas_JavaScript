function palabrasANumeros(arr) {
    const diccionario = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        let palabra = arr[i].trim().toLowerCase(); 
        if (diccionario[palabra] !== undefined) {
            resultado.push(diccionario[palabra]);
        } else {
            resultado.push(-1);
        }
    }

    return resultado;
}

function convertirPalabras() {
    let input = document.getElementById("inputPalabras").value;
    
    let palabras = input.split(",");

    let numeros = palabrasANumeros(palabras);

    document.getElementById("resultado").innerText = "Resultado: " + numeros.join(", ");
}