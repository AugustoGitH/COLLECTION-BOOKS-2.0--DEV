const carrinhoLocalStorage = JSON.parse(localStorage.getItem("carrinho")) || []

document.addEventListener("DOMContentLoaded", ()=>{
    if(carrinhoLocalStorage.length > 0){
        carrinho_functions.livros_getAllCarrinho()
    }
})


const carrinho_functions = {
    livros_getAllCarrinho(){
        fetch("http://localhost:3000/api/livros-home").then(res=>{
            return res.json()
        }).then(json=>{
            let livros = []
            json.forEach(collection=>{
                livros = livros.concat(collection.collection)
            })
            this.createFiles(livros)
            this.visibleFooter(livros)
            
        })
    },
    createFiles(livros){
        let carrinhoTratado = this.conversionLocStr(livros)
        let itemsCar_html = ""
        carrinhoTratado.forEach(livro=>{
            itemsCar_html += `
            <li>
                <img src="${livro.url_capa}">
                <p class="mx-2 m-0 titleCard_carrinho">${livro.titulo}</p>
                <span class="span_infoValue mx-2">
                    <p>Preço:</p>
                    <span class="valor_unityDisplay">R$${livro.valor.toFixed(2).toString().replace(".", ",")}</span>
                </span>
                <div class="mx-2 control_unity-display">
                    <button onclick="controlQuantity_items.subStorage('${livro.id}', this)"> - </button>
                    <span class="display_quantitySpan">${livro.quantidade}</span>
                    <button onclick="controlQuantity_items.addStorage('${livro.id}', this)"> + </button>
                </div>
                <span class="mx-2 span_infoValue">
                    <p>Total:</p>
                    <span class="valor_totalDisplay">R$${(livro.valorTotal.toFixed(2).toString().replace(".", ","))}</span>
                </span>
                <i class='bx bxs-trash-alt iconTrash_button' onclick="carrinho_functions.trashFiles('${livro.id}')"></i>
            </li>`
        })
        document.querySelector(".listItems_carrinho").innerHTML = itemsCar_html
    },
    conversionLocStr(livros){
        let carrinho = JSON.parse(localStorage.getItem("carrinho"))
        let itemsCar = []
        let counts = {}
        carrinho.forEach(id=>{counts[id] = (counts[id] || 0)+1})
        for(let key in counts){
            obj = livros.filter(livro=>{
                return livro.id === key
            })
            obj[0].quantidade = counts[key]
            obj[0].valorTotal = obj[0].quantidade * obj[0].valor
            itemsCar.push(obj[0])
        }
        
        return itemsCar
    },
    visibleFooter(livros){
        let carrinho = this.conversionLocStr(livros)
        if(JSON.parse(localStorage.getItem("carrinho").length > 0)){
            document.body.innerHTML += `<footer>
                                            <div class="footer_content">
                                                <span class="input_subTotalCompra">Subtotal: R$${totalValue_items(carrinho).toString().replace(".", ",")}</span>
                                                <span class="input_totalCompra">Total: R$${totalValue_items(carrinho).toString().replace(".", ",")}</span>
                                                <article>
                                                    <a class="button_comprarAgora" href="">Comprar agora</a>
                                                    <a class="button_continuarComprando" href="/">Continuar comprando</a>
                                                </article>
                                            </div>
                                        </footer>`
        }
    },
    trashFiles(id){
        let carrinho = JSON.parse(localStorage.getItem("carrinho"))
        let carrinhoTratado = carrinho.filter(item=>{
            return item !== id
        })
        localStorage.setItem("carrinho", JSON.stringify(carrinhoTratado))
        document.location.reload(true)
        if(carrinho.length === 1){
            location.href = "/"
        }
    }
}



function totalValue_items(livros){
    let valoresItems = livros.map(livro=>{return livro.valorTotal})
    return valoresItems.reduce((prev, current)=>{
           return prev + current
     }).toFixed(2)
}

const controlQuantity_items = {
    getLocalStorage(){
        return JSON.parse(localStorage.getItem("carrinho"))
    },
    addStorage(id, el){
        if(this.inputsSnapShot(el).input_quantity.innerHTML < 4){
            let carrinhoIDS = this.getLocalStorage()
            carrinhoIDS.push(id)

            this.alterationSnapShot(carrinhoIDS, "sum", el)
        }
    },
    subStorage(id, el){
        if(this.inputsSnapShot(el).input_quantity.innerHTML > 1){
            let carrinhoIDS = this.getLocalStorage()
            carrinhoIDS.splice(carrinhoIDS.indexOf(id), 1)

            this.alterationSnapShot(carrinhoIDS, "sub", el)
        }
    },
    alterationSnapShot(dbLocal, op, el){
        localStorage.setItem("carrinho", JSON.stringify(dbLocal))

        if(op === "sum"){
            this.inputsSnapShot(el).input_quantity.innerHTML++
            this.inputsSnapShot(el).input_valorTotal.innerHTML =  "R$" + (this.inputsSnapShot(el).valor_unity * this.inputsSnapShot(el).input_quantity.innerHTML).toFixed(2).toString().replace(".", ",")
            inputsSnapShot_footer(op, this.inputsSnapShot(el).valor_unity)
        }

        if(op == "sub"){
            this.inputsSnapShot(el).input_quantity.innerHTML--
            this.inputsSnapShot(el).input_valorTotal.innerHTML = "R$" + (this.inputsSnapShot(el).valor_total - this.inputsSnapShot(el).valor_unity).toFixed(2).toString().replace(".", ",")
            inputsSnapShot_footer(op, this.inputsSnapShot(el).valor_unity)
        }
    },
    inputsSnapShot(el){
        return{
            input_quantity: el.parentNode.querySelector(".display_quantitySpan"),
            input_valorTotal: el.parentNode.parentNode.querySelector(".valor_totalDisplay"),


            valor_unity: Number(el.parentNode.parentNode.querySelector(".valor_unityDisplay").innerHTML.replace("R$","").replace(",", ".")),
            valor_total:  Number(el.parentNode.parentNode.querySelector(".valor_totalDisplay").innerHTML.replace("R$","").replace(",", "."))
        }
    }
}

function inputsSnapShot_footer(op, valueUnity){
    let input_subTotalCompra = document.querySelector(".input_subTotalCompra")
    let input_totalCompra = document.querySelector(".input_totalCompra")

    if(op === "sum"){
        input_subTotalCompra.innerHTML = "Subtotal: R$" + (Number(input_subTotalCompra.innerHTML.replace("Subtotal: R$", "").replace(",", ".")) + valueUnity).toFixed(2).toString().replace(".", ",")
        input_totalCompra.innerHTML = "Total: R$" + (Number(input_totalCompra.innerHTML.replace("Total: R$", "").replace(",", ".")) + valueUnity).toFixed(2).toString().replace(".", ",")
    }
    if(op === "sub"){
        input_subTotalCompra.innerHTML = "Subtotal: R$" + (Number(input_subTotalCompra.innerHTML.replace("Subtotal: R$", "").replace(",", ".")) - valueUnity).toFixed(2).toString().replace(".", ",")
        input_totalCompra.innerHTML = "Total: R$" + (Number(input_totalCompra.innerHTML.replace("Total: R$", "").replace(",", ".")) - valueUnity).toFixed(2).toString().replace(".", ",")
    }
}