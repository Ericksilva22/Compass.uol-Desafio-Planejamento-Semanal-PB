
//criando a função para o relógio
function relogio(){

    //obtendo os componentes para relógio e data
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let dia = data.getDate();
    let mes = data.getMonth()+1; //função getmonth() varia de 0 a 11, necessário adição de +1
    let ano = data.getFullYear();

    //relógio completo
    let tempo_total = `${hora}:${min}`; 

    //Adicionando numero 0 para casos em que o min é menor que 10
    if(min < 10) { 
        tempo_total = `${hora}:0${min}`;
    }

    //trocar o valor do mês para o texto correto

    if(mes==1){
        mes='Janeiro';
    } else if (mes==2) {
        mes = 'Fevereiro';
    } else if (mes==3) {
        mes = 'Março';
    } else if (mes==4) {
        mes = 'Abril';
    } else if(mes==5){
        mes='Maio';
    } else if (mes==6) {
        mes = 'Junho';
    } else if (mes==7) {
        mes = 'Julho';
    } else if (mes==8) {
        mes = 'Agosto';
    } else if(mes==9){
        mes='Setembro';
    } else if (mes==10) {
        mes = 'Outubro';
    } else if (mes==11) {
        mes = 'Novembro';
    } else if (mes==12) {
        mes = 'Dezembro';
    }

    //data completa
    let data_completa = `${dia} de ${mes} de ${ano}`;

    //mudando conteudo na tela
    let conteudo_relogio = window.document.querySelector('#relogio-atualizado');
    conteudo_relogio.innerHTML = tempo_total; 

    let conteudo_data = window.document.querySelector('#data-atualizada');
    conteudo_data.innerHTML = data_completa
}

//chamando a função
setInterval(relogio,500);