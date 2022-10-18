const carrinho = JSON.parse(localStorage.getItem("carrinho"))  || []


document.addEventListener("DOMContentLoaded", ()=>{
    let livrosSearch = JSON.parse(localStorage.getItem("livro_pesquisado"))
    gerarCard(livrosSearch)
   

})

function gerarCard(livros){
    let collectionCards = ""
    livros.forEach(livro=>{
        collectionCards += `<div class="card_books">
                                <button class="addCarrinho_button" onclick="addCarrinho('${livro.id}')">Adicionar ao carrinho</button>
                                <img src="${livro.url_capa}" class="img-fluid">
                                <div class="description_book">
                                    <h1>${livro.titulo}</h1>
                                    <article>
                                        <span>Capa ${livro.capa}</span>
                                        <p class="fs-2"><sup class="fs-6 me-2">R$</sup>${separatorValue(livro.valor).int}<sup class="fs-6 ms-2">${separatorValue(livro.valor).dec}</sup></p>
                                    </article>        
                                </div>
                            </div>`
    })
    document.querySelector(".section_booksSearch").innerHTML = collectionCards
}


function separatorValue(value){
    let arrayDuo = value.toFixed(2).toString().split(".")
    return {
        int: arrayDuo[0],
        dec: arrayDuo[1]
    }
}
function addCarrinho(idBook){
    carrinho.push(idBook)
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    document.querySelector("#quantity_carrinho").innerHTML = carrinho.length
}
function quantity_displayCar(){
    document.querySelector("#quantity_carrinho").innerHTML = carrinho.length
}