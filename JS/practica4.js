document.getElementById('caliform').addEventListener('submit', function (e){
    e.preventDefault();

    var calif1 = document.getElementById('calif1').value;
    var calif2 = document.getElementById('calif2').value;
    var calif3 = document.getElementById('calif3').value;
    var exafinal = document.getElementById('exafinal').value;
    var trb_final = document.getElementById('trbfinal').value;
    var promedio = (parseFloat(calif1) + parseFloat(calif2) + parseFloat(calif3)) / 3;
    var primer_porciento = (parseFloat(promedio) * 5.5);
    var segundo_porciento = parseFloat(exafinal) * 3;
    var tercer_porciento = parseFloat(trb_final) * 1.5;
    var total = parseFloat(primer_porciento + segundo_porciento + tercer_porciento)
    var message = document.getElementById('message');

    if(calif1 =="" && calif2 =="" && calif3 =="" && exafinal =="" && trb_final == ""){
        alert("Rellena los campos antes de hacer el cálculo");
        return;
    }

    if(calif1 == ""){
        alert("Ingrese el valor de su primera calificación");
    }

    if (calif2 == ""){
        alert("Ingrese el valor de su segunda calificación");
    }

    if (calif3 == ""){
        alert("Ingrese el valor de su tercera calificación");
    }

    if (exafinal =""){
        alert("Ingrese la calificación de su examen final");
    }

    if (trb_final =""){
        alert("Ingrese la calificación de su trabajo final");
    }

    if(isNaN(calif1) || isNaN(calif2) || isNaN(calif3) || isNaN(exafinal) || isNaN(trb_final) || calif1 == "e" || calif2 == "e" || calif3 == "e" || exafinal == "e" || trb_final =="e" || calif1 == "E" || calif2 == "E" || calif3 == "E" || exafinal == "E" || trb_final =="E"){
        alert("Por favor ingresa numeros no letras o carácteres especiales")
        return;
    }
    if(calif1<0 || calif2 <0 || calif3 <0 || exafinal <0 || trb_final < 0 ){
        alert("Ingrese solo números positivos")
    }
    if(calif1>10 || calif2 >10 || calif3 >10 || exafinal >10 || trb_final > 10 ){
        alert("Ingrese una calificación correcta que no sea mayor a 10")
    }
    

    else{
        message.textContent = "El total por promedio de los tres parciales es: " + primer_porciento +
    "\nEl total por el examen final es: " + segundo_porciento + "\nEl total por el trabajo final es: " + tercer_porciento +
    "\nEl total de su calificación es: " + total;
        message.className = "pop";
        message.classList.remove ("hidden");
        return;
    }
});