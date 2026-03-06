// tilização do método chat

let texto = "Abacate";
let exemploChartAt = texto.charAt(1);

console.log(exemploChartAt)

// Utilização do método CharCodeAt
let exemploCharCodeAt = texto.charCodeAt(6);
console.log(exemploCharCodeAt);

// Utilização do método codePointAt()
let exemploCodePointAt = texto.codePointAt(6);
console.log(exemploCodePointAt);

// Utilização do método at()
let exemploAt = texto.at(-2);
let exemploComoArray = texto[2];
console.log(exemploAt);
console.log(exemploComoArray);


// Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);
console.log(texto3);

// Utilização do método slice()
let frutas = "Banana, Maça e Uva";
let exemploSlice = frutas.slice(2, 11);
console.log(exemploSlice);

// Utilização de toUpperCase() e toLowerCase()
let carro = "Ferrari";
let carro2 = "MASERATI";

let exLowerCase = carro2.toLowerCase();
let exUpperCase = carro.toUpperCase();

console.log(exLowerCase);
console.log(exUpperCase);

// Utilização do método isWellFormed()
let saudacao = "Olá, seja bem-vindo!";
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);

// Utilização do método trim()
let cachorro = "                             O cachorro gosta do ossinho                            ";

let exTrim = cachorro.trim();
console.log(exTrim);













