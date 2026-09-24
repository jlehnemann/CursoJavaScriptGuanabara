function gerarTabuada() {
    let numeroForm = document.getElementById('txt_numero');

    //validações
    if (numeroForm.value.length == 0) {
        window.alert('Por favor, digite um número!');
        return;
    }
    
    let numero = Number(numeroForm.value);


    let resp = document.getElementById('resp');

    resp.innerHTML = ' ';
    for (let i = 0; i<=10; i++) {
        let multiplicao = numero * i;
        resp.innerHTML += `${numero} x ${i} = ${multiplicao}<br>`;
    }

    
}