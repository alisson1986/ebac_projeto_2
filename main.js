const form = document.getElementById('form-contatos');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (nomes.includes(inputNome.value)) {
        alert(`${inputNome.value} ja esta na agenda, adicione um outro caracter para diferenciar o contato`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
