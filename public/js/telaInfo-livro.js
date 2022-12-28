const carrinho = JSON.parse(localStorage.getItem("carrinho"))  || []

function addCarrinho(id){
    carrinho.push(id)
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    document.querySelector("#quantity_carrinho").innerHTML = carrinho.length
    location.href = "/carrinho"
}