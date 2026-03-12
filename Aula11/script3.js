//Utilizando o this em função

function teste() {
    return console.log(this);
}

teste();

//teste():
const carro = {
    marca: "Pagani",
    modelo: "Huayra",
    cor: "Lilas",
}

let carroArray = Object.values(carro);
let cArrayString = carroArray.toString();

console.log(cArrayString);
