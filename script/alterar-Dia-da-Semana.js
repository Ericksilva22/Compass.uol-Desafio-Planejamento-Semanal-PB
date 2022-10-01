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
    document.querySelector('#conteudo-quarta').style.display = "none";
    document.querySelector('#conteudo-quinta').style.display = "none";
    document.querySelector('#conteudo-sexta').style.display = "none";
    document.querySelector('#conteudo-sabado').style.display = "none";
    document.querySelector('#conteudo-domingo').style.display = "none";
})

abaTerca.addEventListener("click", (envio)=>{ // mostrar conteudo da terça-feira
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "flex";
    document.querySelector('#conteudo-quarta').style.display = "none";
    document.querySelector('#conteudo-quinta').style.display = "none";
    document.querySelector('#conteudo-sexta').style.display = "none";
    document.querySelector('#conteudo-sabado').style.display = "none";
    document.querySelector('#conteudo-domingo').style.display = "none";
})

abaQuarta.addEventListener("click", (envio)=>{ // mostrar conteudo da quarta-feira
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "none";
    document.querySelector('#conteudo-quarta').style.display = "flex";
    document.querySelector('#conteudo-quinta').style.display = "none";
    document.querySelector('#conteudo-sexta').style.display = "none";
    document.querySelector('#conteudo-sabado').style.display = "none";
    document.querySelector('#conteudo-domingo').style.display = "none";
})

abaQuinta.addEventListener("click", (envio)=>{ // mostrar conteudo da quinta-feira
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "none";
    document.querySelector('#conteudo-quarta').style.display = "none";
    document.querySelector('#conteudo-quinta').style.display = "flex";
    document.querySelector('#conteudo-sexta').style.display = "none";
    document.querySelector('#conteudo-sabado').style.display = "none";
    document.querySelector('#conteudo-domingo').style.display = "none";
})

abaSexta.addEventListener("click", (envio)=>{ // mostrar conteudo da sexta-feira
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "none";
    document.querySelector('#conteudo-quarta').style.display = "none";
    document.querySelector('#conteudo-quinta').style.display = "none";
    document.querySelector('#conteudo-sexta').style.display = "flex";
    document.querySelector('#conteudo-sabado').style.display = "none";
    document.querySelector('#conteudo-domingo').style.display = "none";
})

abaSabado.addEventListener("click", (envio)=>{ // mostrar conteudo da sabado
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "none";
    document.querySelector('#conteudo-quarta').style.display = "none";
    document.querySelector('#conteudo-quinta').style.display = "none";
    document.querySelector('#conteudo-sexta').style.display = "none";
    document.querySelector('#conteudo-sabado').style.display = "flex";
    document.querySelector('#conteudo-domingo').style.display = "none";
})

abaDomingo.addEventListener("click", (envio)=>{ // mostrar conteudo da domingo
    envio.preventDefault();
    document.querySelector('#conteudo-segunda').style.display = "none";
    document.querySelector('#conteudo-terca').style.display = "none";
    document.querySelector('#conteudo-quarta').style.display = "none";
    document.querySelector('#conteudo-quinta').style.display = "none";
    document.querySelector('#conteudo-sexta').style.display = "none";
    document.querySelector('#conteudo-sabado').style.display = "none";
    document.querySelector('#conteudo-domingo').style.display = "flex";
})