//

let listaAmigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (!nome) {
        alert('Favor insirir um nome válido.');
        return;
    }

    listaAmigos.push(nome);
    input.value = '';
    atualizarLista();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = listaAmigos.map(nome => `<div>${nome}</div>`).join('');
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de realizar o sorteio.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigo) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo sorteado é: <strong>${amigo}</strong>`;
}
