module.exports = {
    collections: [
         {
            categoria: "Ficção Cientifica",
            collection: [
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/41Lw1Ap9WYL._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "A Longa Viagem a um Pequeno Planeta Hostil",
                    capa: "Dura",
                    valor: 40.60
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71cL9wegDQL._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "A Máquina do Tempo: Uma Invenção",
                    capa: "Comum",
                    valor: 20.98
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/81bhkLoT89L._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "A Verdadeira História da Ficção Científica: Do Preconceito à Conquista das Massas",
                    capa: "Comum",
                    valor: 58.10
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/51qh7cI06QL._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "O Retrato de Dorian Gray",
                    capa: "Comum",
                    valor: 20.98
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71Imj+0W87L._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "Trilogia da Fundação - Deluxe",
                    capa: "Dura",
                    valor: 86.80
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71wgomAPTQS._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "As extraordinárias viagens de Júlio Verne - Box com 6 títulos",
                    capa: "Comum",
                    valor: 73.93
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71X245OYRBL._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "A vida invisível de Addie LaRue",
                    capa: "Comum",
                    valor: 41.89
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71pa5UOx8hL._AC_UL480_FMwebp_QL65_.jpg",
                    titulo: "A arte da ficção: 879",
                    capa: "Comum",
                    valor: 20.99
                }
            ]
        },
        {
            categoria: "Horror Literatura e Ficção",
            collection: [
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/91fQ51I4TRL._AC_UY327_FMwebp_QL65_.jpg",
                    titulo: "O Exorcista",
                    capa: "Dura",
                    valor: 34.09
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/91vZ64gOhyL._AC_UY327_FMwebp_QL65_.jpg",
                    titulo: "Horror na colina de Darrington",
                    capa: "Comum",
                    valor: 14.90
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71XQQ1AV6EL._AC_UY327_FMwebp_QL65_.jpg",
                    titulo: "Box Terríveis Mestres (3 livros + pôster + suplemento)",
                    capa: "Comum",
                    valor: 39.90
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71OZoV4V-4L._AC_UY327_FMwebp_QL65_.jpg",
                    titulo: "O Silêncio da Casa Fria",
                    capa: "Dura",
                    valor: 41.50
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/81-ScgPn+DL._AC_UL320_.jpg",
                    titulo: "A Morte faz seu preço",
                    capa: "Comum",
                    valor: 41.50
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71QEB42PJWL._AC_UL320_.jpg",
                    titulo: "O Médico e o Monstro e Outros Experimentos",
                    capa: "Dura",
                    valor: 40.60
                },
                {
                    id: gerarID_Books(),
                    url_capa: "https://m.media-amazon.com/images/I/71bQOoXuCQL._AC_UL320_.jpg",
                    titulo: "Kaito: reze por uma boa morte",
                    capa: "Dura",
                    valor: 40.60
                }
            ]
        },
    ],
    getAll(){
        return this.collections
    }
}
function gerarID_Books(){
    return Math.random().toString(16).substring(2, 12)
}