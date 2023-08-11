let pessoa = {

    nome: "Nathan",
    idade: 24,
    falar: function() {
        console.log("Olá, turubão?");
    },

    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);