document.getElementById('utilidadesform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var sueldo = document.getElementById('sueldo').value;

    const año_empresa = new Date(document.getElementById('antiguedad').value);
    const today = new Date();

    let antiguedad= today.getFullYear() - año_empresa.getFullYear();
    const monthDifference = today.getMonth() - año_empresa.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < año_empresa.getDate())) {
        antiguedad--;
    }

    function utilidad(){
        let utilidad = "";
        let sueldo_utilidad = "";

        if(antiguedad < 1 && antiguedad>=0){
            utilidad = "5%";
            sueldo_utilidad = parseFloat(sueldo * 1.05);
        }else if(antiguedad>=1 && antiguedad<2){
            utilidad = "7%";
            sueldo_utilidad = parseFloat(sueldo * 1.07);
        }else if (antiguedad>=2 && antiguedad<5){
            utilidad = "10%";
            sueldo_utilidad = parseFloat(sueldo * 1.1);
        }else if (antiguedad>=5 && antiguedad<10){
            utilidad = "15%";
            sueldo_utilidad = parseFloat(sueldo * 1.15);
        }else if(antiguedad>=10){
            utilidad = "20%";
            sueldo_utilidad = parseFloat(sueldo * 1.2);
        }else{
            alert("No se aceptan fechas futuras")
        }
        return {
            utilidad: utilidad,
            sueldo_utilidad: sueldo_utilidad
        };
    }

    // Llamamos una sola vez a la función y guardamos los valores retornados
    let resultado = utilidad();
    

    document.getElementById('result').innerText = `Tu porcentage es: ${resultado.utilidad} \nPor lo tanto tu sueldo con utilidad es: ${resultado.sueldo_utilidad}`;
});