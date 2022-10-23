const carrinho = JSON.parse(localStorage.getItem("carrinho"))  || []

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarCollections()
    if(JSON.parse(localStorage.getItem("carrinho"))){
        quantity_displayCar()
    }
})

function mostrarCollections(){
    fetch("https://e-commercenode.herokuapp.com/api/livros-home").then(res=>{
        return res.json()
    }).then(json=>{
        gerarSections(json)
    })
}
function gerarSections(collections){
    let collections_html = ""

    collections.forEach(collection => {
        collections_html += `
                            <div class="section_books-content container">
                                <div class="control_left" onclick="controlLeft(this)"><i class='bx bx-left-arrow-alt'></i></div>
                                <div class="control_right" onclick="controlRight(this)"><i class='bx bx-right-arrow-alt' ></i></div>
                                <h1 class="title_categoria">${collection.categoria}</h1>
                                <div class="section_books-carrosel">
                                ${criarCards(collection.collection)}
                                </div>
                            </div>
                        `
    })
    document.querySelector(".section_books").innerHTML = collections_html
}
function criarCards(livros){
    let collectionCards = ""

    livros.forEach(livro=>{
        collectionCards += `<div class="card_books">
                                <button class="addCarrinho_button" onclick="addCarrinho('${livro.id}', this)">Adicionar ao carrinho</button>
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
    return collectionCards
}

function separatorValue(value){
    let arrayDuo = value.toFixed(2).toString().split(".")
    return {
        int: arrayDuo[0],
        dec: arrayDuo[1]
    }
}
function addCarrinho(idBook, el){
    EventClickButtonCarrinho(el)
    carrinho.push(idBook)
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    document.querySelector("#quantity_carrinho").innerHTML = carrinho.length
}


function controlLeft(el){
    let carrossel = el.parentNode.querySelector(".section_books-carrosel")
    carrossel.scrollBy({
        left: -200,
        behavior: "smooth"
    })
}


function controlRight(el){
    let carrossel = el.parentNode.querySelector(".section_books-carrosel")
    carrossel.scrollBy({
        left: 200,
        behavior: "smooth"
    })
}

function EventClickButtonCarrinho(el){
    el.innerHTML = "Livro adicionado!"
    setTimeout(()=>{
        el.innerHTML = "Adicionar ao carrinho"
    }, 3000)
}
