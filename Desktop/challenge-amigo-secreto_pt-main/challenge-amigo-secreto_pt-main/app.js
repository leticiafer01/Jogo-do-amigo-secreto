// Array para armazenar os nomes dos amigos
let amigos = [];
let amigosSorteados = []; // Para rastrear quem já foi sorteado

// Limpa o campo de entrada
function limparTexto() {
    const campo = document.querySelector("input");
    campo.value = "";
}

// Adiciona um novo amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nomeAmigo);

    // Atualiza a lista na tela e limpa o campo de entrada
    atualizarLista();
    limparTexto();
    console.log(`${nomeAmigo} foi adicionado com sucesso!`);
}

// Atualiza a lista de amigos exibida na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sorteia um amigo aleatório
function sortearAmigo() {
    // Verifica se há amigos suficientes para sortear
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos dois amigos para sortear!");
        return;
    }

    // Verifica se todos já foram sorteados
    if (amigosSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados! Reiniciando sorteio...");
        amigosSorteados = []; // Reinicia os sorteios
    }

    // Filtra os amigos que ainda não foram sorteados
    const amigosDisponiveis = amigos.filter((amigo) => !amigosSorteados.includes(amigo));

    // Seleciona um amigo aleatório
    const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    const amigoSorteado = amigosDisponiveis[indiceSorteado];

    // Adiciona o amigo sorteado à lista de sorteados
    amigosSorteados.push(amigoSorteado);

    // Exibe o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
    console.log(`Sorteado: ${amigoSorteado}`);
}
