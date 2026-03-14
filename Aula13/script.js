//Array global
const frutas = ["Morango", "Abacaxi", "Abacaxi", "Acerola", "Manga"];

//Utilizando a propriedade length()

//let tamanhoFrutas = frutas.length;

//frutas.length = 2;

console.log("O tamanho do array de frutas é: " + frutas);

//Utilizando o métodod toString()
let minhasFrutas =  frutas.toString();

console.log(minhasFrutas);

//Utilizando o método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);

//Utilizando o método join()
let apresentacaoFrutas = frutas.join(" - ");
console.log(apresentacaoFrutas);

//Utilizando o método pop()
let removerItemsFrutas = frutas.pop();
console.log(frutas);
console.log(removerItemsFrutas);

//Utilizando o métodod push()
let adicionarItemsFrutas = frutas.push;
console.log(frutas);
console.log(adicionarItemsFrutas);

//Utilizando o métodod shift()
let deslocarItemsFrutas = frutas.shift;
console.log(frutas);
console.log(deslocarItemsFrutas);

//Utilizando o métodod unshift()
let deslocarItemsFrutas2 = frutas.unshift("Melão");
console.log(frutas);
console.log(deslocarItemsFrutas2);

frutas[0] = "kiwi";

console.log(frutas);

//Utilizando o length para adicionar items ao array
frutas[frutas.length] = "Laranja";

console.log(frutas);

//Utilizando o método isArray()
console.log(Array.isArray(frutas));

//Utilizando o método delete()
delete frutas[0];
delete frutas[4];
delete frutas[2];

frutas[0] = "Abacate";

console.log(frutas);

//Utilizando o método concat()
const motos = ["Kawasaki", "BMW", "Ducati"];
const carros = ["Nissan", "Jeep", "Fiat"];

const veiculos = motos.concat(carros);

console.log(veiculos);

//Utilizando o copyWithin()
//let copiaItems = frutas.copyWithin(2, 0);
console.log(frutas);

//Exemplo de matriz em JavaScript(array multidimensional)
const matriz = [[1, 2], [3, 4], [5, 6]];


console.log(matriz[2][1]);

//Exemplo de vetor em JavaScript (array unidimensional)
const comida = ["Pizza", "Arroz", "Macarrão"];

//utilizando o método flat()
const ListaNumeros = [[1, 2], [ 3, 4], [5, 6]];

const novaListaNumeros = ListaNumeros.flat()

console.log(ListaNumeros);
console.log(novaListaNumeros);

//Utilizando o flatMap()
const ListaNumeros2 = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

const novaListaNumeros2 = ListaNumeros2.flatMap((item) => {
    return [item, item * 10];
});

console.log(novaListaNumeros2);

//Utilizando o método splice()
console.log(frutas);
const novaListaFrutas = frutas.splice(2, 2, "Pêra", "Mamão");

console.log(frutas);
console.log(novaListaFrutas);

//Utilizando o método toSpliced()
console.log(frutas);
const frutasToSpliced = frutas.toSpliced(0, 4);
console.log(frutasToSpliced);

//Utilizando o slice()
const copiaFrutas = frutas.toSpliced(0, 0);

const frutasSlice = copiaFrutas.slice(2);

console.log(frutasSlice);

const frutasSlice2 = copiaFrutas.slice(1, 2);

console.log(frutasSlice2);