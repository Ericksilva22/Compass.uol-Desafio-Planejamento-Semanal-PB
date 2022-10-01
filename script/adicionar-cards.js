

//Criando variáveis
const formulario = document.querySelector('#formulario_geral');
const entrada = document.querySelector('#formulario_entrada');
const horario = document.querySelector('#dias-semana-horario');
const dia = document.querySelector('#dias-semana');
const botaoAdicionarAtividade = document.querySelector('.formulario_botaoAdicionar');
const secao_horario = document.querySelector('.secao_horario');

const conteudo_segunda = document.querySelector('#conteudo-segunda');
const conteudo_terca = document.querySelector('#conteudo-terca');

//funções

// função para criar os cards a partir do conteudo digitado pelo usuario no formulário
const salvandoAtividade = (texto, diaSemana, Hora) => {

    if(diaSemana == 1){//executando ao selecionar segunda-feira

        //Criando estrutura HTML - div bloco_horario
    const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
    div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta

    const horarioDigitado = document.createElement("p");
    horarioDigitado.innerText = Hora; //inserindo a atividade digitada 
    div_cards_hora.appendChild(horarioDigitado);
    
    
    //Criando estrutura HTML - div cards-atividade
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

    //Criando estrutura HTML div detalhamento_atividades
    const div_detalhamento = document.createElement("div");
    div_detalhamento.classList.add("detalhamento_atividades");

    //inserindo a div bloco_horario dentro da div detalhamento_atividades
    div_detalhamento.appendChild(div_cards_hora);

    //inserindo a div cards-atividade dentro da div detalhamento_atividades
    div_detalhamento.appendChild(div_cards);

    // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
    conteudo_segunda.appendChild(div_detalhamento);

    entrada.value = ""; //limpando o conteudo digitado no input text

    } else if(diaSemana == 2){ //para terça feira

        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora; //inserindo a atividade digitada 
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
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

        //Criando estrutura HTML div detalhamento_atividades
        const div_detalhamento = document.createElement("div");
        div_detalhamento.classList.add("detalhamento_atividades");

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_terca.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    }

    
}

botaoAdicionarAtividade.addEventListener("click", (envio) =>{

    envio.preventDefault();
    const conteudoEntrada = entrada.value;
    const conteudoDia =  dia.value;
    const conteudoHora =  horario.value;
    

    if(conteudoEntrada && conteudoHora) {
        salvandoAtividade(conteudoEntrada, conteudoDia, conteudoHora); // chamando função para criar o card da atividade
    }
})