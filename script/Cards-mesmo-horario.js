
//função para criar cards de horários iguais para segunda-feira
function CardsCriadosIguais_segunda(z,x,w) {

    // Selecionando as divs criadas para segunda-feira
    var divsCriadas = document.querySelectorAll('#conteudo-segunda .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_segunda.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}


//função para criar cards de horários iguais para terca-feira
function CardsCriadosIguais_terca(z,x,w) {

    // Selecionando as divs criadas para terca-feira
    var divsCriadas = document.querySelectorAll('#conteudo-terca .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_terca.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}


//função para criar cards de horários iguais para quarta-feira
function CardsCriadosIguais_quarta(z,x,w) {

    // Selecionando as divs criadas para quarta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-quarta .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_quarta.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}


//função para criar cards de horários iguais para quinta-feira
function CardsCriadosIguais_quinta(z,x,w) {

    // Selecionando as divs criadas para quinta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-quinta .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_quinta.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}


//função para criar cards de horários iguais para sexta-feira
function CardsCriadosIguais_sexta(z,x,w) {

    // Selecionando as divs criadas para sexta-feira
    var divsCriadas = document.querySelectorAll('#conteudo-sexta .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_sexta.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}


//função para criar cards de horários iguais para sabado
function CardsCriadosIguais_sabado(z,x,w) {

    // Selecionando as divs criadas para sabado
    var divsCriadas = document.querySelectorAll('#conteudo-sabado .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_sabado.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}


//função para criar cards de horários iguais para Domingo
function CardsCriadosIguais_domingo(z,x,w) {

    // Selecionando as divs criadas para domingo
    var divsCriadas = document.querySelectorAll('#conteudo-domingo .detalhamento_atividades');

     //criando um vetor com as divs criadas para os cards
    var ordem = [].map.call(divsCriadas, function(elemento) {
        return elemento;
    });

    var auxiliar = 0;

    for(let i = 0; i < ordem.length; i++){
        if(conteudo_domingo.childElementCount > 0 && z == ordem[i].getAttribute('hora_atividade')){ //comparar horario digitado com os existentes.  Só executa a partir do segundo card criado
            ordem[i].appendChild(x);
            ordem[i].appendChild(w);
            ordem[i].classList.add("mesmo-horario");
            auxiliar = auxiliar + 1;
            return auxiliar;
        } 
    }

    return auxiliar;
  
}