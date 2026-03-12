//Utilizando o operador in
const pessoa = {
    primeiroNome: "Mariana",
    ultimoNome: "Lopes",
    idade: 20,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

//Criação de objetos aninhados

const pessoa2 = {
    primeiroNome:"Lilly",
    segundoNome: "Lilac",
    carros: {
        carro1: "Porsche",
        carro2: "Mercedes",
        carro3: "BMW",
    },
    motos: {
        moto1: "Ducati",
        moto2: "Kawasaki",
    },
}

let proriedadeMotos = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos[proriedadeMotos]);