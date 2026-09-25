let num = [5, 8, 2, 9, 3, 2];

//direto assim, o vetor é exibido entre colchetes:
console.log(num);

//ao usar template string, o array é exibido sem os colchetes:
console.log(`Nosso array é ${num}`);

//length para pegar o número de posições:
console.log(`O array tem ${num.length} posições`);

//podemos ver uma posição:
console.log(`O primeiro valor do array é ${num[0]}`);

//adicionar um valor no final do array:
num.push(1);

//duas formas de usar o for para iterar os elementos:
for (let pos =0; pos<num.length; pos++) {
    console.log(num[pos]);
}

console.log('----------------------------------------------');


for (let posicao in num) {
    console.log(num[posicao]);
}

//tbm podemos buscar um número:
let busca = num.indexOf(3);
console.log(`O valor 3 está na posição ${busca}`);

//caso o número buscado não esteja presente, retorna -1:
let buscaSemSucesso = num.indexOf(7);
let buscaComSucesso = num.indexOf(9);

if(buscaSemSucesso == -1) {
    console.log('O valor não foi encontrado');
}
else {
    console.log(`O valor 3 está na posição ${buscaComSucesso}`);
}


//para ordenar o vetor:
num.sort();
console.log(`O array ordenado com push é ${num}`);
