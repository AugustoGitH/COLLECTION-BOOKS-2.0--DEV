const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const cors = require("cors")

const livros = require("../banco_dados/livros.js")
const options = {origin: "http://localhost:3000" }

router.use(cors(options))
router.get("/livros-home", (req, res)=>{
    res.send(JSON.stringify(livros.getAll()))
})
gerarRotasBooks()
function gerarRotasBooks(){
    let livrosCollection = []
    livros.getAll().forEach((collection)=>{
        livrosCollection = livrosCollection.concat(collection.collection)
    })
    livrosCollection.forEach(livro=>{{
        router.get(`/${livro.id}`, (req, res)=>{
            res.send(JSON.stringify(livro))
        })
    }})
}

module.exports = router
