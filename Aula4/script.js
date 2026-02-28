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

//document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;
//document.getElementById('ex2').innerHTML = texto;

//Exemplo Id Aninhado
let idade2 = 18;
let pais = 'Brasil';
let mensagem = 'Você não pode dirigir!';

if (pais == 'Brasil') {
    if (idade2 <= 16){
        mensagem = 'Você pode dirigir!';
    }
}

//document.getElementById('ex3').innerHTML = mensagem;

//Exemplo de if Aninhado com operador AND (&&) 

let idade3 =16;
let pais2 = 'Estados Unidos';
let mensagem2 = 'Você não pode dirigir';

if ((pais2 == 'Brasil') && (idade3 == 16)){
    mensagem2 = 'Você pode dirigir!';
}

document.getElementById('ex3').innerHTML = mensagem2;

//