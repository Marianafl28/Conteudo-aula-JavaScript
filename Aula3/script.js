//Exemplo de Condição Lógica: If e Else
let x = 8;

if (x == 5){
    //console.log('A variavel x é igual a 5!');
}else{
    //console.log('A variavel x não é igual a x');
}

//Exemplos de Condição Lógica: if Else if
let y = 2;

if (y > 3) {
    // console.log('A variavel y é maior que 3');
}else if (y == 3){
    // console.log('A variável y é igual a 3');
}else{
    // console.log('A variável y possui um valor diferente das verificações');
}

//Exemplo de if
const elemento = document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);
//ou
//console.log(pegarHoras + ":" + pegarMinutos);
//
//console.log(pegarHoras);

if (pegarHoras > 18){
    elemento.innerHTML = "Boa Noite!";
}

//Exemplo if 2
let idade = 18;
let texto = 'Você é novo de mais para dirigir!';


if (idade >= 18){
    texto = 'Você tem idade para dirigir!';
}

document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;
document.getElementById('ex2').innerHTML = texto;
