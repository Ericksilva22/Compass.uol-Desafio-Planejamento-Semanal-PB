

//Criando variáveis
const formulario = document.querySelector('#formulario_geral');
const entrada = document.querySelector('#formulario_entrada');
const horario = document.querySelector('#dias-semana-horario');
const cronograma_atividades = document.querySelector('.cronograma_atividades');
const botaoAdicionarAtividade = document.querySelector('.formulario_botaoAdicionar');
const secao_horario = document.querySelector('.secao_horario');

//funções

// função para criar os cards a partir do conteudo digitado pelo usuario no formulário
const salvandoAtividade = (texto) => {
    const div_cards = document.createElement("div"); //criando div para o novo card inserido
    div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

    const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
    cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe
    div_cards.appendChild(cardsRetangulo);

    const div_cardsTitulo = document.createElement("p");
    div_cardsTitulo.classList.add("cards-atividades-paragrafo");
    div_cardsTitulo.innerText = texto; //inserindo a atividade digitada 
    div_cards.appendChild(div_cardsTitulo);

    const botaoDeletar = document.createElement("button");
    botaoDeletar.classList.add("cards-atividades-botao");
    botaoDeletar.innerHTML = 'Apagar';
    div_cards.appendChild(botaoDeletar); // inserindo botao de apagar no card

    cronograma_atividades.appendChild(div_cards);

    entrada.value = ""; //limpando o conteudo digitado no input text
}

// função para criar o card que mostra o horário da atividade
const salvandoHorario = (Hora) => {
    const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
    div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta

    const horarioDigitado = document.createElement("p");
    horarioDigitado.innerText = Hora; //inserindo a atividade digitada 
    div_cards_hora.appendChild(horarioDigitado);

    secao_horario.appendChild(div_cards_hora);

}

botaoAdicionarAtividade.addEventListener("click", (envio) =>{

    envio.preventDefault();
    const conteudoEntrada = entrada.value;
    const conteudoHora =  horario.value;

    if(conteudoEntrada && conteudoHora) {
        salvandoAtividade(conteudoEntrada); // chamando função para criar o card da atividade
        salvandoHorario(conteudoHora); // chamando função
    }
})