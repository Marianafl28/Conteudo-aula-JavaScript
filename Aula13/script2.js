//Definindo um array global
const times = ["Espanha", "Brasil", "Alemanha", "Croacia"];

//Utilizando indexOf()
let posicaoItem = times.indexOf("Croacia");

console.log(times);
console.log(posicaoItem);

//Utilizando o lastIndexOf()
const times2 = ["Espanha", "Brasil", "Espanha", "Croacia"];

let posicaoItem2 = times2.lastIndexOf("Espanha", 2);

console.log(times2);
console.log(posicaoItem2);

//Utlizando o método includes()
let verificaExistenciaItem = times.includes("França");

console.log(verificaExistenciaItem);
