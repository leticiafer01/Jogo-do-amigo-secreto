// Array para armazenar os nomes dos amigos
let amigos = [];

// Adiciona um novo amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos exibida na tela
    atualizarLista();

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
