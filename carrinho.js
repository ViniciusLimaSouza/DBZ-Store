// Funções para navegação dos botões
const buttonLogin = document.querySelector("#button-login");
const buttonAccount = document.querySelector("#button-create-acount");
const buttonCart = document.querySelector("#button-shopping-cart");

function buttonLoginClicked() {
  window.location.href = "login.html";
}

function buttonCreatAccountClicked() {
  window.location.href = "cadastro.html";
}

function buttonShoppingCart() {
  window.location.href = "carrinho.html";
}

// Recupera os produtos comprados do Local Storage ou define um array vazio se não houver nada
let produtosComprados = JSON.parse(localStorage.getItem("produtosComprados")) || [];

// Função para exibir produtos no carrinho
function exibirProdutosCarrinho() {
    const produtosContainer = document.getElementById("produtos");
    produtosContainer.innerHTML = "";
    let precoTotal = 0;

    if (produtosComprados.length === 0) {
        produtosContainer.innerHTML = "<p>O carrinho está vazio.</p>";
    } else {
        produtosComprados.forEach((produto, index) => {
            precoTotal += produto.precoProduto;
            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("produto", "list-group-item");

            // Corrige o caminho da imagem com '../' ao exibir
            const img = document.createElement("img");
            img.src = `${produto.imagemProduto}`;
            img.alt = produto.nomeProduto;
            img.style.width = "100px";
            produtoDiv.appendChild(img);

            const nome = document.createElement("p");
            nome.textContent = produto.nomeProduto;
            produtoDiv.appendChild(nome);

            const preco = document.createElement("p");
            preco.textContent = `R$ ${produto.precoProduto.toFixed(2)}`;
            produtoDiv.appendChild(preco);

            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.classList.add("btn", "btn-danger", "btn-sm");
            removerBtn.onclick = () => removerProduto(index);
            produtoDiv.appendChild(removerBtn);

            produtosContainer.appendChild(produtoDiv);
        });

        document.querySelector(".total").textContent = `Total: R$ ${precoTotal.toFixed(2)}`;
    }
}

// Função para remover um produto específico
function removerProduto(index) {
    produtosComprados.splice(index, 1);
    localStorage.setItem("produtosComprados", JSON.stringify(produtosComprados));
    exibirProdutosCarrinho();
}

// Função para limpar todos os produtos do carrinho
function limparCarrinho() {
    produtosComprados = [];
    localStorage.removeItem("produtosComprados");
    exibirProdutosCarrinho();
}

// Chama a função para exibir os produtos ao carregar a página do carrinho
document.addEventListener("DOMContentLoaded", exibirProdutosCarrinho);
