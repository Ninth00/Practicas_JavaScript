document.getElementById('comisionesform').addEventListener('submit', function (e){
    e.preventDefault();

    var venta1 = document.getElementById('venta1').value;
    var venta2 = document.getElementById('venta2').value;
    var venta3 = document.getElementById('venta3').value;
    var sueldo = document.getElementById('sueldo').value;
    var comisiones = (venta1 * 0.1) + (venta2 * 0.1) + (venta3 * 0.1);
    var sueldo_final = parseFloat(comisiones) + parseFloat(sueldo);
    var message = document.getElementById('message');

    if(venta1 =="" && venta2 =="" && venta3 =="" && sueldo ==""){
        alert("Rellena los campos antes de hacer el cálculo");
        return;
    }

    if(venta1 == ""){
        alert("Ingresa el valor de la primera venta");
    }

    if (venta2 == ""){
        alert("Ingresa el valor de la segunda venta");
    }

    if (venta3 == ""){
        alert("Ingresa el valor de la tercer venta");
    }

    if (sueldo ==""){
        alert("Ingresa el sueldo");
    }
    if(isNaN(venta1) || isNaN(venta2) || isNaN(venta3) || isNaN(sueldo) || venta1 == "e" || venta2 == "e" || venta3 == "e" || sueldo == "e" || venta1 == "E" || venta2 == "E" || venta3 == "E" || sueldo == "E"){
        alert("Por favor ingresa numeros no letras o carácteres especiales")
        return;
    }
    if(venta1<0 || venta2 <0 || venta3 <0 || sueldo <0 ){
        alert("Ingrese solo números positivos")
    }

    else{
        message.textContent = "El total por comisiones es:\n" + comisiones +
        "\nEl total del sueldo con comisiones es:\n" + sueldo_final;
        message.className = "pop";
        message.classList.remove ("hidden");
        return;
    }
});