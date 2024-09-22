document.getElementById('descuentoform').addEventListener('submit',function (e) {
    e.preventDefault();

    var money = document.getElementById('money').value;
    var message = document.getElementById('message');
    var money_final = parseFloat(money) - parseFloat(money* 0.15);
    
    if(money ==""){
        alert("Por favor, ingresa una cantidad de dinero");
        return;
    }

    else if(money < 0){
        alert("Por favor, introduce una cantidad positiva");
        return;
    }

    else if(isNaN(money)){
        alert("No se admiten letras o carácteres especiales");
        return;
    }
    else if(money == "E" || money =="e"){
        alert("No se admiten letras o carácteres especiales");
        return;
    }

    else{
    message.textContent = "La cantidad a pagar en la compra después del descuento es:\n" + money_final;
    message.className = "pop";
    message.classList.remove ("hidden");
    return;
    }

});