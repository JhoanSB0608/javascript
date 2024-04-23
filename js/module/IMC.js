export const IMC = (peso, altura) => {
    let imc = peso / (altura * altura);
    if (imc <= 18.5){
        return 'Bajo de peso';
    }
    else if (imc > 18.5 && imc <= 24.9){
        return 'Normal';   
    }
    else if (imc > 25 && imc <= 29.9){
        return 'Sobrepeso';
    }
    else if (imc >= 30){
        return 'Obesidad';
    }
}