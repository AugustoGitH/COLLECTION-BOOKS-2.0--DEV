
// const input_search = document.querySelector(".input_search")
// const button_search = document.querySelector(".button_search")

// button_search.addEventListener("click", ()=>{
//     if(input_search.value){
//         searchCollections()
//     }
// })

function searchItem(el){
    let input_value = el.parentNode.querySelector(".input_search").value
    if(input_value){
        searchCollections(input_value)
    }
}

function searchCollections(input_value){
    fetch("http://localhost:3000/api/livros-home").then(res=>{
        return res.json()
    }).then(json=>{
        let livros = []
        json.forEach(collection=>{
            collection.collection.forEach((livro)=>{
                livros = livros.concat(livro)
            })
        })
        let promise = fetch(`http://localhost:3000/api/${livroSelectFilter(livros, input_value)}`).then(res=>{
            return res.json()
        }).then(json=>{
            localStorage.removeItem("Livro_pesquisado")
            localStorage.setItem("livro_pesquisado", JSON.stringify([json]))
            location.href = `/livro_pesquisado`
        })

    })
}
function livroSelectFilter(livros, input_search){
    let value_search = input_search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    let result = livros.filter(livro=>{
        return livro.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === value_search
    })
    return result[0].id
}





