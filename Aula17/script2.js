 //Utilizando o evento onmouse
 const caixa = document.querySelector(".caixa");

 caixa.addEventListener("mouseover", function () {
    caixa.innerHTML = "O mouse está em cima da caixa.";
        caixa.style.background = "yellow";
        caixa.style.color = " #000"
 });

 caixa.addEventListener("mouseout", function () {
    caixa.innerHTML = "O mouse está dentro da caixa.";
    caixa.style.background = "pink";
    caixa.style.color = " #fff"
 });

 //Exemplo de posição do mouse na página
 
 const conteudo = document.querySelector(".conteudo");

 document.addEventListener("mousemove", handlePosicao);

 function handlePosicao (evento) {
    conteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientY;
 };