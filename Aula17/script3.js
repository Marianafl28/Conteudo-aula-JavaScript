 // Utilizando o key events 

 const conteudo = document.querySelector(".conteudo");
 const campo = document.querySelector("#campo");

 campo.addEventListener("keydown", handleTecla);

 function handleTecla(evento) {
    conteudo.innerHTML = "Você digitou: " + evento.target.value;
 };

 //Exemplo de detecçaõ de tecla
 const campo2 = document.querySelector("#campoEnter");
 const conteudo3 = document.querySelector(".conteudo3");

 campo2.addEventListener("keydown", handleCondicao);

 function handleCondicao(evento) {
   if (evento.code === "Enter") {
      conteudo3.innerHTML = "A tecla Enter foi pressionada!";
   }
 };

