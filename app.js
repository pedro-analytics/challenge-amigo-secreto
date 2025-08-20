let amigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let nomeAmigo = campoAmigo.value.trim();

    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        campoAmigo.value = ''; 
        return;
    }

    amigos.push(nomeAmigo);

    atualizarListaAmigos();

    campoAmigo.value = '';
    campoAmigo.focus();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];

        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}