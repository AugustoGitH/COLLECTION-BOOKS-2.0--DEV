let carrinhoLocSt = JSON.parse(localStorage.getItem("carrinho")) || []


function quantity_displayCar(){
    let carrinho = carrinhoLocSt
    document.querySelector("#quantity_carrinho").innerHTML = carrinho.length
}

function openCarrinho(){
    if(JSON.parse(localStorage.getItem("carrinho")).length > 0){
        location.href = "/carrinho"
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    quantity_displayCar()
})