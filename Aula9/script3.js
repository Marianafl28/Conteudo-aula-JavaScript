//Utilizando BigInt
let a = BigInt("232442344748748974847947894746345645649586394803498356065038532095608563563058760316058605");
console.log(a);

// Utilizando n
let b = 83493840920434903849375375835798317513875183435465657574745676475674674765756742n;
console.log(b);

//Utilizando operadores aritméticos com BigInt
let c = 3835980958024985209420958049895809n;
let d = 2039843802940238402394094024803948n;
let e = (c * d);
console.log(e);

//Convertendo BigInt
let f = BigInt("687695646474694746484487448");
let fConvertido = Number(f);
console.log(fConvertido);

//Utilizando métodos de comparação em BigInt
let g =  100n;
let h = 90n;
let exComparacao = (g < h);
console.log(exComparacao);

//Utilizando métodos de comparação em BigInt
let g2 =  100n;
let h2 = 90n;
let exComparacao2 = (g === h);
console.log(exComparacao2);
