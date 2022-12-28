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
router.get("/livros-all", (req, res)=>{
    res.send(JSON.stringify(livros.getAllLivros()))
})
router.get("/livros-search/:ids", (req, res)=>{
    console.log(req.params.ids.split("-"))
})


module.exports = router
