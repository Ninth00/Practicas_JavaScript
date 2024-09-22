function eliminarEtiquetas() {
    
    let htmlEntrada = document.getElementById('entradaHtml').value;

    let expresionRegular = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;

    let htmlLimpio = htmlEntrada.replace(expresionRegular, '');

    document.getElementById('resultado').textContent = htmlLimpio;

    alert("Las etiquetas <script> han sido eliminadas.");
}
