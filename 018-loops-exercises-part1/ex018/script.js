function contar() {
    //captura dos dados de formulário
    let formInicio = document.getElementById('txt_inicio');
    let formFim = document.getElementById('txt_fim');
    let formPasso = document.getElementById('txt_passo');

    let resp = document.getElementById('resp');

    //validações:
    if (formInicio.value.length == 0 || formFim.value.length == 0)  {
        resp.innerHTML = 'Impossível contar! Verifique os valores e tente novamente!';
        return;
    }
    
    else if (formPasso.value.length == 0 || Number(formPasso.value) == 0) {
        window.alert('Passo inválido! Considerando PASSO 1');
        formPasso.value = '1';
    }
    

    //conversão dos dados para variáveis numéricas:
    let inicio = Number(formInicio.value);
    let fim = Number(formFim.value);
    let passo = Number(formPasso.value);


    resp.innerHTML = 'Contando...<br>';
    //realização do laço de repetição:
    for (inicio; inicio<= fim; inicio += passo) {
        resp.innerHTML += inicio + ' &#128073 ';
    }
    resp.innerHTML += '&#127988'
}