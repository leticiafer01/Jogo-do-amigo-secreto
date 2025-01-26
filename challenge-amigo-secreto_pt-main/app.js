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

    console.log(`${nomeAmigo} foi adicionado com sucesso!`);
}
