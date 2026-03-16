//Utilizando o método find()
const number = [4, 6, 83, 64, 14, 35];
let encontrarMaior = number.find(verificaValor);

function verificaValor(valor) {
    return valor > 50;
}

console.log(encontrarMaior);

// Utilizando o método  findIndex()
let encontrarIndice = number.findIndex(verificaValor);
console.log(encontrarIndice);

//Utilizando o método findLast()
let encontrarMaiorFinal = number.findLast((valor) => valor > 50);

console.log(encontrarMaiorFinal);

//Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);
console.log(encontrarIndiceMaiorFinal);