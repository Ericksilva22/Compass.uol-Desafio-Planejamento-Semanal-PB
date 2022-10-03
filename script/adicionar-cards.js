//Criando variáveis
const formulario = document.querySelector('#formulario_geral');
const entrada = document.querySelector('#formulario_entrada');
const horario = document.querySelector('#dias-semana-horario');

const paragrafo_erro_atividade = document.querySelector('#paragrafo-erro-atividade');
const paragrafo_erro_dia = document.querySelector('#paragrafo-erro-dia');
const paragrafo_erro_horario = document.querySelector('#paragrafo-erro-horario');

const dia = document.querySelector('#dias-semana');
const botaoAdicionarAtividade = document.querySelector('.formulario_botaoAdicionar');
const secao_horario = document.querySelector('.secao_horario');

const conteudo_segunda = document.querySelector('#conteudo-segunda');
const conteudo_terca = document.querySelector('#conteudo-terca');
const conteudo_quarta = document.querySelector('#conteudo-quarta');
const conteudo_quinta = document.querySelector('#conteudo-quinta');
const conteudo_sexta = document.querySelector('#conteudo-sexta');
const conteudo_sabado = document.querySelector('#conteudo-sabado');
const conteudo_domingo = document.querySelector('#conteudo-domingo');

/*let vetorHora_Segunda = [];*/

//funções

// função para criar os cards a partir do conteudo digitado pelo usuario no formulário
const salvandoAtividade = (texto, diaSemana, Hora) => {

    if(diaSemana == 1){//executando ao selecionar segunda-feira
        
      
        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario");
        div_cards_hora.classList.add("cor_horario-segunda"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m"); //inserindo o horario para a  atividade digitada de acordo com o padrao(xxhxxm)
      
        
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-segunda"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-segunda"); //usada futuramente para excluir todos os cardspara segunda no arquivo remover-cards.js
        div_detalhamento.setAttribute("hora_atividade", Hora); //setando valor do horario na div para auxiliar na função de ordenar os cards

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
        div_cards_hora.classList.add("cor_horario-terca"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m");
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-terca"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-terca");
        div_detalhamento.setAttribute("hora_atividade", Hora);

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_terca.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    } else if(diaSemana == 3){ //para Quarta-feira

        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta
        div_cards_hora.classList.add("cor_horario-quarta"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m");
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-quarta"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-quarta");
        div_detalhamento.setAttribute("hora_atividade", Hora);

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_quarta.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    } else if(diaSemana == 4){ //para Quinta-feira

        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta
        div_cards_hora.classList.add("cor_horario-quinta"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m"); 
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-quinta"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-quinta");
        div_detalhamento.setAttribute("hora_atividade", Hora);

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_quinta.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    } else if(diaSemana == 5){ //para sexta-feira

        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta
        div_cards_hora.classList.add("cor_horario-sexta"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m"); 
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-sexta"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-sexta");
        div_detalhamento.setAttribute("hora_atividade", Hora);

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_sexta.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    }  else if(diaSemana == 6){ //para sabado

        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta
        div_cards_hora.classList.add("cor_horario-sabado"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m"); 
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-sabado"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-sabado");
        div_detalhamento.setAttribute("hora_atividade", Hora);

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_sabado.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    } else if(diaSemana == 7){ //para domingo

        //Criando estrutura HTML - div bloco_horario
        const div_cards_hora = document.createElement("div"); //criando div para o horario da atividade
        div_cards_hora.classList.add("bloco_horario"); //adicionando a classe para inserir a estilização correta
        div_cards_hora.classList.add("cor_horario-domingo"); //adicionando a classe para inserir a cor do bloco

        const horarioDigitado = document.createElement("p");
        horarioDigitado.innerText = Hora.replace(":", "h").concat("m"); 
        div_cards_hora.appendChild(horarioDigitado);
        
        
        //Criando estrutura HTML - div cards-atividade
        const div_cards = document.createElement("div"); //criando div para o novo card inserido
        div_cards.classList.add("cards-atividades"); //adicionando a classe respectiva para as divs dos cards de atividade

        const cardsRetangulo = document.createElement("button"); // criando retangulo para o card de atividade
        cardsRetangulo.classList.add("cards-retangulo"); //adicionando classe para estilo do retangulo
        cardsRetangulo.classList.add("retangulo-domingo"); //adicionando cor do retangulo
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
        div_detalhamento.classList.add("cards-domingo");
        div_detalhamento.setAttribute("hora_atividade", Hora);

        //inserindo a div bloco_horario dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards_hora);

        //inserindo a div cards-atividade dentro da div detalhamento_atividades
        div_detalhamento.appendChild(div_cards);

        // inserindo a div detalhamento_atividades dentro da div cronograma_atividades
        conteudo_domingo.appendChild(div_detalhamento);

        entrada.value = ""; //limpando o conteudo digitado no input text
    }
    
}

botaoAdicionarAtividade.addEventListener("click", (envio) =>{ //evento de click para o botão adicionar atividade

    envio.preventDefault();
    const conteudoEntrada = entrada.value;
    const conteudoDia =  dia.value;
    const conteudoHora =  horario.value;
   
    if(conteudoEntrada && conteudoDia && conteudoHora) {
        adicionarLocalStorage(); //chamando função para armazenar valores na localStorage
        salvandoAtividade(conteudoEntrada, conteudoDia, conteudoHora); // chamando função para criar o card da atividade
        //chamando funções para ordenar os cards
        ordenarCardsSegunda(); 
        ordenarCardsTerca();
        ordenarCardsQuarta();
        ordenarCardsQuinta();
        ordenarCardsSexta();
        ordenarCardsSabado();
        ordenarCardsDomingo();
    } else {
        alert('Preencha o(s) campo(s) destacado(s) em vermelho'); //mensagem de erro
    } 
    //alertar visualmente a necessidade do usuário o preenchimento dos dados
     if(conteudoDia == false){ 
        dia.style.background = "#FF6666";
        dia.style.borderColor = "#FF6666";
        paragrafo_erro_dia.style.visibility = "visible"; 
        
    } else {
        dia.style.background = "#FFFFFF";
        dia.style.borderColor = "#2CBE82";
        paragrafo_erro_dia.style.visibility = "hidden"; 
    }

    if(conteudoEntrada == false){ 
        entrada.style.background = "#FF6666";
        entrada.style.borderColor = "#FF6666";
        paragrafo_erro_atividade.style.visibility = "visible"; 
    } else {
        entrada.style.background = "#FFFFFF";
        entrada.style.borderColor = "#2CBE82";
        paragrafo_erro_atividade.style.visibility = "hidden"; 
    }

    if(conteudoHora == false){ 
        horario.style.background = "#FF6666";
        horario.style.borderColor = "#FF6666";
        paragrafo_erro_horario.style.visibility = "visible"; 
    } else {
        horario.style.background = "#FFFFFF";
        horario.style.borderColor = "#2CBE82";
        paragrafo_erro_horario.style.visibility = "hidden"; 
    }

})

function adicionarLocalStorage(){
    const item = {
        atividade: entrada.value,
        DiaSelecionado: dia.value,
        horaSelecionada: horario.value,
    }
    items.push(item)
}

function ordenarCardsSegunda(){
    // Selecionando as divs criadas para segunda-feira
    var divsCriadas = document.querySelectorAll('#conteudo-segunda .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-segunda');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}


function ordenarCardsTerca(){
    // Selecionando as divs criadas para Terça-feira
    var divsCriadas = document.querySelectorAll('#conteudo-terca .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-terca');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}

function ordenarCardsQuarta(){
    // Selecionando as divs criadas para Quarta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-quarta .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-quarta');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}

function ordenarCardsQuinta(){
    // Selecionando as divs criadas para Quinta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-quinta .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-quinta');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}

function ordenarCardsSexta(){
    // Selecionando as divs criadas para Sexta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-sexta .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-sexta');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}

function ordenarCardsSabado(){
    // Selecionando as divs criadas para Sexta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-sabado .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-sabado');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}

function ordenarCardsDomingo(){
    // Selecionando as divs criadas para Domingo-feira
    var divsCriadas = document.querySelectorAll('#conteudo-domingo .detalhamento_atividades');

    //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    // Ordenando o vetor pelo atributo do horario de forma crescente
    ordem.sort(function(primeiro,segundo) {
        var primeiro = parseInt(primeiro.getAttribute('hora_atividade'), 10); //transformando valor do atributo em um numero inteiro
        var segundo = parseInt(segundo.getAttribute('hora_atividade'), 10);
        return segundo - primeiro; //lógica invertida devido a rotação do conteudo da div
    });

    // Ordenando os cards na tela
    var divPai = document.querySelector('#conteudo-domingo');
    for(var i=0; i<ordem.length; i++) {
        divPai.appendChild(ordem[i]);   
    }
}


/*
function CardsCriadosIguais(z,x,w) {

    //vetor para comparar os valores do horario dos cards inserido
    
    vetorHora_Segunda.push(z); //armazenando valor de entrada no vetor correspondent

    //Casos de cards com horarios iguais
/*
    // Selecionando as divs criadas para segunda-feira
    var divsCriadas = document.querySelectorAll('#conteudo-segunda .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    for(let i = 0; i < vetorHora_Segunda.length-1; i++){
        if(conteudo_segunda.childElementCount > 0 && z == vetorHora_Segunda[i]){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            vetorHora_Segunda[i].closest('#conteudo-segunda .detalhamento_atividades').appendChild(x);
            vetorHora_Segunda[i].closest('#conteudo-segunda .detalhamento_atividades').appendChild(w);
            break;  
        } 
    }
}
*/