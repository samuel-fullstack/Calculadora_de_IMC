function calcular(){
    
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let imc = peso/(altura*altura);
    let res= document.getElementById('res');
    let sit = document.getElementById('sit');
    let escrever ;
    if(peso === 0 || altura === 0){
       alert('Por favor coloque os dados corretamente')
    }else{

        if(imc < 18.5){
            escrever = 'Voce está abaixo do peso';
        }else if ( imc >= 18.5 && imc < 25){
            escrever = 'Seu peso está normal'
        }else if ( imc >= 25 && imc < 30){
            escrever = 'Voce está acima do peso, tome cuidado'
        }else if (imc >= 30 && imc < 35){
            escrever = 'Obesidade (Grau 1), consulte um médico'
        }
        else if(imc >= 35 && imc < 40){
            escrever = 'Obesidade Severa (Grau 2)!!'

        }
        else{
            escrever = ' Obesidade Mórbida (Grau 3) Voce necessita de um tratamento urgente!!!'
        }
        res.innerHTML = imc.toFixed(2);
        sit.innerHTML = escrever ;
    }
    
}
