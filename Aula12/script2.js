//Primeiro array
const frutas2 = ["Melancia", "Melão", "Kiwi", "Pessego"];

console.log(frutas2);

//Adicionado items ao array
const carros = [];

carros[0] = "Volkswagen";
carros[1] = "Fiat";
carros[2] = "Ferrari";

console.log(carros);

//Criando array com new Array()
const cores = new Array("Vermelho", "Amarelo", "Laranja");

console.log(cores);

console.log(cores[0]);

//Alterando elementos de array
const frutas = ['Melancia', 'Melão', 'Kiwi', 'Pessego'];

frutas[0] = "Abacate";

console.log(frutas[0]);

//Convertendo Array em String
let StringFrutas = frutas.toString();

console.log(StringFrutas);
console.log(typeof frutas)

// Exemplo de elementos em array
const pessoa = {
    primeiroNome: "Mariana",
    ultimoNome: "Fernandes",
    idade: 19,
    pais:  "Brasil",
}

function minhaFuncao() {
    return "Olá";
}

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[3] = minhaFuncao

console.log(meuArray);

//Acessando a propriedade length
const frutas3 = ['Melancia', 'Melão', 'Kiwi', 'Pessego'];

let fruta = frutas3[frutas3.length - 1];

console.log(fruta);

//Usando forEach em Array
const elemento = document.querySelector('.ex1');
const comida = ["Pizza", "Hamburguer", "Sorvete", "Brownie"];

//Adicionando item no Array
comida.push("Coxinha");
comida.push("Kibe");
comida.push("Empadinha");

let texto = "<ul>";

comida.forEach(retornaItem);

texto = texto + "</ul>";

elemento.innerHTML = texto;

function retornaItem(item) {
    texto = texto + "<li>" + item + "</li>";
}