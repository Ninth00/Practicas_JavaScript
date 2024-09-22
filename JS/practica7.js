document.getElementById('horasform').addEventListener('submit', function (e){
    e.preventDefault();

    var sueldo = document.getElementById('sueldo').value;
    var sueldosemanal = (parseFloat(sueldo)/4)
    var costo_hora = (parseFloat(sueldo)/160);
    var horas_trabajadas = document.getElementById('horas').value;
    var message = document.getElementById('message');


    
    function horasextra (){
        let sueldo_semanal_total = 0;
        if(horas_trabajadas > 40 && horas_trabajadas <48){
            let horas_extra = horas_trabajadas - 40;
            let sueldo_semanal2 = parseFloat(horas_extra * (costo_hora * 2)) + parseFloat(sueldosemanal);
            sueldo_semanal_total = parseFloat(sueldo_semanal2);
        }else if (horas_trabajadas > 40 && horas_trabajadas > 48){
            let horas_extra = horas_trabajadas - 40;
            let horas_extra2 = horas_trabajadas - 48;
            let sueldo_extra1 = parseFloat(horas_extra * (costo_hora * 2));
            let sueldo_extra2 = parseFloat(horas_extra2 * (costo_hora * 3));
            let sueldo_semanal2 = parseFloat(sueldosemanal) + sueldo_extra1 + sueldo_extra2;
            sueldo_semanal_total = parseFloat(sueldo_semanal2);
        }else if(horas_trabajadas > 0 && horas_trabajadas <=40){
            sueldo_semanal_total = sueldosemanal;
        }else{
            alert("No se permiten numeros negativos")
        }
        return sueldo_semanal_total;
    }

    message.textContent = "El sueldo semanal con las horas extras es: " + horasextra() +
    "\n El sueldo mensual trabajando las mismas horas extras es " + (horasextra() * 4)

});