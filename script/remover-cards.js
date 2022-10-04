

//Funcionalidade para o botão de apagar do card de atividade e Funcionalidade para o botão de Excluir Todos
document.addEventListener("click", (selecao) =>{
    const elementoSelecionado = selecao.target;
    const elementoPai = elementoSelecionado.closest(".detalhamento_atividades");

    const cardsCriados = document.querySelectorAll('.cards-atividades');

    //excluindo card selecionado
    if(elementoSelecionado.classList.contains("cards-atividades-botao")) {
        if(elementoPai.childElementCount == 2){ 
            elementoPai.remove();
            
        } else if (elementoPai.childElementCount > 2) {
            elementoSelecionado.parentElement.remove();
            if(elementoPai.childElementCount == 2){
                elementoPai.classList.remove("mesmo-horario");
            }
        }
        
    }
})

//excluindo todos os cards do dia selecionado
const botaoExcluirTodos = document.querySelector('.formulario_botaoExcluir');

botaoExcluirTodos.addEventListener("click", (envio) =>{
    
    envio.preventDefault();
   
   if(conteudo_segunda.style.display == "flex") { //identificando dia selecionado
        while(conteudo_segunda.childElementCount != 0){ // necessario para apagar todos os cards do dia
            document.querySelector(".cards-segunda").outerHTML = ""; //removendo cards
        }
    } else if (conteudo_terca.style.display == "flex") { 
        while(conteudo_terca.childElementCount != 0){
            document.querySelector(".cards-terca").outerHTML = ""; 
        }
    } else if (conteudo_quarta.style.display == "flex") { 
        while(conteudo_quarta.childElementCount != 0){
            document.querySelector(".cards-quarta").outerHTML = ""; 
        }
    } else if (conteudo_quinta.style.display == "flex") { 
        while(conteudo_quinta.childElementCount != 0){
            document.querySelector(".cards-quinta").outerHTML = ""; 
        }
    } else if (conteudo_sexta.style.display == "flex") { 
        while(conteudo_sexta.childElementCount != 0){
            document.querySelector(".cards-sexta").outerHTML = ""; 
        }
    } else if (conteudo_sabado.style.display == "flex") { 
        while(conteudo_sabado.childElementCount != 0){
            document.querySelector(".cards-sabado").outerHTML = ""; 
        }
    } else if (conteudo_domingo.style.display == "flex") { 
        while(conteudo_domingo.childElementCount != 0){
            document.querySelector(".cards-domingo").outerHTML = ""; 
        }
    }

})
