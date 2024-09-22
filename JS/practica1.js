document.getElementById('invform').addEventListener('submit',function (e) {
    e.preventDefault();

    var money = document.getElementById('money').value;
    var message = document.getElementById('message');
    var money_final = (money * 0.02) + parseFloat(money);
    
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
    message.textContent = "La cantidad de dinero ganada después de un mes es:\n" + money_final;
    message.className = "pop";
    message.classList.remove ("hidden");
    return;
    }

});