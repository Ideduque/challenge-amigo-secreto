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

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() 
{
    // Pega o elemento UL onde a lista é exibida
    let listaInterface = document.getElementById("listaAmigos");

    // Limpa a lista atual
    listaInterface.innerHTML = "";

    // Loop para percorrer o array e criar um elemento <li> para cada nome
    for (let i = 0; i < amigos.length; i++)
    {
        let listaItem = document.createElement("li");
    // Atribui o nome do amigo 
        listaItem.textContent = amigos[i]; 
    //adiciona o item à lista
        listaInterface.appendChild(listaItem);
    }
}

// Função para sortear um amigo da lista
function sortearAmigo()
{
    if (amigos.length === 0) 
    {
        alert("Não há amigos na lista para sortear!");
        return;
    }

    // Sorteia um número aleatório entre 0 e o tamanho da lista
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Exibe o resultado
    let resultado = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: <strong>" + resultado + "</strong>";

}
