

//Funcionalidade para o botão de apagar do card de atividade e Funcionalidade para o botão de Excluir Todos
document.addEventListener("click", (selecao) =>{
    const elementoSelecionado = selecao.target;
    const elementoPai = elementoSelecionado.closest("div");

    const cardsCriados = document.querySelectorAll('.cards-atividades')

    //excluindo card selecionado
    if(elementoSelecionado.classList.contains("cards-atividades-botao")) {
        elementoPai.remove();
    }

    //excluindo todos os cards
    if(elementoSelecionado.classList.contains("formulario_botaoExcluir")) {
        cardsCriados.remove();
    }


});
