//Validação de formulário

let formulario = document.forms["novoForm"]["texto"].value;

function validarForm() {
    if (formulario == "") {
        alert("Por favor, insira um valor para o campo! ");
        return false;
    }
}
