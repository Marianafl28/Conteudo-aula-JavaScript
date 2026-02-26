//Exemlplos de operador de atribuição

let x = 100;

x = x - 5;
//console.log(x)

x = x + 5;
//console.log(x);

//Exemlplos de Aritmética em JavaScript

let soma = 5 + 5 + 4;
console.log(soma);

//const primeroNome = 'Mariana';
//const ultimoNome = ' Fernandes';

let nomeCompleto = 'Mariana' + " " + 'Fernandes';

console.log(nomeCompleto);


/*Condição Lógica

let teste = false;

if (teste == true){
    console.log("A variável teste é verdadera!")
}else{
    console.log("A variável teste é falsa!")
}*/

//Exemplos de tipos em JavaScript
//String
let cor = 'Azul';
let fruta = 'Laranja';
console.log(cor);
console.log(fruta);

//Number
let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);

//Big Int
let bigint = 132232142142145465655n;
let bigint2 = BigInt(132232142142145465655);
console.log(bigint);
console.log(bigint2);

//Boolean
let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

//Object
const carro = {
    marca: 'Porsche',
    modelo: "Gtr",
    cor: 'Verde Oliva',
};

console.log(carro);

console.log('A marca do carro é: ' + carro.marca);

//Array Object
const frutas = ['Banana', 'Laranja', 'Uva', 'Kiwi','Maça'];

console.log(frutas);

//Date Object
const data = new Date;

console.log(data);

//Undefined

let indefinido;

console.log(indefinido);

//Null

let nulo = null;

console.log(nulo);

//Symbol
let y = Symbol;

console.log(y)

//Exemplos de typeoff

let stringTipo = "300";
let numberTipo = 300;

const tipoDado = typeof stringTipo;
const tipoDado2 = typeof numberTipo;

console.log(tipoDado);
console.log(tipoDado2);


//Exemplos de Boolean
let cinco = 5;
let comparação = cinco == 8;

console.log(comparação);