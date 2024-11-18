const buttonLogin = document.querySelector('#button-login')
const buttonAccount = document.querySelector('#button-create-acount')
const buttonCart = document.querySelector('#button-shopping-cart')

function buttonLoginClicked() {
    window.location.href = "login.html";
    console.log("clicked");
  }

function buttonCreatAccountClicked() {
    window.location.href = "cadastro.html";
    console.log("criar conta");
  }

function buttonShoppingCart() {
    window.location.href = "carrinho.html";
  }