console.log(this);

let pessoa = {

    nome: "Nathan",
    idade: 24,
    falar: function() {
        console.log("Olá, turubão?");
    },

    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },

    aniversario: function() {
        this.idade += 1;
    },

    saudacao: function() {
        return 'Sr. ' + this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.saudacao());

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);