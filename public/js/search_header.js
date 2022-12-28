

function suggestionSearch(input, livros){
    let listSuggestion = input.parentNode.querySelector(".list_suggestion")
    let valueInput = input.value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()
    let regex = new RegExp(`\\b${valueInput}\\b`, 'gi');
    let livrosSelected = livros.filter(livro=>{
        let tituloTratado = livro.titulo.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()
        return regex.test(tituloTratado)
    })

    let generateLiResults = (livros)=>{
        let result = ""
        livros.forEach(livro => {
            result += `
            <li onclick="infoBook('${livro.id}')">${livro.titulo}</li>
            `
        })
        return result
    }

    listSuggestion.classList.remove("opacity-0")
    if(valueInput) listSuggestion.innerHTML = generateLiResults(livrosSelected)
    else{
        listSuggestion.innerHTML = ""
        listSuggestion.classList.add("opacity-0")
    }
}
function searchBooksPag(button, livros){
    let inputValue = button.parentNode.parentNode.querySelector("input").value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()
    let regex = new RegExp(`\\b${inputValue}\\b`, 'gi');
    let livrosSelected = livros.filter(livro=>{
        let tituloTratado = livro.titulo.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()
        return regex.test(tituloTratado)
    })
    let arrayDesc = livrosSelected.map(livro=> livro.id)
    fetch(`/api/livros-search/${arrayDesc.join("-")}`)
}

function infoBook(idBook){
    location.href = `/info-livro/${idBook}`
}

async function eventsInputSearch(){
    let livros = await fetch("/api/livros-all").then(res=>res.json().then(json=> json))


    document.querySelectorAll(".input_search").forEach(input=>{
        input.addEventListener("input", ev=> suggestionSearch(ev.target, livros))
    })

    document.querySelectorAll(".button_search").forEach(button=>{
        button.addEventListener("click", ev=> searchBooksPag(ev.target, livros))
    })
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    eventsInputSearch()
})


function livroSelectFilter(livros, input_search){
    let value_search = input_search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    let result = livros.filter(livro=>{
        return livro.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === value_search
    })
    return result[0].id
}





