//Criando meu primeiro objeto
const carro = { marca: "Porsche", modelo: "Gt3", ano: 2025, cor: "Verde-Oliva",}

console.log(carro.marca);

//Exemplo 2 de criação de objeto
const carro2 = {
    marca :"Mercedes",
    modelo : "CLS 63",
    ano: 2020,
    cor: "Azul",
}

console.log(carro2);

//Exemplo 3 de criação de objeto
const carro3 = {};
carro3.marca = "Nissan",
carro3.modelo = "GT-R R35",
carro3.ano = 2025,
carro3.cor = "Pérola";

console.log(carro3);

//Exemplo 4 de criação de objeto
const carro4 = new Object({
    marca: "Toyota ",
    modelo: "Supra",
    ano: 2023,
    cor: "Preto",
    acelerar:function (){
        return this.modelo + " acelerou";
    },
});

let marcaCarro = "marca";  

console.log(carro4[marcaCarro]);

//console.log(carro4.acelerar());
