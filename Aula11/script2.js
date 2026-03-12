//Citação de métodos
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Amendoim",
            raca: "Border Collie",
            latir: function () {
                return this.nome + " latiu: Au Au";
            },
        },
    }
}

console.log(casa.pets.cachorro.latir());

