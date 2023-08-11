const objs = [
    {
        nome: "Matheus",
        idade: 24,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "Descubra",
            empresa: "Empresas não te interessa"
        },
        hobbies: ["Assistir series e animes", "Ler mangas e livros", "Ver videos do Youtube"]
    },
    {
        nome: "João",
        idade: 35,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ["Jogar", "Academia"],
    }
]

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objetos

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => (
    console.log(pessoa.nome)
));