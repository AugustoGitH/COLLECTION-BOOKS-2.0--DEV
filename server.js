const { application } = require("express")
const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const apiRoute = require("./rotas/api")

const PORT = process.env.PORT || 3000


app.use('/public', express.static('public'));

app.set("views", path.join (__dirname, "views"))
app.set("view engine", "ejs")

app.use("/api", apiRoute)

app.get("/", (req, res)=>{res.render("home")})
app.get("/carrinho", (req, res)=>{res.render("carrinho")})

app.get("/livro_pesquisado", (req, res)=>{
    res.render("search")
})

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta: " + PORT)
})