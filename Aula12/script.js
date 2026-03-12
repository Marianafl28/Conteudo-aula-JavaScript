//Criando um construtor
function Pessoa(primeiroNome, ultimoNome, idade, pais) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
    this.pais = pais;
}

const euMesma = new Pessoa("Mariana", "Fernandes", 20, "Brasil");

const meuIrmão = new Pessoa("Thomas", "Thom", 18, "Brasil");

console.log(meuIrmão);

//Reforçando criação de construtores de objetos
function Veiculo(marca, modelo, motorPotencia, cor, ano, rodas){
    this.marca = marca;
    this.modelo = modelo;
    this.motorPotencia = motorPotencia;
    this.cor = cor;
    this.ano = ano;
    this.rodas = rodas;
    this.acelerar = function() {
        return this.modelo + " acelerou"
    };
}

const minhaMoto = new Veiculo("Kawasaki", "Ninja", "600cv", "verde", 2025, 2);

console.log(minhaMoto);

const meuCarro = new Veiculo("BMW", "M", "184cv", "Preto", 2025, 4)

console.log(meuCarro);

//Veiculo.prototype.chassi = 123455678;

meuCarro.place = "0000-0000";

meuCarro.frear = function() {
    return this.modelo + " freou."
};

console.log(meuCarro.frear());

Veiculo.prototype.parar = function(){
    return this.marca + " parou"
}

console.log(meuCarro.parar());
