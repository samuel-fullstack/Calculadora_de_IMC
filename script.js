function calcular(){
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value)
    let imc = peso/(altura*altura)
    console.log(imc)
}