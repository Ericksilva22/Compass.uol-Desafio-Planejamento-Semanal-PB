//criando variáveis
const abaSegunda = document.querySelector('#botaoSegunda');
const abaTerca = document.querySelector('#botaoTerca');
const abaQuarta = document.querySelector('#botaoQuarta');
const abaQuinta = document.querySelector('#botaoQuinta');
const abaSexta = document.querySelector('#botaoSexta');
const abaSabado = document.querySelector('#botaoSabado');
const abaDomingo = document.querySelector('#botaoDomingo');


abaSegunda.addEventListener("click", (envio)=>{ // mostrar conteudo da segunda-feira
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "flex";
    document.querySelector('#conteudo-terca').style.display = "none";
})

abaTerca.addEventListener("click", (envio)=>{ // mostrar conteudo da terça-feira
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "flex";
})