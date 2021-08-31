
function calculoImc(){

    let altura=document.getElementById('altura').value
    let peso=document.getElementById('peso').value

    let imc= parseFloat(peso / (altura * altura)).toFixed(1)//indica la cantidad de decimales

    document.getElementById('resultado').innerHTML+= imc
 
    if (imc == 0){
        document.getElementById('resultado').innerHTML="Volvé a ingresar los datos"
    }
    
    else if (imc < 18.5){
        document.getElementById('resultado2').innerHTML="Estas dentro del rango inferior al normal"
    }
    else if (imc >= 18.5 && imc <= 24.9 ){
        document.getElementById('resultado2').innerHTML="Estas dentro del rango normal"
    }
    else if (imc >= 25 && imc <= 29.9){
        document.getElementById('resultado2').innerHTML="Estas dentro del rango superior al normal"
    }
    else{
        document.getElementById('resultado2').innerHTML="Estas dentro del rango de obesidad"
    }
    
}


let boton = document.getElementById('boton');
boton.addEventListener('click', calculoImc);
