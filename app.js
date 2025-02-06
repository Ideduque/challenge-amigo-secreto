// Array para armazenar os amigos
let amigos = [];

// Função para inserir o amigo na lista
function adicionarAmigo() 
{
// Obter nome inserido no campo
    let nome = document.getElementById("amigo").value.trim();

// Validar se o nome não está vazio
    if (nome !== "") 
    {
    // Adiciona o nome à lista de amigos
        amigos.push(nome);

    // Atualiza a lista na tela
        atualizarListaAmigos();

    // Limpa o campo de texto
        document.getElementById("amigo").value = "";
    } 
    else 
    {
        alert ("Por favor, insira um nome.");
    }
}
