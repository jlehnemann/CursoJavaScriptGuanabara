let numeros = [];

function adicionarValor() {
    //captura e conversão de dados de formulário:
    let txtNum = document.getElementById('txt_num');
    let num = Number(txtNum.value);

    //validações:
    if (txtNum.value.length == 0 || num < 1 || num > 100 || numeros.includes(num)) {
        window.alert('Valor inválido ou já encontrado na lista');
        return;
    }

    //adiciona o valor digitado ao array numeros:
    numeros.push(num);

    //criação de elemento option dentro do select
    //primeiro captura o select:
    let select = document.getElementById('select_adicionados');

    //adiciona o option no select:
    let option = document.createTextNode(`Valor ${num} adicionado!`);
    select.appendChild(new Option(`Valor ${num} adicionado!`, `Valor ${num} adicionado!`));

    txtNum.value = ' ';
}

function finalizar() {
    //validações:
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
        return;
    }

    //busca pelo maior e pelo menor de forma segura (para longos arrays):
    let max = numeros.reduce((max, atual) => {return atual > max ? atual : max}, numeros[0]);
    let min = numeros.reduce((min, atual) => {return atual < min ? atual : min}, numeros[0]);

    //calcula soma dos itens do array:
    let soma = numeros.reduce((n1, n2) => {return n1 + n2}, 0);

    //calcula a média dos valores
    let media = soma / numeros.length;

    //captura o res:
    let res = document.getElementById('res');

    //Elenca resultados do analisador de números:
    res.innerHTML = `Ao todo temos ${numeros.length} números cadastrados.<br>`;

    if (numeros.length == 1) {
        res.innerHTML += `O único valor informado foi ${numeros[0]}.<br>`;
    } else {
        res.innerHTML += `O maior valor informado foi ${max}.<br>`;
        res.innerHTML += `O menor valor informado foi ${min}.<br>`;
    }

    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores digitados é ${Number(media.toFixed(2))}.<br>`
}