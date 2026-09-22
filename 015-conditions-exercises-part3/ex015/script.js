function verificar() {
    let agora = new Date();
    let anoAtual = agora.getFullYear();

    let anoNascDigitadoForm = document.getElementById('txtano');
    let anoNascForm = Number(anoNascDigitadoForm.value);
    let res = document.getElementById('res');

    if (anoNascForm > anoAtual || anoNascDigitadoForm.value.length == 0) {
        window.alert('Dados inválidos! Verifique os dados e tente novamente!');
        return;
    }

    let idade = anoAtual - anoNascForm;

    let sexoForm = document.getElementsByName('radsex')
    let genero = '';
    let estagioVida = '';

    if (sexoForm[0].checked) {
        genero = 'homem';
    }
    else if (sexoForm[1].checked) {
        genero = 'mulher';
    }

    if (idade >= 0 && idade < 13) {
        estagioVida = 'crianca';
    }
    else if (idade >= 13 && idade < 21) {
        estagioVida = 'jovem';
    }
    else if (idade >= 21 && idade < 65) {
        estagioVida = 'adulto';
    }
    else if (idade >= 65) {
        estagioVida = 'idoso';
    }

    let img = document.createElement('img');
    img.setAttribute('id', 'imagem');


    if (genero == 'homem' && estagioVida == 'crianca') {
        img.setAttribute('src', 'homem-crianca.png');
    }
    else if (genero == 'homem' && estagioVida == 'jovem') {
        img.setAttribute('src', 'homem-jovem.png');
    }
    else if (genero == 'homem' && estagioVida == 'adulto') {
        img.setAttribute('src', 'homem-adulto.png');
    }
    else if (genero == 'homem' && estagioVida == 'idoso') {
        img.setAttribute('src', 'homem-idoso.png');
    }
    else if (genero == 'mulher' && estagioVida == 'crianca') {
        img.setAttribute('src', 'mulher-crianca.png');
    }
    else if (genero == 'mulher' && estagioVida == 'jovem') {
        img.setAttribute('src', 'mulher-jovem.png');
    }
    else if (genero == 'mulher' && estagioVida == 'adulto') {
        img.setAttribute('src', 'mulher-adulta.png');
    }
    else if (genero == 'mulher' && estagioVida == 'idoso') {
        img.setAttribute('src', 'mulher-idosa.png');
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Identificado ${genero} de ${idade} anos.`;
    res.appendChild(img);
}