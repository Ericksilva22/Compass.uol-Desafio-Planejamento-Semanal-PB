//criando variáveis para os botões
const botao_salvar_local = document.querySelector('#botao-salvar-local');
const botao_excluir_local = document.querySelector('#botao-excluir-local');

//vetor para armazenar os dados da localStorage
const items = JSON.parse(localStorage.getItem('itens_local')) || []

//Evento para salvar localStorage
botao_salvar_local.addEventListener("click", () =>{
    localStorage.setItem('itens_local', JSON.stringify(items));
    alert("Alterações guardadas com sucesso!");
})


//Exibindo os cards salvos na localStorage ao recarregar a página
window.addEventListener('load', () => {
    conteudo_segunda.style.display = "flex" //exibir inicialmente conteúdo da segunda-feira
    if(items.length !=0){ // percorre todos os dados da localStorage para criar novamente o conteudo da última sessão
        for(let i = 0; i < items.length; i++){
            salvandoAtividade(items[i].atividade, items[i].DiaSelecionado, items[i].horaSelecionada);
        }
        //ordenar os cards ao reiniciar a página
        ordenarCardsSegunda(); 
        ordenarCardsTerca();
        ordenarCardsQuarta();
        ordenarCardsQuinta();
        ordenarCardsSexta();
        ordenarCardsSabado();
        ordenarCardsDomingo();
    }
});

//Evento para Excluir localStorage
botao_excluir_local.addEventListener("click", () =>{
    localStorage.removeItem('itens_local');
    items.splice(0, items.length);
    window.location.reload(); //recarregando a página de forma automática para verificar a mudança
})
