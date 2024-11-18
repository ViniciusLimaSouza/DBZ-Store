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

// Função para adicionar um produto ao carrinho
function comprar(imagemProduto, nomeProduto, precoProduto) {
  // Define o objeto do produto com o caminho correto da imagem
  let produto = {
    imagemProduto: `img/${imagemProduto}`, // Caminho relativo a partir da home
    nomeProduto: nomeProduto,
    precoProduto: precoProduto, 
  };

  // Obter produtos do Local Storage ou inicializar como array vazio
  let produtos = JSON.parse(localStorage.getItem("produtosComprados")) || [];
  
  // Adicionar o novo produto ao array
  produtos.push(produto);
  
  // Salvar o array atualizado no Local Storage
  localStorage.setItem("produtosComprados", JSON.stringify(produtos));

  alert("Produto adicionado ao carrinho!");
}
