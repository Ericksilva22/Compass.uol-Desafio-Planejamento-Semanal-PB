

//Funcionalidade para o botão de apagar do card de atividade e Funcionalidade para o botão de Excluir Todos
document.addEventListener("click", (selecao) =>{
    const elementoSelecionado = selecao.target;
    const elementoPai = elementoSelecionado.closest(".detalhamento_atividades");

    //excluindo card selecionado
    if(elementoSelecionado.classList.contains("cards-atividades-botao")) {
        if(elementoPai.childElementCount == 2){ 
            elementoPai.remove();

        } else if (elementoPai.childElementCount > 2) { // quando existe mais de um card fazer a exclusão apenas do card selecionado
            elementoSelecionado.parentElement.remove();
            if(elementoPai.childElementCount == 2){ // quando existe apenas um card com seu respectivo horário
                elementoPai.classList.remove("mesmo-horario"); // removendo a linha na tela
                var horarioMudar = elementoPai.firstChild; //selecionando o bloco do horário

                //adicionando a cor padrão para o bloco da semana do dia da semana selecionado
                if(elementoPai.classList.contains("cards-segunda")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-segunda");
                } else if(elementoPai.classList.contains("cards-terca")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-terca");
                } else if(elementoPai.classList.contains("cards-quarta")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-quarta");
                } else if(elementoPai.classList.contains("cards-quinta")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-quinta");
                } else if(elementoPai.classList.contains("cards-sexta")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-sexta");
                } else if(elementoPai.classList.contains("cards-sabado")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-sabado");
                } else if(elementoPai.classList.contains("cards-domingo")){
                    horarioMudar.classList.remove("cor_horario-mesmo-horario");
                    horarioMudar.classList.add("cor_horario-domingo");
                }
                
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
